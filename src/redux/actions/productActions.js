
   import axios from "axios";
 
      import * as actionTypes from '../constrants/productConstrant';


       const URL = 'http://localhost:8000';


    export const getProducts = () => async (dispatch)   =>  {
      
          try {
            
           const { data } = await axios.get(`${URL}/products`);

          
            
           dispatch({ type : actionTypes.GET_PRODUCTS_SUCCESS ,   payload : data })

          } catch (error) {
            dispatch({ type : actionTypes.GET_PRODUCTS_FAIL ,   payload : error.message })
          }


    }
















   //    let obj =

    // {

    //       config : {} ,
    //       data :  [],
    //       headers : {} ,
    //       status : 200 ,
    //       message : ''
    // }


    // obj.data 
    // {data} = obj ;