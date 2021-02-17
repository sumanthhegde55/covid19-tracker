import React from 'react'
import {useState,useEffect} from 'react';
import {DataDaily} from '../../api';
import styles from './Chart.module.css'
import {Line,Bar} from 'react-chartjs-2';
const Chart = ({data,cntry}) =>{
    const [daily,setDaily]=useState([]);
    useEffect(()=>{
        const func=async () =>{  
            // const data=await dailyData();
            setDaily(await DataDaily());
        };
        // console.log(daily);
        func(); 
    },[]);
    console.log(cntry);
    const line=(
        cntry===""?
        (
            daily!==[]?
            (<Line
            data={{
                labels:daily.map(({date}) => date),
                datasets:[{
                    data:daily.map(({confirmed}) =>confirmed),
                    label:'Infected',
                    borderColor:'#032cfc',
                    fill:true
                },
                {
                    data:daily.map(({deaths}) =>deaths),
                    label:'Deaths',
                    borderColor:'#fc0314',
                    fill:true
                }]
            }}
            />):null
        ):
        (
            <Bar
             data={{
                 labels:['Infected','Recovered','Deaths'],
                 datasets:[{
                     data:[data.confirmed.value,data.recovered.value,data.deaths.value],
                     labels:['People'],
                     backgroundColor:['rgba(0,0,255,0.6)','rgba(0,255,0,0,6)','rgba(255,0,0,0,6)']
                 }]
             }}
             options={{
                 title:{display:true,text:`Current statistics in ${cntry} : `},
                 legend:{display:false}
             }}
            />
        )
    )
    return(
       <div className={styles.container}>
          {line}
       </div>
    )
}
export default Chart