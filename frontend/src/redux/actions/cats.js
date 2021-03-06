import store from '../store';
import axios from 'axios';
import { API_URL } from '../../api-config';


export const getAllCats = async() => {
    try {
        const res = await axios.get(API_URL + 'cats');
        store.dispatch({
            type: 'GET_ALL_CATS',
            payload: res.data
        })
    } catch (error) {
        console.error(error)
    }
}

export const postCat = async (formData) => {
    await axios.post(API_URL + 'cats/post', formData, {
          headers: {
              Authorization: localStorage.getItem('authToken')
          }
      }) 
    return formData;
   
      }

      export const getCatsUser = async(id) => {
        try {
            const res = await axios.get(API_URL + `cats/cats/${id}`, {
                headers: {
                    Authorization: localStorage.getItem('authToken')
                }
            });
            store.dispatch({
                type: 'GET_CATS_USER',
                payload: res.data
            })
        } catch (error) {
            console.error(error)
        }

        
    }

    export const getCatId = async(id) => {
        try {     
            const res = await axios.get(API_URL + `cats/${id}`, {
                headers: {
                    Authorization: localStorage.getItem('authToken')
                }
            });
            store.dispatch({
                type: 'GET_CAT_ID',
                payload: res.data
            })
       

        } catch (error) {
            console.error(error)
        }
     
    }

    export const editCat = async (formData,id) => {
   
        await axios.put(API_URL + `cats/put/${id}`, formData, {
              headers: {
                  Authorization: localStorage.getItem('authToken')
              }
          }) 
        return formData;
       
          }

          export const deleteCat = async (id) => {
            await axios.delete(API_URL + `cats/delete/${id}`,{
                  headers: {
                      Authorization: localStorage.getItem('authToken')
                  }
                  
              }) 
            
              }
    
    export const getCatSearch = async(search) => {
        try {     
            const res = await axios.get(API_URL + `cats/search/${search}`, {
                headers: {
                    Authorization: localStorage.getItem('authToken')
                }
            });
            store.dispatch({
                type: 'GET_CAT_SEARCH',
                payload: res.data
            })
       

        } catch (error) {
            console.error(error)
        }
     
    }

    
    export const adoptedCat = async (state) => {
        store.dispatch({
            type: 'CAT_ADOPTED',
            payload: state.checkedA
          
        })
      };

          export const clearData = () => {
            store.dispatch({
                type: 'CLEAR'
              
            })
          };