import Link from 'next/link'
import Image from 'next/image'
import {Box,Text,Button,Flex} from '@chakra-ui/react'
import {baseUrl,fetchApi} from '../utils/fetchApi'
import Property from '../components/Property'
const Banner = ({purpose,title1,title2,imgUrl,linkName,buttonText,desc1,desc2})=>(
<Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
<Image  src={imgUrl} width={500} height={300} alt={'banner image'}/>
<Box p={5}>
<Text color='gray.500' fontWeight='medium' fontSize='sm'>
{purpose}
</Text> 
<Text  fontWeight='bold'   fontSize='3xl'>{title1} <br /> {title2} </Text>
<Text   fontSize='3xl'  paddingTop='3' paddingBottom='3' color='gray.700'>
{desc1} <br />{desc2}
</Text>
<Button fontSize='xl'>
<Link href={linkName}>{buttonText}</Link>
</Button>

</Box>
</Flex>
)

export default function Home({propertiesForRent,propertiesForSale}) {
  console.log(propertiesForRent,propertiesForSale)
  return (
    <Box>
    <Banner
      purpose='RENT A HOME'
      title1='Rental Homes for'
      title2='Everyone'
      desc1=' Explore from Apartments, builder floors, villas'
      desc2='and more'
      buttonText='Explore Renting'
      linkName='/search?purpose=for-rent'
      imgUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
    />
    <Flex flexWrap='wrap'>
      {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
<Banner 
 purpose={'BUY A HOME'}
 title1={'Find, Buy & Own Your'}
 title2={'Dream Home'}
 imgUrl={'https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'}
 linkName={'/search?purpose=for-sale'}
 buttonText={'Explore Buying'}
 desc1={'Explore Apartments,Villa,Home'}
 desc2={'And More'}

 />
 <Flex flexWrap='wrap'>
 {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
 </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);
  
  return{
    props:{
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  };
}