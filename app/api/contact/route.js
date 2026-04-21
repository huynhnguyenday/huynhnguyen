import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const fullName = (body?.fullName || "").trim();
    const email = (body?.email || "").trim();
    const phone = (body?.phone || "").trim();
    const message = (body?.message || "").trim();

    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Thiếu dữ liệu bắt buộc." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Email không hợp lệ." },
        { status: 400 }
      );
    }

    const db = await getDb();
    const doc = {
      fullName,
      email,
      phone,
      message,
      createdAt: new Date(),
    };
    const result = await db.collection("contacts").insertOne(doc);

    return NextResponse.json(
      { success: true, id: result.insertedId.toString() },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Lỗi server." },
      { status: 500 }
    );
  }
}
