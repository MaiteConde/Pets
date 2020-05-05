import store from '../store';
import axios from 'axios';
import { API_URL } from '../../api-config';




export const getAllDogs = async() => {
    try {
        const res = await axios.get(API_URL + 'dogs');
        store.dispatch({
            type: 'GET_ALL_DOGS',
            payload: res.data
        })
      
    } catch (error) {
        console.error(error)
    }
}

export const postDog = async (formData) => {
  await axios.post(API_URL + 'dogs/post', formData, {
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
    }) 
  return formData;
 
    }

    export const getDogsUser = async() => {
        try {
            const res = await axios.get(API_URL + 'dogs/dog', {
                headers: {
                    Authorization: localStorage.getItem('authToken')
                }
            });
            store.dispatch({
                type: 'GET_DOGS_USER',
                payload: res.data
            })
        } catch (error) {
            console.error(error)
        }
    }

    
    export const getDogId = async(id) => {
        try {     
            const res = await axios.get(API_URL + `dogs/${id}`, {
                headers: {
                    Authorization: localStorage.getItem('authToken')
                }
            });
            store.dispatch({
                type: 'GET_DOG_ID',
                payload: res.data
            })
        } catch (error) {
            console.error(error)
        }
    }

    export const editDog = async (formData,id) => {
   
        await axios.put(API_URL + `dogs/put/${id}`, formData, {
              headers: {
                  Authorization: localStorage.getItem('authToken')
              }
          }) 
        return formData;
       
          }
  

