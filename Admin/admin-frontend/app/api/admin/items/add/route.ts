import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "../../../../../lib/supabase-server";

export async function POST(req: Request) {
  try {
    const supabase = await createServerSupabaseClient(); // <-- get the client

    const formData = await req.formData();
    console.log(formData)
    const image = formData.get("image") as File | null;

    // Required fields
    const description = formData.get("description") as string;
    const location_lost = formData.get("location_lost") as string;
    const date_lost = formData.get("date_lost") as string;
    const reported_by_name = formData.get("reported_by_name") as string;

    if (!description || !location_lost || !date_lost || !reported_by_name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Optional fields
    const item_name = formData.get("item_name") as string | null;
    const reported_by_roll = formData.get("reported_by_roll") as string | null;
    const security_question = formData.get("security_question") as string | null;
    const answer = formData.get("answer") as string | null;

    let image_url: string | null = null;

    // ---------- Image Upload ----------
    if (image) {
      const fileExt = image.name.split(".").pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = `lost-images/${fileName}`;

      const buffer = Buffer.from(await image.arrayBuffer());

      const { error: uploadError } = await supabase.storage
        .from("lost-images")
        .upload(filePath, buffer, {
          contentType: image.type,
          upsert: false,
        });

      if (uploadError) {
        return NextResponse.json({ error: uploadError.message }, { status: 400 });
      }

      const { data } = supabase.storage
        .from("lost-images")
        .getPublicUrl(filePath);

      image_url = data.publicUrl;
    }

    // ---------- Insert ----------
    const { error: dbError } = await supabase
      .from("Lost_items")
      .insert({
        item_id: crypto.randomUUID(), // REQUIRED
        item_name,
        description,
        location_lost,
        date_lost,
        reported_by_name,
        reported_by_roll,
        created_post: new Date().toISOString(),
        image_url,
        security_question,
        answer,
        claimed: false,
      });

    if (dbError) {
      return NextResponse.json({ error: dbError.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to create lost item" }, { status: 500 });
  }
}
