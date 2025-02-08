import { NextResponse } from "next/server";
import { getCuratedImages } from "@/app/infraestructure/services/pexels.service";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
        const perPage = searchParams.get("per_page") ? Number(searchParams.get("per_page")) : 20;
        const data = await getCuratedImages(page, perPage);
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error("Error fetching images:", error);
        return NextResponse.json({ message: "Error fetching images" }, { status: 500 });  
    }
}