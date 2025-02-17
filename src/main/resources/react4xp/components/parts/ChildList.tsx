import React from 'react';
import styles from './ChildList.module.css';
import { LinkComponent, Part } from "@enonic/react-components";
import { Link } from "@enonic/react-components";

export const ChildList = (props) => {
    const { descriptor, type, mode, path, componentRegistry, component, result, content, params, total, names, paths, ...partProps } = props;
    return (
        <>
            <Part {...partProps}>
                <ul>
                    {names.map((name, index) => (
                        <li className={styles.listItem} key={index}>
                            <a className={styles.listLink} href={paths[index]}>{name}</a>
                        </li>
                    ))}
                </ul>
            </Part>
        </>
    );
};