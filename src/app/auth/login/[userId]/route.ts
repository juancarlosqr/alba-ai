'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userID = params.userId

  cookies().set({
    name: 'userID',
    value: userID,
    httpOnly: true,
    path: '/',
  })

  redirect('/dashboard')
}
