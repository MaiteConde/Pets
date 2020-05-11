import store from '../store';
import axios from 'axios';

export const locations = async() => {
    const res = await axios.get('https://public.opendatasoft.com/api/records/1.0/search/?rows=0&facet=communidad_autonoma&facet=provincia&facet=municipio&dataset=espana-municipios&timezone=Europe%2FBerlin&lang=en')
    store.dispatch({
        type: 'LOCATIONS',
        provincias:res.data
    })
return res;
}