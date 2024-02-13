
import './App.css';
import Header from './Components/header/Header';

 import Home from './Components/home/Home';
  
  import DataProvider from './context/DataProvider';


   import { Box } from '@mui/material';

function App() {
  return (
   <DataProvider>



   <Header />

   <Box style={{marginTop:55 }}>

   <Home  />

   </Box>
 
   
   
   </DataProvider>
  );
}

export default App;
