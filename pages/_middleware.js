import { NextResponse } from 'next/server'

export function middleware() {
    
  return  NextResponse.redirect('https://www.youtube.com/watch?v=zW-AIXAnLcE')
}