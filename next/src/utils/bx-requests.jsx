import { clearNumber, getFullName } from "@/utils/string-processing"


// Configuration

const serviceKEY = "UF_CRM_1606385150474"

const statusID = "UC_K2T2MM"

// IMPORTANT. The service ID is inserted as an array
const serviceID = {
  "Проект организации демонтажа": 252,
  "Техническое обследование здания": 60,
  "Лазерное сканирование": 1352,
  "Признание дома аварийным": 254
}



// Requests

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

  } catch (error) {console.log(error); return null}

}

// Lead creating
export async function createLead (valuesObj) {
  return null
}