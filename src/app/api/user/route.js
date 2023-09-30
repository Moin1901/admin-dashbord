import connectToDB from "@/database/page";
import { NextResponse } from "next/server";
import User from "@/models/user/page";

export async function POST(req) {
  try {
    await connectToDB();
    const { name, email } = await req.json();
    const newUser = await User.create({ name, email });
    if (newUser) {
      return NextResponse.json({
        sucess: true,
        message: "user registered",
      });
    } else {
      return NextResponse({
        success: false,
        message: "failed to registered !Please try again",
      });
    }
  } catch (error) {
    return NextResponse({
      success: false,
      message: "got some server error",
    });
  }
}
