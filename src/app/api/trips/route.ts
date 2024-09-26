import { type NextRequest } from 'next/server'

if (!process.env.TRIPADVISOR_API_KEY) {
  throw new Error('Missing environment variable: TRIPADVISOR_API_KEY')
}

const key = process.env.TRIPADVISOR_API_KEY

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const category = searchParams.get('category')
  const query = searchParams.get('query')
  const language = searchParams.get('language')
  const url = `https://api.content.tripadvisor.com/api/v1/location/search?radius=10&radiusUnit=km&category=${category}&language=${language}&key=${key}&searchQuery=${query}`
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Referer: 'https://alba.moonside.ai',
    },
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json()

    return Response.json(data)
  } catch (error) {
    console.error(error)

    return Response.json({ data: null })
  }
}
