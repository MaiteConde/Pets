
import store from '../store';
import axios from 'axios';
import { API_URL } from '../../api-config';

export const login = async (user) => {
    try {
        const res = await axios.post(API_URL + 'users/login', user);
        store.dispatch({
            type: 'LOGIN',
            user:res.data.user
        })
        localStorage.setItem('authToken', res.data.token);
    return res;
    } catch (error) {
        console.error(error)
    }
}

export const register = async(user) => {
    return axios.post(API_URL + 'users/register', user)
}

export const logout = async() => {
    const res = await axios.get(API_URL + 'users/logout', {
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
    })
    localStorage.removeItem('authToken');
    store.dispatch({
        type: 'LOGOUT'
    })
    
    return res;
}

export const getInfo = async () => {
    const res = await axios.get(API_URL + 'users/info', {
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
    }) 
    store.dispatch({
        type: 'GET_INFO',
        user:res.data
    })
return res;
}

export const editProfile = async (formData, id) => {
    await axios.put(API_URL + `users/put`, formData, {
          headers: {
              Authorization: localStorage.getItem('authToken')
          }
      }) 
    return getInfo();
   
      }