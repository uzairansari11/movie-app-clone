import {
    getMoviesDataFromApi,
    getSingleMovie,
} from "@/redux/movies/movies.api";
import React from "react";



const SingleMovie = ({ singleMovie }) => {
    return (
        <div>
            <h2>{singleMovie.Title}</h2>
        </div>
    );
};


export default SingleMovie;




export const getStaticPaths = async () => {
    const data = await getMoviesDataFromApi();
//path:{params:{id:productid}}
    return {
        paths: data.map((path) => ({ params: { id: String(path.id) } })),

        fallback: false, // can also be true or 'blocking'
    };
};





// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps (context) {
    const id = context.params.id;

    const data = await getSingleMovie(id);
    console.log("data from api id", data);
    return {
        // Passed to the page component as props
        props: { singleMovie: data },
    };
}
