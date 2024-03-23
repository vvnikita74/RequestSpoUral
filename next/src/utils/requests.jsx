export async function getTypes () {
  
  try {

    const req = await fetch(
      `${process.env.API_URL}/types`, 
      {headers: {'Authorization' : `Bearer ${process.env.API_TOKEN}`}, next: {revalidate: 0}}
    )
    
    const res = await req.json()

    return res?.data || []

  } catch (error) {return []}

}