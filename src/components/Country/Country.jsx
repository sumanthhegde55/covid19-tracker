import React from 'react'
import {DataCountry} from '../../api';
import {useState,useEffect} from 'react';
import { NativeSelect } from '@material-ui/core';
import {FormControl} from '@material-ui/core';
import styles from './Country.module.css';
const Country = ({cntry}) =>{
    const [ctry,setCntry] = useState([]);
    useEffect(()=>{
        const fetchCtry = async ()=>{
            setCntry(await DataCountry());
        }
        fetchCtry();
    },[setCntry])
    return(
      <FormControl className={styles.FormControl}>
          <NativeSelect onChange={(e) => cntry(e.target.value)}>
          <option value="">Global</option>
              {ctry.map((x,i) =>(
                  <option key={i} value={x}>{x}</option>
              ))}
          </NativeSelect>
      </FormControl>  
    )
}
export default Country;