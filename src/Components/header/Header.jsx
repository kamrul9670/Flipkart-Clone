import { Toolbar ,AppBar ,styled ,Box , Typography } from "@mui/material";

import Search from "./Search";


const StyledHeader = styled(AppBar)`
background: #2974f0;
height : 55px;

`
const Component = styled(Box)`
margin-left : 12%;
line-height : 0;
`
const SubHeading = styled(Typography)`
font-size : 10px;
font-style : italic ;
`
const PlusImage = styled('img')({
    width : 10 ,
    height : 10 ,
    marginLeft : 4 ,
})
     const Header = () => {

   const logoUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';


   const subUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
   
    <StyledHeader>
        <Toolbar>
          <Component>
        <img src={logoUrl} alt='logo' style={{width : 75}} />

        <Box style={{display:'flex'}}>
            <SubHeading> Explore&nbsp;
                <Box component="span" style={{color : 'yellow'}}>   Plus       </Box>   
                </SubHeading>

                <PlusImage src={subUrl} alt="plus_logo"  />  
        </Box>
          </Component>
          <Search />
        </Toolbar>
    </StyledHeader>
  )

     }


     export default Header;