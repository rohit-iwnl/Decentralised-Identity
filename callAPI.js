const axios = require('axios');

async function fetchAssets(ownerAddress) {
    const url = 'https://api.opensea.io/api/v1/assets';
    const apiKey = ''; // key here
    const params = {
        owner: ownerAddress,
        order_direction: 'desc',
        offset: 0,
        limit: 50 // change it if needed
    };

    try {
        const response = await axios.get(url, { params, headers: { 'X-API-KEY': apiKey } });
        return response.data.assets;
    } catch (error) {
        console.error('Error fetching assets:', error);
        return null;
    }
}
