const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA1MGE3NzNkNGE1YjAwMjBjODA2MzIiLCJpYXQiOjE2MTA5NDMwOTV9.RQKna4r_MW8OlnFsskLElUaAJdf2HsvY9UfOvVqQQYg"
};
export const getProducts = async () => {
    const url = `https://coding-challenge-api.aerolab.co/products`;
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data;
};
export const getUser = async () => {
    const url = getURL('user/me');
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data;
};
export const addPointsService = async (points) => {
    console.log(points, 'points on service');
    // const url = `https://coding-challenge-api.aerolab.co/user/points`;
    const url = getURL('user/points');
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ amount: +points }),
        headers
    });
    const data = await response.json();
    console.log(data, 'add points service');
    return data;
};
export const redeemProducts = async (productId) => {
    const objProductId = { productId: productId }
    const url = `https://coding-challenge-api.aerolab.co/redeem`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(objProductId),
        headers
    });
    const data = await response.json();
    return data;
};


function getURL(url) {
    return `https://coding-challenge-api.aerolab.co/${url}`
}
