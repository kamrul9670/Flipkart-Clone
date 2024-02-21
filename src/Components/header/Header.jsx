import { Toolbar ,AppBar ,styled ,Box , Typography } from "@mui/material";

import Search from "./Search";

 import CustomButton from "./CustomButton";

    import { Link } from "react-router-dom";

const StyledHeader = styled(AppBar)`
background: #2974f0;
height : 3.6rem;

`
const Component = styled(Link)`
margin-left : 12vw;
line-height : 0;
text-decoration : none ;
color : inherit;
`
const SubHeading = styled(Typography)`
font-size : 0.5rem;
font-style : italic ;
`
const PlusImage = styled('img')({
    width : 10 ,
    height : 10 ,
    marginLeft : 3.8 ,
});


  const CustomButtonWrapper = styled(Box)`
  margin : 0 12% 0 auto;
  
  `


     const Header = () => {

   const logoUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';


   const subUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
   
    <StyledHeader>
        <Toolbar style={{minHeight : 55}}>
          <Component to="/">
        <img src={logoUrl} alt='logo' style={{width : 70}} />

        <Box style={{display:'flex'}}>
            <SubHeading> Explore&nbsp;
                <Box component="span" style={{color : 'yellow'}}>   Plus   </Box>   
                </SubHeading>

                <PlusImage src={subUrl} alt="plus_logo"  />  
        </Box>
          </Component>
          <Search />
          <CustomButtonWrapper>

  <CustomButton />

          </CustomButtonWrapper>

        </Toolbar>
    </StyledHeader>
  )

     }


     export default Header;