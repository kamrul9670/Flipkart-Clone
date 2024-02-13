
    import { useState ,useContext } from 'react';

import React from 'react'
        import { Box, Button, Typography , styled } from '@mui/material';

        import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
 
          import { DataContext } from '../../context/DataProvider';

    // component

  import LoginDialog from '../login/LoginDialog';

  import Profile from './Profile';
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
  
  
      margin-left: 20px;
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


     const [open , setOpen] = useState(false);
   const {account , setAccount} = useContext(DataContext);
       const openDialog = () => {
        setOpen(true);
       }


  return (

    <Wrapper>
  {
    account ? <Profile account={account} setAccount={setAccount} /> : 
    <LoginButton variant="contained" onClick={()=> openDialog()} > Login </LoginButton>
  }


     {/* <LoginButton variant="contained" onClick={()=> openDialog()} > Login </LoginButton> */}


     <Typography style={{marginTop: 3 , width : 140 }}>Become a seller</Typography>
     <Typography style={{marginTop : 3 , }}>  More </Typography>


     <Container>
     <ShoppingCartIcon/>
        <Typography>Cart</Typography>

     </Container>
        <LoginDialog open={open} setOpen={setOpen} />

    </Wrapper>
  
  )
}

export default CustomButton;
