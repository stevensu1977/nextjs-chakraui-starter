import { NextResponse } from 'next/server'

export async function GET() {
    const res = NextResponse.json({ server: "AppSever",version:"v0.0.1" });
    return res;
  }