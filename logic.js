async function getData(userName) {
    const url = `https://api.github.com/users/${userName}/repos`;
    try {
        const response = await fetch(url,{
            headers: {
                Accept: "application/vnd.github+json"
                // Authorization: "token YOUR_TOKEN_HERE" // optional
            }
        });
        if (!response.ok) {
            throw new Error("Response status: " + response.status);
        }
        const data = await response.json();
        return data;
    } 
    catch (error) 
    {
        console.error("Error fetching data:", error);
        throw error;
    }
}