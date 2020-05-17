import React, { Fragment } from 'react'
import { Input } from 'antd';
import {useHistory} from 'react-router-dom'
import './Search.scss'


const { Search } = Input;
const InSearchDog = () => {
    const history = useHistory();
    function handleChange(e) {
      if(e.key==='Enter'){
          const search =e.target.value;
          history.push('/searchdog/'+search);
      }
    }
    return (
        <Fragment>
          
        <div className="containersearchDog">
        <div className="searchDog">
         <Search  onKeyUp={handleChange} className="busca"
      placeholder="Find a dog in your location"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
        </div>
        </div>
        </Fragment>
    )
}
export default InSearchDog