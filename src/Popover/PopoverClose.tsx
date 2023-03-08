import React from "react";
import { usePopoverContext } from "./usePopoverContext";

export const PopoverClose = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(function PopoverClose({ children, ...props }, ref) {
    const { setOpen } = usePopoverContext();
    return (
        <button type="button" {...props} ref={ref} onClick={() => setOpen(false)}>
            {children}
        </button>
    );
});
