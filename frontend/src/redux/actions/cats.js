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

      export const getCatsUser = async() => {
        try {
            const res = await axios.get(API_URL + 'cats/cat', {
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