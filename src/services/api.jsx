const key = "0b7cf8a9683ae029f8144e1ee14282a1"
const ids = ["28", "12", "16", "35", "80", "99", "19", "10751", "14", "36", "27", "10402", "9648", "10749", "878", "10770", "53", "37", "10752"]

const urls = []
ids.forEach(id => {
    urls.push(`https://api.themoviedb.org/3/list/${id}?api_key=${key}`)
})


export {urls}