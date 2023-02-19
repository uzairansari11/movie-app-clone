import axios from "axios"

export const getMoviesDataFromApi = async () => {
    const res = await axios.get("http://localhost:8080/movies")
//res.data
    console.log("-------------",res.data)
    return res.data
}

export const getSingleMovie = async (id) => {
    const res = await axios.get(`http://localhost:8080/movies/${id}`)
    //res.data
    console.log("-------------", res.data)
    return res.data
}



export const getMoviesDataFromApiWishList = async () => {
    const res = await axios.get("http://localhost:8080/wishlist")
    //res.data
    console.log("-------------", res.data)
    return res.data
}

//await

export const deleteDatafromApi = async (id) => {
    const res = await axios.delete(`http://localhost:8080/wishlist/${id}`)

}

