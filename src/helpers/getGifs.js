const getGifs = async category => {
    const url =
        `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}` +
        `&limit=10&api_key=jFlqPHAKYLo2S7UKLQKOlXK7w4sLTFPK`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifData = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.fixed_height.url,
        };
    });

    return gifData;
};

export default getGifs;
