import { NextResponse, type NextRequest } from "next/server"

const FB_PARAMS = ["fbclid", "fbid", "fb_ref", "fb_source", "refsrc"]

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()

  let mutated = false
  for (const param of FB_PARAMS) {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param)
      mutated = true
    }
  }

  if (mutated) {
    return NextResponse.redirect(url, { status: 301 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/:path*"],
}
