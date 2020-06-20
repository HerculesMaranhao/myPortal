import React from 'react';
import { Grid } from '@material-ui/core'

import './../style.css'
import { findTeam } from './../../../assets/favorite-teams'

const myTeams = ['lakers', 'houston', 'bulls', 'bucks', 'nola', 'philadelphia']
const myTeams2 = ['sao_paulo', 'barcelona', 'psg', 'liverpool', 'juventus']

export default props => (
    <div className="div-esports">
        <div className="title-esports">Meus Esportes e Times Favoritos</div>
        <div className="content-nba">
            <div className="favorite-teams">
                <Grid container spacing={1} justify="center">
                    {myTeams.map(x => (
                        <Grid
                            item
                            xs={6}
                            sm={3}
                            md={3}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <img src={findTeam(x)} style={{ maxHeight: 100, maxWidth: 100 }} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
        <div className="content-soccer">
            <div className="favorite-teams">
                <Grid container spacing={1} justify="center">
                    {myTeams2.map(x => (
                        <Grid
                            item
                            xs={6}
                            sm={4}
                            md={4}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <img src={findTeam(x)} style={{ maxHeight: 100, maxWidth: 100 }} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    </div>
)