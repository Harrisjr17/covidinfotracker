import React from 'react'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import styles from './App.module.css'
import {getData} from './api'

class App extends React.Component{

  state = {
    data:{},
  }

  async componentDidMount(){
    const retrievedData = await getData()
    this.setState({data: retrievedData})
  }
  render(){
    const {data} = this.state

    return (
      <div className= {styles.container}>
        <Chart />
         <Cards data={data} />
         
         <CountryPicker />
      </div>
   );
  }
}

export default App; 
 