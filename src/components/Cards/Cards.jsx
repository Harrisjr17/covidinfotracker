import React from 'react'
import {Card, CardContent, Typography ,Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'

const Cards = ({data: {confirmed, recovered, deaths,lastUpdate,dailySummary}}) => {
    if(!recovered){
        return 'Loadind Please Wait.......'
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Confermed</Typography>
                        <Typography variant="h5">
                            <CountUp
                                separator=","
                                start={0}
                                end= {confirmed.value}
                                duration={3}
                            />
                        </Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography variant="body2">Cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">Information</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography variant="body2">Cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Dead</Typography>
                        <Typography variant="h5">Information</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography variant="body2">Cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>DailySummary</Typography>
                        <Typography variant="h5">Information</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography variant="body2">Cases</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards 