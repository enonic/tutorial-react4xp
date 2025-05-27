import {Regions,} from '@enonic/react-components';
import React from 'react'
import styles from './Page.module.css';

export const Page = (props: any) => {

    return (
        <div className={styles.page}>
            {props.parent && (
                <div className={"back"}>
                    <a href={props.parent}>
                        <p>Back</p>
                    </a>
                </div>
            )}
            <Regions {...props} />
        </div>
    );
};