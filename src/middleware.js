import { NextResponse } from "next/server";


export function middleware(request){
  const path = request.nextUrl.pathname;
  
  const isPublicPath = path === "/login" || path === "/register"
  // console.log('path', path)
  // const token = request.cookies.get('__Secure-next-auth.session-token')?.value || ''
  const token = request.cookies.get('next-auth.session-token')?.value || ''
// console.log('token', token)
  if(isPublicPath && token){
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
  }
  
  if(!isPublicPath && !token){
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
}

export const config = {matcher: ["/dashboard/:path*", "/register", "/login"]}