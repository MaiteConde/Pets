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

    export const getDogsUser = async(id) => {
        try {
            const res = await axios.get(API_URL + `dogs/dogs/${id}`, {
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

          export const deleteDog = async (id) => {
            await axios.delete(API_URL + `dogs/delete/${id}`,{
                  headers: {
                      Authorization: localStorage.getItem('authToken')
                  }
                  
              }) 
            
              }

              export const getDogSearch = async(search) => {
                try {     
                    const res = await axios.get(API_URL + `dogs/search/${search}`, {
                        headers: {
                            Authorization: localStorage.getItem('authToken')
                        }
                    });
                    store.dispatch({
                        type: 'GET_DOG_SEARCH',
                        payload: res.data
                    })
               
        
                } catch (error) {
                    console.error(error)
                }
             
            }

            export const sexPet = async (sex) => {
                store.dispatch({
                    type: 'SEX_PET',
                    payload: sex
                  
                })
              };
  
          export const clearData = () => {
            store.dispatch({
                type: 'CLEAR'
              
            })
          };
