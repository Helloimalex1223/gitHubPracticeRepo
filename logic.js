async function getData(userName, sortParam, sortOrder) {
    const url = `https://api.github.com/users/${userName}/repos`;
    try {
        const response = await fetch(url,{
            headers: {
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