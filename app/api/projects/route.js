import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";

const COLLECTION = "projects";

export async function GET() {
  try {
    const db = await getDb();
    const projects = await db.collection(COLLECTION).find({}).sort({ order: 1 }).toArray();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    if (!payload?.name || !payload?.src || !payload?.type) {
      return NextResponse.json(
        { error: "name, src, type là bắt buộc." },
        { status: 400 }
      );
    }

    const db = await getDb();
    const last = await db.collection(COLLECTION).find({}).sort({ order: -1 }).limit(1).toArray();
    const order = last.length ? Number(last[0].order || 0) + 1 : 0;
    const doc = {
      name: payload.name,
      src: payload.src,
      type: payload.type,
      descVi: payload.descVi || "",
      descEn: payload.descEn || "",
      descrip1Vi: payload.descrip1Vi || "",
      descrip1En: payload.descrip1En || "",
      descrip2Vi: payload.descrip2Vi || "",
      descrip2En: payload.descrip2En || "",
      img: Array.isArray(payload.img) ? payload.img : [],
      tech: Array.isArray(payload.tech) ? payload.tech : [],
      links: Array.isArray(payload.links) ? payload.links : [],
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
    const { _id, ...rest } = payload;
    const db = await getDb();
    await db
      .collection(COLLECTION)
      .updateOne({ _id: new ObjectId(_id) }, { $set: { ...rest, updatedAt: new Date() } });
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
