
import React from 'react'
import { Layout, Region } from '@enonic/react-components';
import styles from './TwoColumn.module.css';


export const TwoColumnLayout = (props: any,) => {

  const { region, config, content, ...layoutProps} = props;
    return (
        <>
            <Layout className={styles.row}{...layoutProps} >
                <Region
                    name="left"
                    components={props.left?.components}
                    componentRegistry={props.componentRegistry}
                />
                <Region
                    name="right"
                    components={props.right?.components}
                    componentRegistry={props.componentRegistry}
                />
            </Layout>
        </>
    );
};
//<Region  name="right" components={props['right']?.components} componentRegistry={props.right}/>