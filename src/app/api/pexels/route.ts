import { NextResponse } from "next/server";
import { fetchPexelsImages } from "../../infraestructure/services/pexels.service";

export async function GET(){
    try {
        const data = await fetchPexelsImages();
        return NextResponse.json(data, { status: 200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500});
    }
}