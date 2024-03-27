export function getOriginalImageUrl (image) {
  if (!(image && image?.data)) return null
  const strapi_url = 'https://request.spo-ural.ru/api'
  return strapi_url + image?.data?.attributes.url
}