import React, { useState } from 'react';
import { Collapse, Grid } from '@material-ui/core'
import { MenuBook, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'

import './../style.css'
import { findIcon } from './../../../assets/icons'

const icons = [
    'javascript', 
    'nodejs', 
    'react', 
    'redux', 
    'npm', 
    'yarn',
    'html', 
    'css', 
    'bootstrap', 
    'material',
    'jest',
    'cypress',
    'docker',
    'php', 
    'mysql',
    'sql',
    'github'
]
export default props => {
    const [open, setOpen] = useState(true)

    return (
        <div className="formCurriculum2">
            <div className={`academics-infos ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
                <div className="accordion-title">
                    <MenuBook />
                    <div>Conhecimentos Técnicos</div>
                </div>
                {open ? <KeyboardArrowUp style={{ margin: 5 }} /> : <KeyboardArrowDown style={{ margin: 5 }} />}
            </div>
            <Collapse in={open} style={{ width: '100.2%' }}>
                <div className="accordion-content">
                    <Grid container spacing={1} justify="center">
                        {icons.map(x => (<Grid item xs={6} sm={6} md={2} className="grid-icon"><img src={findIcon(x)} className="tech-icons" /></Grid>))}
                    </Grid>
                </div>
            </Collapse>

        </div>
    )
}