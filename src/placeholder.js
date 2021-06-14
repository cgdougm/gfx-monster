
// https://via.placeholder.com/240x360
// https://via.placeholder.com/240x360?text=240x360+PLACEHOLDER

// https://generative-placeholders.glitch.me/image?width=240&height=360&style=triangles&gap=120&colors=42

export function get_placeholder(options) {
    const encodeGetParams = p => 
    Object.entries(p).map(kv => kv.map(encodeURIComponent).join("=")).join("&");

    const default_params = {
        width: 300,
        height: 300,
        style: 'triangles',
        gap: 100,
        colors: 1,
        img: 0
    };
    const params = Object.assign(default_params, options);
    const base_url = 'https://generative-placeholders.glitch.me'
    const endpoint = 'image'
    return `${base_url}/${endpoint}?${encodeGetParams(params)}`
}


// https://picsum.photos/id/0/info
// {
//     "id": "0",
//     "author": "Alejandro Escamilla",
//     "width": 5616,
//     "height": 3744,
//     "url": "https://unsplash.com/...",
//     "download_url": "https://picsum.photos/..."
// }