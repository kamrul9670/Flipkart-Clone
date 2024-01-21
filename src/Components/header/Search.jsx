

import { InputBase ,Box  , styled} from '@mui/material';
import React from 'react'
  
import SearchIcon from '@mui/icons-material/Search';


const SearchContainer = styled(Box)`
background : #fff;
width : 35%;
border-radius : 3px;
margin-left : 2rem;
display : flex ;
`

const InputSearchBase = styled(InputBase)`
  padding-left : 1rem;
  width : 100% ;
  font-size : unset;

`

const SearchIconWrapper = styled(Box)`
padding : 1vh;
 display : flex;
color : blue ;


`

 const Search = () => {
  return (

    <SearchContainer> 
          <InputSearchBase 
          placeholder='Search for products , brands and more '     />  
             <SearchIconWrapper>
                <SearchIcon />
             </SearchIconWrapper>
             </SearchContainer>
        
  )
}

export default Search;
