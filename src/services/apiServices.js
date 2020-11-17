const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
}

export const getListProducts = async () => {
    const url = `https://coding-challenge-api.aerolab.co/products`;
    const response = await fetch(url, {headers});
    const data = await response.json();
    console.log(data, 'esta es la lista de productos');
    return data;
};