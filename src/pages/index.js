
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getingMovieDatathroughApifunction } from '@/redux/movies/movies.action'
import {MovieCard} from '@/component/MovieCard'
import { Grid } from '@chakra-ui/react'



export default function Home () {
  const moviesData = useSelector((store) => store.moviesReducer.movies)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getingMovieDatathroughApifunction())
  }, [dispatch])


  console.log("moviesssssssssssss",moviesData)


  return (<>


    <Grid templateColumns='repeat(3, 1fr)' gap={4}>
    {moviesData?.map((movies) =>

      <MovieCard {...movies} />



)}
    </Grid>
  </>
  )
}
