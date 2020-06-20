import React from 'react';
import { Grid } from '@material-ui/core'

import './../style.css'
import { findImage } from './../../../assets/img'

const myHobbies = [
    'violao',
    'baixo',
    'bigbang',
    'naruto',
    'onepiece',
    'shingeki',
    'thm',
    'pw',
    'ps',
    'programming',
    'laptop'
]

export default props => (
    <div className="div-esports">
        <div className="title-esports">Meus Hobbies</div>
        <Grid container spacing={1} justify="space-around">
            {myHobbies.map(x => (
                <Grid
                    item
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <img src={findImage(x)} style={{ maxHeight: 150, maxWidth: 150 }} />
                </Grid>
            ))}
        </Grid>
    </div>
)