import React from 'react';

import Top from './top'
import Center from './center'
import Bottom from './bottom'

export default props => (
    <div
        style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
        <Top />
        <Center>
            {props.children}
        </Center>
        <Bottom />
    </div>
)