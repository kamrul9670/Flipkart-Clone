
import React from 'react'
  import { Box, Button, Typography , styled } from '@mui/material';


  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

  const Wrapper = styled(Box)`
  display : flex ;
  align-items : center;
  margin :  0 14% 0 auto;
   
  &> button , &> p , &> div{
    margin-right :  2.4vw; ;
    font-size : 0.9vw;
  }


`



     const Container = styled(Box)`
     
     display : flex ;
     
     `


  const LoginButton = styled(Button)`
  
  
  margin-left: 5px;
  color :#2874f0 ;
  background-color: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height : 32px;
  
  
  
  
  `








  const CustomButton = () => {
  return (

    <Wrapper>

     <LoginButton variant="contained" > Login </LoginButton>


     <Typography style={{marginTop: 3 , width : 140 }}>Become a seller</Typography>
     <Typography style={{marginTop : 3 , }}>  More </Typography>


     <Container>
     <ShoppingCartIcon/>
        <Typography>Cart</Typography>

     </Container>


    </Wrapper>
  
  )
}

export default CustomButton;
