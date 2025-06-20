import React from "react";
import styles from "./ChildList.module.css";
import type {PartProps} from '@enonic/react-components';

export const ChildList = (props: PartProps) => {

    const {names, paths} = props.data as any;

    if (!names?.length) {
        return;
    }

    return <ul>
        {names.map((name, index) => (
            <li className={styles.listItem} key={index}>
                <a className={styles.listLink} href={paths[index]}><p>{name}</p></a>
            </li>
        ))}
    </ul>
};
