import React from 'react';
import { Grid } from '@material-ui/core'

import Esports from './../components/aboutMe/esports'
import Hobbies from './../components/aboutMe/hobbies'
import Resume from './../components/aboutMe/resume'
import Gallery from './../components/aboutMe/gallery'

export default props => (
    <>
        <Grid container spacing={1} justify="center" style={{ width: '100%', margin: 0, marginTop: 5 }}>
            <Grid item xs={12} sm={12}>
                <Resume />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Esports />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Hobbies />
            </Grid>
            <Grid item xs={12} sm={12}>
                <Gallery />
            </Grid>
        </Grid>
    </>
)