import React from 'react'
import {Card, CardContent, Typography ,Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards = ({data: {deaths,lastUpdate,confirmed,recovered}}) => {
    if(!recovered){
        return 'Loadind Please Wait.......'
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} md={3} xs={12} className={cx(styles.card,styles.info)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Confermed</Typography>
                        <Typography variant="h5">
                            <CountUp
                                separator=","
                                start={0}
                                end= {confirmed.value}
                                duration={2.5}
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleString()}</Typography>
             
                    </CardContent>
                </Grid>

                <Grid item component={Card} md={3} xs={12} className={cx(styles.card,styles.info)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp
                                separator=","
                                start={0}
                                end= {recovered.value}
                                duration={2.5}
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleString()}</Typography>
                       
                    </CardContent>
                </Grid>

                <Grid item component={Card} md={3} xs={12} className={cx(styles.card,styles.info)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp
                                separator=","
                                start={0}
                                end= {deaths.value}
                                duration={2.5}
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleString()}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards 