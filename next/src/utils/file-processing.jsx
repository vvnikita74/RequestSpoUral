'use server'

const JSZip = require("jszip")

async function createZipArchive(filesArray) {
  const zip = new JSZip()

  filesArray.forEach((fileObj) => {
    const buffer = Buffer.from(fileObj.fileString, 'binary');
    zip.file(fileObj.fileName, buffer, {binary: true});
  });

  const base64Zip = await zip.generateAsync({type: "base64"})
  return base64Zip
}


export async function createCommentary (filesObj, leadId, valuesObj, inputs) {
  
  try {

    const { NAME } = valuesObj

    for (let key of Object.keys(filesObj)) { 

      const { commentText } = inputs.filter((item) => item.bitrixKey === key)[0]

      let zipData = await createZipArchive(filesObj[key])

      const req = await fetch(`${process.env.BX_URL}/crm.timeline.comment.add`, {
        method: 'POST', 
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify ({
          "fields": {
            "ENTITY_ID": leadId,
            "ENTITY_TYPE": "lead",
            "COMMENT": `${commentText || 'Прикрепленные файлы'}`,
            "FILES": [[`${commentText} - ${NAME}.zip`, zipData]],
            "SETTINGS": {"HAS_FILES": "Y"}
          }
        })
      })
      
      if (req.status !== 200) return false
    }

    return true

  } catch (error) {return false}
}