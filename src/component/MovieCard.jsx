import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { getSingleMovie } from '@/redux/movies/movies.api'
import axios from "axios"
export const MovieCard = ({ Title, Year, Released, Director, Images, Actors, id }) => {



  const handleWishlistdata = async(id) => {
  const   data = await getSingleMovie(id)

    axios.post("http://localhost:8080/wishlist",data)

  }
  return (


    <Card maxW='sm'>
      <Link key={id} href={`/movies/${id}`} >
        <CardBody>
          <Image
            src={Images[0]}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            width={300}
            height={200}
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>  {Title}</Heading>
            <Text>
              {Actors}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {Year}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {Released}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
      </Link>
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'

onClick={()=>handleWishlistdata(id)}

          >
      Add To Wishlist
          </Button>

        </ButtonGroup>
      </CardFooter>
    </Card>

  )
}

