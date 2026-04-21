import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";

const COLLECTION = "skills";

export async function GET() {
  try {
    const db = await getDb();
    const skills = await db.collection(COLLECTION).find({}).sort({ order: 1 }).toArray();
    return NextResponse.json(skills);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    if (!payload?.name || !payload?.src) {
      return NextResponse.json({ error: "name và src là bắt buộc." }, { status: 400 });
    }

    const db = await getDb();
    const last = await db.collection(COLLECTION).find({}).sort({ order: -1 }).limit(1).toArray();
    const order = last.length ? Number(last[0].order || 0) + 1 : 0;
    const doc = {
      name: payload.name,
      src: payload.src,
      order,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const result = await db.collection(COLLECTION).insertOne(doc);
    return NextResponse.json({ ...doc, _id: result.insertedId }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const payload = await request.json();
    if (!payload?._id) {
      return NextResponse.json({ error: "_id là bắt buộc." }, { status: 400 });
    }

    const db = await getDb();
    const { _id, ...rest } = payload;
    const updateDoc = { ...rest, updatedAt: new Date() };

    await db
      .collection(COLLECTION)
      .updateOne({ _id: new ObjectId(_id) }, { $set: updateDoc });

    const updated = await db.collection(COLLECTION).findOne({ _id: new ObjectId(_id) });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Thiếu id." }, { status: 400 });
    }

    const db = await getDb();
    await db.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
