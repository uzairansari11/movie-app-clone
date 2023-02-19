import { getMoviesDataFromApiWishList, deleteDatafromApi } from '@/redux/movies/movies.api'
import React, { useEffect, useState } from 'react'

const watchlist = () => {

    const [wishList, setWishList] = useState([])

    const getData = async () => {
        const data = await getMoviesDataFromApiWishList()
        setWishList(data)
    }
    useEffect(() => {
        getData()


    }, [])
    const handleDelete = (id) => {
        deleteDatafromApi(id).then((res) => {
            getData()
        })
    }

    return (
        <div>

            {wishList?.map((movie) =>

                <div key={movie.id} >

                    <h2>{movie.Title}</h2>

                    <button onClick={() => handleDelete(movie.id)} >delete</button>
                </div>


            )}

        </div>
    )
}

export default watchlist