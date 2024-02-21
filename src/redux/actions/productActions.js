
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




     

       


    export const getProductDetails = (id) => async (dispatch) => {
      try {
          dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
          const { data } = await axios.get(`${URL}/product/${id}`);
          
          dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload : data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message});

    }
};


export const removeProductDetails = () => (dispatch) => {
    
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });

};










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