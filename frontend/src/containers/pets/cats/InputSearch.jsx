import React, { Fragment } from 'react'
import { Input } from 'antd';
import {useHistory} from 'react-router-dom'
import './Search.scss'
import SearchOutlined from 'antd'


const { Search } = Input;
const InSearch = () => {
    const history = useHistory();
    function handleChange(e) {
      if(e.key==='Enter'){
          const search =e.target.value;
          history.push('/searchcat/'+search);
      }
    }
    return (
        <Fragment>
             {/* <h2>Search your location</h2> */}
        <div className="containersearch">
        <div className="search">
         <Search  onKeyUp={handleChange} className="busca"
      placeholder="Find a cat in your location "
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
        </div>
        </div>
        </Fragment>
    )
}
export default InSearch