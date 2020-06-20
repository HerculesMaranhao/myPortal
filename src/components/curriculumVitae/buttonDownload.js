import React from 'react';
import { Fab, Tooltip } from '@material-ui/core'
import { CloudDownload } from '@material-ui/icons'

export default props => (
    <Tooltip title="Baixar este currículo" placement="top">
        <Fab className="download-curriculum" onClick={() => alert('Deveria executar o download')}>
            <CloudDownload />
        </Fab>
    </Tooltip>
)