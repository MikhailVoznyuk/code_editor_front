'use client'

import {useState} from 'react'
import Button from "@/ui/Button/Button";

import styles from "./RunButton.module.css";

import type {ButtonProps} from "@/ui/Button/Button.types";

type RunButtonProps = ButtonProps & {
    callback: (...args: unknown[]) => Promise<void>;
}

export default function RunButton({callback}: RunButtonProps) {

    const [isWaiting, setWaiting] = useState<boolean>(false);

    const onClick = () => {
        setWaiting(true);
        callback().then(() => setWaiting(false));
    }
    return (
        <Button
            variant='primary'
            onClick={onClick}
            additionalClasses='w-[36px]'
        >

            <span className={`${styles.runButton__content} ${(isWaiting) ? styles.active : ''}`}></span>
        </Button>
    )
}