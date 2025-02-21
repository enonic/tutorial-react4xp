import React from "react";
import styles from "./ChildList.module.css";
import { Part } from "@enonic/react-components";

interface ChildListProps {
    names: string[];
    paths: string[];
    "data-portal-component-type"?: string;
}

export const ChildList: React.FC<ChildListProps> = ({ names, paths, "data-portal-component-type": portalComponentType }) => {
    console.log("Full props:", { names, paths, portalComponentType });

    return (
        <Part data-portal-component-type={portalComponentType}>
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
