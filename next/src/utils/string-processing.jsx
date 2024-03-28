export function clearNumber (phone) {
  if (typeof phone !== 'string') return phone
  return phone.replace(/[() ]/g, '')
}

export function getFullName (fullName) {
  const parts = fullName.trim().split(' ')
  return ({
    surname: parts[0],
    name: parts?.[1] || ' ',
    secondName: parts?.[2] || ' ' 
  })
}