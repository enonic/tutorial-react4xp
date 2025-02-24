import React from "react";
import styles from "./ChildList.module.css";
import {Part} from "@enonic/react-components";


export const ChildList = (props) => {

    const {names, paths, componentRegistry, ...extraProps} = props;
    return (
        <Part {...extraProps}>
            <ul>
                {names.map((name, index) => (
                    <li className={styles.listItem} key={index}>
                        <a className={styles.listLink} href={paths[index]}>{name}</a>
                    </li>
                ))}
            </ul>
        </Part>
    );
};
