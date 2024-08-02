import { redirect } from 'next/navigation'
import { type NextRequest } from 'next/server'

if (!process.env.GOOGLE_API_KEY) {
  throw new Error('Missing environment variable: GOOGLE_API_KEY')
}

const googleApiKey = process.env.GOOGLE_API_KEY

export async function GET(request: NextRequest) {
  let redirectTo

  const searchParams = request.nextUrl.searchParams
  const reference = searchParams.get('reference')
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${reference}&key=${googleApiKey}`
  const options = { method: 'GET' }

  try {
    const response = await fetch(url, options)
    const data = await response.json()

    redirectTo = data.result.url
  } catch (error) {
    console.error(error)

    redirectTo = 'https://google.com/maps'
  }

  redirect(redirectTo)
}
