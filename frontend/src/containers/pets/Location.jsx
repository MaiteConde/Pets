import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { citys } from '../../redux/actions/locations';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



 export default function Citys({provs}) {
  useEffect(() => {
    citys()
     
   }, [])
  const classes = useStyles();
  const [location, setLocation] = React.useState('');

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Sex</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          onChange={handleChange}
        >
          
          <MenuItem value={'Female'}>lol</MenuItem>
         
        </Select>
      </FormControl>
      </div>)}

const mapStateToProps = ({provincias}) =>({provs:provincias?.provincias});
 connect(mapStateToProps) ;
