import { ContactUsFormValidationSchema } from "@/components/ContactUsForm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const resp = await req.json();
        return NextResponse.json(resp)
    } catch (error) {
        console.log('Error',error);
        throw error;
    }
}