import { NextRequest } from "next/server";



export async function POST(req: NextRequest){
    //extract the body
    const body = await req.json();
    console.log(body);

    //store the body in database

    return Response.json({
        message: "You are logged in!"
    })
}