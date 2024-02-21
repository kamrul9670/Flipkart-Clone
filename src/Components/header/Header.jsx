import { Toolbar ,AppBar ,styled ,Box , Typography, IconButton,List ,Drawer} from "@mui/material";


    import {Menu} from '@mui/icons-material';
import Search from "./Search";

 import CustomButtons from "./CustomButtons";

    import { Link } from "react-router-dom";

      import { useState } from "react";
   

          const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
 const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


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

     const MenuButton = styled(IconButton)(({theme}) => ({
      
       display : 'none',

       [theme.breakpoints.down('md')] :   {

         display : 'block'
       }


     }))

     const Header = () => {

  //  const logoUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';


  //  const subUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


       const [open , setOpen] = useState(false);

       const handleOpen = () => {
      
          setOpen(true);

       }
     const handleClose = () => {

       setOpen(false);
     }

     const list = () => (
      <Box style={{ width: 250 }} onClick={handleClose}>
          <List>
              <listItem button>
                  <CustomButtons />
              </listItem>
          </List>
      </Box>
  );



  return (
   
    <StyledHeader position="fixed">
            <Toolbar style={{ minHeight: 55 }}>
                <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
                
                <Component to='/'>
                    <img src={logoURL} alt="logo" style={{ width: 75 }} />
                    <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
  )

     }


     export default Header;