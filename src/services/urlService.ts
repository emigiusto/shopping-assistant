import axios from 'axios';

export default class UrlService {
    async fetchHTMLContent(url: string): Promise<string> {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error: any) {
            console.error(`Error fetching HTML content from ${url}:`, error.message);
            throw error;
        }
    }
}