import type {LayoutProps} from '@enonic/react-components';
import {Region, ProcessedRegions} from '@enonic/react-components';
import React from 'react'
import styles from './TwoColumn.module.css';
import {componentRegistry} from '/react4xp/componentRegistry';


export const TwoColumnLayout = (props: LayoutProps) => {

    const regions = props.regions as ProcessedRegions;

    return <div className={styles.row}>
        <Region data={regions.left.components} componentRegistry={componentRegistry} name="left"/>
        <Region data={regions.right.components} componentRegistry={componentRegistry} name="right"/>
    </div>;
};
