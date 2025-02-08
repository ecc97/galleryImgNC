export const getSearchImages = async (query: string, page: number, perPage: number = 20) => {
    const API_KEY = process.env.PEXELS_API_KEY;
    try {
        const response = await fetch(`https://api.pexels.com/v1/search?page=${page}&per_page=${perPage}&query=${query}`, {
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