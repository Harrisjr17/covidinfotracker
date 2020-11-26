import react, {useEffect, useState} from 'react'
import {getDailyData} from '../../api'
import styles from './Chart.module.css'
import {Line, Bar} from 'react-chartjs-2'

const Chart = () => {
    const [dailyData,setDailyData] = useState([])

    useEffect(()=> {
        const getAPI = async()=>{
            setDailyData(await getDailyData())
        }
        getAPI()
    })
    const lineChart = (
        dailyData.length ? (
        <Line 
            data={{ 
                labels:dailyData.map(({date})=>date),
                datasets:[{
                    data: dailyData.map(({confirmed})=>confirmed),
                    label:'Confermed',
                    borderColor: '#3333ff',
                    fill:true, 
                },{
                    data: dailyData.map(({deaths})=>deaths),
                    label:'Infected',
                    borderColor: 'red',
                    fill:true, 
                }],
             }}
        />) :null
    )

    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart