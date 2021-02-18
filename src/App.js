import React from 'react'
import {Chart,Country,Cards} from './components'
import styles from './App.module.css'
import {Datafetch} from './api'
import img from './img/covid.png'
class App extends React.Component {
    state={
      data:{},
      cntry:"",
    }
  async componentDidMount(){
    const data=await Datafetch();
    // console.log(data);
    this.setState({data})
  }
  handleCtry = async (x) =>{
    const data=await Datafetch(x);
      this.setState({data,cntry:x});
  }
  render(){
    const {data,cntry}=this.state;
  return (
    <div className={styles.container}>
      <img src={img} alt="COVID-19" className={styles.img}/>
      <Cards data={data}/>
      <Country cntry={this.handleCtry} default="" />
      <Chart data={data} cntry={cntry}/>
    </div>
  );
  }
}

export default App;
