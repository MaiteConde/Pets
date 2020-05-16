import React from 'react';
import Switch from '@material-ui/core/Switch';

import { adoptedCat } from '../../redux/actions/cats';
import './Switch.scss'
export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true
    
    
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    
    adoptedCat(state)
  };
  
console.log(state.checkedA )
  return (
      <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        // inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    
    </div>
  );
}
