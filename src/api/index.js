import axios from 'axios';

const url='https://covid19.mathdro.id/api';
let g_url=url;
export const Datafetch= async (x)=>{
    if(x){
        g_url=`${url}/countries/${x}`;
    }
    try{
        const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(g_url); 
        const req={
           confirmed,
            recovered,
            deaths,
            lastUpdate,
        }
        return req;
    }catch(error){
        console.error({err:"error in fetching data"});
    }
}
export const DataDaily= async (x) =>{
    try{
       if(x===""){
           const {data}=await axios.get(`${url}/daily`);
            const req=data.map((data) =>({
            confirmed:data.confirmed.total,
            deaths:data.deaths.total,
            date:data.reportDate,
            cntry:'US'
        }))
        return req;
       }
       else{
           const {data}= await axios.get(`https://api.rootnet.in/covid19-in/stats/history`);
            const s=data.data.map((data) =>({
            confirmed:data.summary.total,
            deaths:data.summary.deaths,
            date:data.day,
            cntry:'india'
        }))
        return s;
    }
    }
    catch(error){
        console.error({err:"error in fetching data"});
    }
}
export const DataCountry = async () =>{
    try{
        const {data:{countries}}=await axios.get(`${url}/countries`);
        const res=countries.map(x => x.name);
        return res;
    }
    catch(error){
        console.error({err:"error in fetching data"});
    }
}