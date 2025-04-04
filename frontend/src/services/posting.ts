const API_BASE_URL = 'http://localhost:3000/api';


export async function createPost(title: string, message: string): Promise<{ title:string, message: string }> {
    try {
        const response = await fetch(`${API_BASE_URL}/posting`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, message }),
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to call hello API:', error);
        throw error;
    }
}