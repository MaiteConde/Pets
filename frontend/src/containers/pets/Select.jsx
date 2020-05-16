import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { sexPet } from '../../redux/actions/dogs';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [sex, setSex] = React.useState('');
    
  const handleChange = (event) => {
    setSex(event.target.value);
};
sexPet(sex)
console.log(sex)
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Sex</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sex}
          onChange={handleChange}
        >
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Male'}>Male</MenuItem>
         
        </Select>
      </FormControl>
      </div>)}