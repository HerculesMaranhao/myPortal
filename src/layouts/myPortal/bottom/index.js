import React from 'react';

import './style.css'

export default props => (
    <div className="footer">
        <div>Todos o direitos reservados à</div>
        <div><b>Hércules Maranhão</b></div>
        <div><b>{new Date().getUTCFullYear()}</b></div>
    </div>
)