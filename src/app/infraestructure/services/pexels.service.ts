export const fetchPexelsImages = async (query: string = "nature", perPage: number = 15) => {
    const API_KEY = process.env.PEXELS_API_KEY;
    console.log("API KEY:", process.env.PEXELS_API_KEY);
    try {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`, {
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