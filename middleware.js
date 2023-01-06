import { NextResponse, NextRequest } from 'next/server'

export async function middleware(req) {
  const url = req.nextUrl.clone()
  if (url.pathname === '/hello') {
    url.pathname = '/hello-nextjs'
    return NextResponse.redirect(url)
  }
}
