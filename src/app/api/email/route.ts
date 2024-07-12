import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, name, message } = await request.json();
    return NextResponse.json({ email, name, message }, { status: 200 });
  } catch (error) {
    console.log("Error sending email");
    throw error;
  }
}
