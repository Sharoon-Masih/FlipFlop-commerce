// import { hookSecret } from "@/lib/sanity.api";
import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

// hookSecret is an exported variable that holds the value of the hook secret environment variable. You can substitute this with process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET

// revalidateTag is the revalidating function from Nextjs.

// NextRequest and NextResponse are functions that extends the Web Response API with additional convenience methods (Nextjs 2023).NextRequest and NExtresponse asay func hain jo Web Request/response API hoti hai unka thora extend krka jo req ya response ata hai uska sth kuch additional info or methods be send krtay hain jokay validation ma helpout krti hai.

// parseBody is a function from the Sanity webhook used for validating the hook body.
export async function POST(req: NextRequest) {
    try {
        const { body, isValidSignature } = await parseBody<{
            _type: string;
            slug?: string | undefined;
        }>(req, process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET);

        if (!isValidSignature) {
            return new Response("Invalid Signature", { status: 401 });
        }

        if (!body?._type) {
            return new Response("Bad Request", { status: 400 });
        }

        revalidateTag(body._type);
        return NextResponse.json({
            status: 200,
            revalidated: true,
            now: Date.now(),
            body,
        });
    } catch (error: any) {
        console.error(error);
        return new Response(error.message, { status: 500 });
    }
}

//Now flow iss tarah sa haka jo parseBody ka function hai wo 2 cheezain return kr rha hai ek toh "Body" joka humna ek generic object pass kia hai parseBody func kay humay body ma yeh wali properties chaiya or dusra isValidSignature jo boolean value return krega agr usko secret denga warna null return krega.

//then phr jo be isValidSignature ayega wo agr true hoga toh phr Ok warna jo condition hai uska A/c wo response send krdega.

//isi tarah sa body ko be A/c to condition ka check krenga.

//then phr agar body be hogi or usme "_type" property be hogi toh revalidateTag func ma "body._type" jo ka as a tag treat krega, but iska jo mechanism wo kya hoga or "body._type" ma jo value hogi wo kaha sa ayegi,basic yeh iss tarah sa flow chlega kay jaha jaha par hum sanity jo ek func provide krti hai which client.fetch() usme jis type ka document ko hum fetch krenga usi type ko as a tag pass krenga fetch ka func ma like : client.fetch(" _type == 'product' ",{ next:{ tags: ["product"] } }) ab jitni jaga be hum "product" type ko as a tag denga revalidateTag() un pages ko revalidate krdega.
