import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { DatePicker } from 'antd';
import moment from 'moment';


const Calendar = () => {
  const { RangePicker } = DatePicker;

  const dateFormat = 'YYYY/MM/DD';
  const monthFormat = 'YYYY/MM';
  
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
return (
  <div>
    <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
    </div>
)  


}
export  default Calendar