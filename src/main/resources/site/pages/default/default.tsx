import React from 'react';
import Regions from '@enonic/react-components/Regions'; // <1>


export default (props) => (
    <div className="default-page">
        <Regions {...props} /> {/* <2> */}
    </div>
);
