import React from 'react';
import ReactDom from 'react-dom';
import {Cards,Chart,CountryPicker} from './component';
import styles from './Hello.module.css';
import {fetchData1} from './api'
class Hello extends React.Component{

async componentDidMount(){
   console.log('he')
  const data =await fetchData1();
   console.log(data)
  }
render(){
  return(<div className={styles .container}>coming from the another Component
  <Cards/>
  <Chart/>
  <CountryPicker/>
  </div>)
}
}
export default Hello;
