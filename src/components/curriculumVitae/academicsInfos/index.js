import React, { useState } from 'react';
import { Collapse, Grid } from '@material-ui/core'
import { School, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'

import './../style.css'

export default props => {
    const [open, setOpen] = useState(true)

    return (
        <div className="formCurriculum2">
            <div className={`academics-infos ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
                <div className="accordion-title">
                    <School />
                    <div>Informações Acadêmicas</div>
                </div>
                {open ? <KeyboardArrowUp style={{ margin: 5 }} /> : <KeyboardArrowDown style={{ margin: 5 }} />}
            </div>
            <Collapse in={open} style={{ width: '100.2%' }}>
                <div className="accordion-content">
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <div><b>Ensino Superior: </b>Universidade Nove de Julho.</div>
                            <div><b>Curso: </b>Análise e Desenvolvimento de Sistemas.</div>
                            <div><b>Período: </b>2 anos e 6 meses.</div>
                            <div><b>Status: </b>Cursando.</div>
                        </Grid>
                        <Grid item xs={12}>
                            <div><b>Ensino Médio: </b>E.E. Padre Romeo Mecca.</div>
                            <div><b>Período: </b>2012 à 2014.</div>
                            <div><b>Status: </b>Completo.</div>
                        </Grid>
                    </Grid>
                </div>
            </Collapse>

        </div>
    )
}