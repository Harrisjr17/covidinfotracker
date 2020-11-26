import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const getData = async () => {

    try {
        const {data} = await axios.get(url)
        
        const neededData = {

            lastUpdate: data.lastUpdate,
            deaths: data.deaths,
            recovered: data.recovered,
            confirmed: data.confirmed,
        }
        return neededData
        
    } catch (error) {
        
    }
}

export const getDailyData = async() => {
    try {
        const {data} = await axios.get(`${url}/daily`)
        const fixedData = data.map((dailyData)=> ({
           deaths:dailyData.deaths.total,
           confirmed:dailyData.confirmed.total,
           date:dailyData.reportDate
        }))
        return fixedData

    } catch (error) {
        
    }
}