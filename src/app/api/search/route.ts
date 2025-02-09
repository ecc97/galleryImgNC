import { NextResponse } from "next/server";
import { getSearchImages } from "../../infraestructure/services/pexels.service";

export async function GET(request: Request){
    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get("page")? Number(searchParams.get("page")) : 1;
        let query = searchParams.get("query");
        if (!query) {
            query = "popular";
        }

        const orientation = searchParams.get("orientation") || "";
        const size = searchParams.get("size") || "";
        const color = searchParams.get("color") || "";

        const data = await getSearchImages(query, page, orientation, size, color);
        return NextResponse.json(data, { status: 200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500});
    }
}