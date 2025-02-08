import { NextResponse } from "next/server";
import { getSearchImages } from "../../infraestructure/services/pexels.service";

export async function GET(request: Request){
    try {
        const { searchParams } = new URL(request.url);
        let query = searchParams.get("query");
        if (!query) {
            query = "popular";
        }
        const data = await getSearchImages(query);
        return NextResponse.json(data, { status: 200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500});
    }
}