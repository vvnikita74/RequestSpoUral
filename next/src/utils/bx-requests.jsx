"use server"

import { clearNumber, getFullName } from "@/utils/string-processing"


// Configuration
const contactKEY = "CONTACT_ID"

const statusKEY = "STATUS_ID"
const statusID = "UC_K2T2MM"

const serviceKEY = "UF_CRM_1606385150474"

// IMPORTANT. The service ID is inserted as an array
const servicesID = {
  "Проект организации демонтажа": 252,
  "Техническое обследование здания": 60,
  "Лазерное сканирование": 1352,
  "Признание дома аварийным": 254
}

// A contact is created when there is no existing one. Returning contact_ID
export async function contactProcessing (fullName, phoneValue) {

  let req
  let res

  const { surname, name, secondName } = getFullName(fullName)
  const phone = clearNumber(phoneValue)

  try {

    // trying to find an existing contact
    req = await fetch(`${process.env.BX_URL}/crm.contact.list`, {
      method: 'POST',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify({
        "filter": {"PHONE": phone},
        "select": ["NAME", "PHONE"]
      })
    })

    res = await req.json()
    if (res.result.length > 0) return res.result[0].ID

    // creating a contact if an existing one is not found
    req = await fetch(`${process.env.BX_URL}/crm.contact.add`, {
      method: 'POST',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify({
        "fields": {
          "NAME": name,
          "LAST_NAME": surname,
          "SECOND_NAME": secondName,
          "PHONE": [ {"VALUE_TYPE": "WORK", "VALUE": phone}]
        }
      })
    })

    res = await req.json()
    return res.result

  } catch (error) {return null}

}

// Lead creating
export async function createLead (valuesObj, service) {
  try {

    // extracting contact fields
    const { PHONE, NAME, ...rest} = valuesObj

    // array processing
    for (let key of Object.keys(rest)) {
      if (Array.isArray(rest[key])) {
        rest[key] = rest[key].join(', ')
      }
    }

    // creating contact
    const contactID = await contactProcessing(NAME, PHONE)
    if (!contactID) throw new Error('contact is missing')
  
    // inserting additional data
    rest[statusKEY] = statusID
    rest[serviceKEY] = [servicesID[service]]
    rest[contactKEY] = contactID

    // creating lead
    const req = await fetch(`${process.env.BX_URL}/crm.lead.add`, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        "fields": {
          ...rest
        }
      })
    })

    const res = await req.json()
    return res.result

  } catch (error) {console.log('LEAD ERROR', error); return -1}
}