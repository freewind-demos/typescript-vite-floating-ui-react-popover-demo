import { autoUpdate, flip, offset, shift, useClick, useDismiss, useFloating, useInteractions, useRole } from "@floating-ui/react";
import React from "react";
import { PopoverOptions } from "./typings";

export function usePopover({
    initialOpen = false,
    placement = "bottom",
    modal,
    open: controlledOpen,
    onOpenChange: setControlledOpen
}: PopoverOptions = {}) {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);
    const [labelId, setLabelId] = React.useState<string | undefined>();
    const [descriptionId, setDescriptionId] = React.useState<
        string | undefined
    >();

    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = setControlledOpen ?? setUncontrolledOpen;

    const data = useFloating({
        placement,
        open,
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(5),
            flip({
                fallbackAxisSideDirection: "end"
            }),
            shift({ padding: 5 })
        ]
    });

    const context = data.context;

    const click = useClick(context, {
        enabled: controlledOpen == null
    });
    const dismiss = useDismiss(context);
    const role = useRole(context);

    const interactions = useInteractions([click, dismiss, role]);

    return React.useMemo(
        () => ({
            open,
            setOpen,
            ...interactions,
            ...data,
            modal,
            labelId,
            descriptionId,
            setLabelId,
            setDescriptionId
        }),
        [open, setOpen, interactions, data, modal, labelId, descriptionId]
    );
}