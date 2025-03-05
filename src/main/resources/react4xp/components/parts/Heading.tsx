import {Part} from '@enonic/react-components';
import React from 'react';
import styles from './Heading.module.css'

export const Heading = (props: any) => {

    const {componentRegistry, ...partProps} = props;
    return <Part {...partProps}>
        <h1 className={styles.heading}>{props.heading}</h1>
    </Part>
};
