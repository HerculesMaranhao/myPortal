import React, { useState } from 'react';
import { Collapse, Grid } from '@material-ui/core'
import { AccountCircle, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'

import './../style.css'

export default props => {
    const [open, setOpen] = useState(true)

    return (
        <div className="formCurriculum2">
            <div className={`academics-infos ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
                <div className="accordion-title">
                    <AccountCircle />
                    <div>Dados Pessoais</div>
                </div>
                {open ? <KeyboardArrowUp style={{ margin: 5 }} /> : <KeyboardArrowDown style={{ margin: 5 }} />}
            </div>
            <Collapse in={open} style={{ width: '100.2%' }}>
                <div className="accordion-content">
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={4}>
                            <div><b>Nome: </b>Hércules de Lima Maranhão</div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div><b>Nascimento: </b>26/04/1997</div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div><b>Estado Civil: </b>Casado</div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div><b>Email: </b>herculeslima.maranhao@gmail.com</div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div><b>LinkedIn: </b>www.linkedin.com/in/hércules-lima-a76b0a108</div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div><b>Github: </b>https://github.com/HerculesMaranhao</div>
                        </Grid>                        
                    </Grid>
                </div>
            </Collapse>

        </div>
    )
}