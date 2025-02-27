import React from 'react'
import {Regions,} from '@enonic/react-components';
import {componentRegistry} from '../componentRegistry';
import styles from './Page.module.css';

export const Page = (props: any) => {
    const page = props.page;
    if (!page.regions || !Object.keys(page.regions).length) {
        page.regions = {
            main: {
                name: 'main',
                components: [],
            }
        }
    }
    const regionsProps = { componentRegistry, regions:page.regions}
    return (
        <div className={styles.page}>

            <Regions {...regionsProps} />
            </div>
    );
};