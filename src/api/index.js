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
            dailySummary: data.dailySummary
        }
        return neededData
        
    } catch (error) {
        
    }
}