export const getSearchImages = async (query: string, page: number, orientation?: string, size?: string, color?: string, perPage: number = 20) => {
    const API_KEY = process.env.PEXELS_API_KEY;
    try {
        let url = `https://api.pexels.com/v1/search?page=${page}&per_page=${perPage}&query=${query}`;

        if (orientation) url += `&orientation=${orientation}`;
        if (size) url += `&size=${size}`;
        if (color) url += `&color=${color}`;

        const response = await fetch(url, {
            headers: {
                Authorization: API_KEY as string,
            },
        });
    
        if (!response.ok) {
            throw new Error("Error fetching images from Pexels");
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching images:", error);
        throw error
    }
};

export const getCuratedImages = async (page?: number, perPage?: number) => {
    const API_KEY = process.env.PEXELS_API_KEY;
    perPage = 20
    try {
        const response = await fetch(`https://api.pexels.com/v1/curated?page=${page}&per_page=${perPage}`, {
            headers: {
                Authorization: API_KEY as string,
            },
        });
    
        if (!response.ok) {
            throw new Error("Error fetching images from Pexels");
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching images:", error);
        throw error;
    }
}