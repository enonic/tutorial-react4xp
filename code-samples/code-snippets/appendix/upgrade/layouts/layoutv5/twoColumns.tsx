import {Regions} from '@enonic/react-components';
import dayjs from 'dayjs';
import React from 'react';

export default (props: Parameters<typeof Regions>[0]) => {
    return <div style={{
        columnGap: '1em',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    }}>
        <Regions {...props}/>
        <div>{dayjs().format()}</div>
    </div>;
};
