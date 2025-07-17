import type {ComponentProps} from '@enonic/react-components';
import React from "react";
import styles from "./ChildList.module.css";

export const ChildList = (props: ComponentProps) => {

    const {names, paths} = props.data as any;

    if (!names?.length) {
        return <ul className={styles.list}>
            <li className={styles.listItem}>
                <p className={styles.listLink}>No child elements found.</p>
            </li>
        </ul>;
    }

    return <ul>
        {names.map((name, index) => (
            <li className={styles.listItem} key={index}>
                <a className={styles.listLink} href={paths[index]}><p>{name}</p></a>
            </li>
        ))}
    </ul>
};
