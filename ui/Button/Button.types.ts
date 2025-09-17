import React from "react";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary',
    additionalClasses?: string,
}