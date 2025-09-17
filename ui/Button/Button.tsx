import React from "react";
import type {ButtonProps} from "@/ui/Button/Button.types";


export default function Button({variant='primary',children,additionalClasses, ...props} : ButtonProps) {
    return (
        <button
            className={`flex items-center px-2 h-[36px] shrink-0 grow-0 transition-[0.3s_ease] ${variant == 'primary' ? 'bg-[#01A2FF] text-white rounded-xl hover:bg-white hover:text-[#01A2FF]' : ''} ${additionalClasses ? additionalClasses : ''}`}
            {...props}
            onClick = {props.onClick}
        >
            {children}
        </button>
    )
}