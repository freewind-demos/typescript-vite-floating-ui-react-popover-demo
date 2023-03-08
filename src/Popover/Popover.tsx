import React, { FC } from "react";
import { PopoverOptions } from "./typings";
import { usePopover } from "./usePopover";
import { PopoverContext } from "./usePopoverContext";

interface Props extends PopoverOptions {
    children: React.ReactNode;
}

export const Popover: FC<Props> = ({
    children,
    modal = false,
    ...restOptions
}) => {
    // This can accept any props as options, e.g. `placement`,
    // or other positioning options.
    const popover = usePopover({ modal, ...restOptions });
    return (
        <PopoverContext.Provider value={popover}>
            {children}
        </PopoverContext.Provider>
    );
}