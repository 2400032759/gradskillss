/**
 * Cloudflare R2 Upload Utility for gradskills.in
 * 
 * Account ID: 6d4f9d3f5fb0d9a09773171138b5b372
 * Bucket: gradskillsresume
 */

const WORKER_URL = "https://gradskills-r2-worker.your-subdomain.workers.dev";

export async function uploadResumeToR2(file: File): Promise<string> {
    try {
        // 1. Request a pre-signed URL from your backend (Worker)
        // This keeps your R2 credentials secure on the server side
        const response = await fetch(WORKER_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                filename: file.name,
                contentType: file.type,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to get upload authorization.");
        }

        const { url, key } = await response.json();

        // 2. Upload the file directly to Cloudflare R2 using the pre-signed URL
        const uploadResponse = await fetch(url, {
            method: "PUT",
            body: file,
            headers: {
                "Content-Type": file.type,
            },
        });

        if (!uploadResponse.ok) {
            throw new Error("Upload to storage failed.");
        }

        // Return the key or public URL to store in your database
        console.log(`Successfully uploaded: ${key}`);
        return key;

    } catch (error) {
        console.error("R2 Upload Error:", error);
        throw error;
    }
}
