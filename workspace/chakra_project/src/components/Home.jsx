import { Box, Container, Heading, Img, Stack,Text} from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";


const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
  };



const Home = () => {
  return (
    <Box >
        <MyCarousel></MyCarousel>
        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'}  borderBottom={'2px solid'} m={'auto'}>Services</Heading>
        
        <Stack h={'full'}
        p={'4'}
        alignItems={'center'}
        direction={['column','row']}>
            <Img src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}></Img>
            <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
            modi soluta ullam voluptatum unde repellat in molestias quod?
            Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
            velit culpa maiores. Inventore esse illum excepturi dolores est
            natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
            adipisci minima hic, nam provident quo aperiam quasi vel?
            Dignissimos accusantium aliquid aut vel explicabo voluptatum
            molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
            omnis officiis autem dolorum!
          </Text>
       

        </Stack>

        </Container>
        

        

    </Box>
  )
 
}
const MyCarousel=()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w={'full'} h={'100vh'} >
            <Img src={img1} height={'full'} width={'full'} objectFit={'cover'}></Img>
            
            <Heading bgColor={'blackAlpha.600'} color={'white'}  {...headingOptions}>Watch The future</Heading>
            
        </Box> 
        <Box w={'full'} h={'100vh'} >
            <Img src={img2}  height={'full'} width={'full'} objectFit={'cover'}></Img>
            
            <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>Future is gaming</Heading>
            
        </Box>    
        <Box w={'full'} h={'100vh'} >
            <Img src={img3}  height={'full'} width={'full'} objectFit={'cover'} ></Img>
            
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Gaming On Console</Heading>
            
        </Box> 
        <Box w={'full'} h={'100vh'} >
            <Img src={img4}  height={'full'} width={'full'} objectFit={'cover'} ></Img>
            
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Nightlife</Heading>
            
        </Box> 

    </Carousel>

  )

export default Home
