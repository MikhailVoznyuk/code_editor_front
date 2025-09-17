import React from "react";

type ContentFieldProps = {
    fieldLabel: string;
    width?: string,
    height?: string,
    children: React.ReactNode
}

export default function ContentField({children, ...props}: ContentFieldProps) {
    return (
        <div className='relative bg-[#272C35] rounded-xl overflow-hidden'
            style = {{
                width: props.width ?? 'auto',
                height: props.height ?? 'auto',
            }}
        >
            <div className='rounded-[14px_0_14px_0] text-base text-white px-3 bg-[#01A2FF] w-fit mb-1'>
                {props.fieldLabel}
            </div>
            <div className=' text-[#9cdcfe]'>
                {children}
            </div>

        </div>
    )
}