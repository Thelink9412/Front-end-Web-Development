import type { ButtonProps } from "../lib/types";

export function Button({ className, onClick, children }: ButtonProps) {
    return (<button className={className} onClick={onClick}>{children}</button>)
}