import { ClerkMiddlewareAuth, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";


const isMatcher:(req:NextRequest)=>boolean=createRouteMatcher(["/products/(.*)"])  // "/products/(.*)" jab be dynamic route dena hoga toh iss hi tarah sa dengay kay pehlay /route or then phr / laga kay agay gobal pattern lga dia jiska mtlb kay koi route segment ayy usko protect krna hai ab zahir hai dynamic route ho toh route segment kuch be hoskta hai iss lia glob pattern apply krdia hai. 

export default clerkMiddleware((auth:ClerkMiddlewareAuth,req:NextRequest)=>{
 if(isMatcher(req)){
    auth().protect()
 }
})

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};