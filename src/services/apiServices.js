const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
};
export const getProducts = async () => {
    const url = `https://coding-challenge-api.aerolab.co/products`;
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data;
};
export const getUser = async () => {
    const url = `https://coding-challenge-api.aerolab.co/user/me`;
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data;
};
export const getPoints = async () => {
    const url = `https://coding-challenge-api.aerolab.co/user/points`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ amount: 1000 }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk'
        }
    });
    const data = await response.json();
    return data;
};
export const redeemProducts = async (productId) => {
    const url = `https://coding-challenge-api.aerolab.co/redeem`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ productId: {productId} }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk'
        }
    });
    const data = await response.json();
    return data;
};