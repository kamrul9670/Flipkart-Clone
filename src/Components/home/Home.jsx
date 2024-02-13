import React from 'react'


     import { useEffect} from 'react';

   import Navbar from './Navbar';

   import Banner from './Banner';

     import Slide from './Slide';

     import MidSlide from './MidSlide';
      
        import MidSection from './MidSection';
        
    import { Box , styled} from '@mui/material';

    import {getProducts} from '../../redux/actions/productActions';

          import { useDispatch , useSelector} from 'react-redux';

const Component = styled(Box)`

padding : 10px ;

background : #f2f2f2;


` 



const Home = () => {
     
      
     const {products} = useSelector(state =>  state.getProducts)


    //  const {products} = getProducts;      // object destructuring method
     

       console.log(products);

      
     const dispatch = useDispatch();

     useEffect(() => {
       dispatch(getProducts())
     } ,[dispatch])
  return (
   <>    
     <Navbar    />
      <Component>     

      <Banner  />

      <MidSlide products={products} title="Deal of the Day" timer={true} />

      <MidSection />
      
      <Slide products={products} title="Discount for you" timer = {false}  />

      <Slide products={products} title="Suggesting Items"  timer = {false} />

      <Slide products={products} title="Top Selection"  timer = {false} />

      <Slide products={products} title="Recommended Item"  timer = {false} />

      <Slide products={products} title=" Trending Offers"  timer = {false} />

      <Slide products={products} title=" Seasean Top Pick's  "  timer = {false} />

      <Slide products={products} title=" Top Deals on Accessories "  timer = {false} />

      </Component>
    


      </>

  )
}

export default Home
