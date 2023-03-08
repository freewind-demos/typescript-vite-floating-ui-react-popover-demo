import { FloatingFocusManager, FloatingPortal, useMergeRefs } from "@floating-ui/react";
import React from "react";
import { usePopoverContext } from "./usePopoverContext";
import './Popover.css';

export const PopoverContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLProps<HTMLDivElement>
>(function PopoverContent(props, propRef) {
    const { context: floatingContext, ...context } = usePopoverContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);

    return (
        <FloatingPortal>
            {context.open && (
                <FloatingFocusManager context={floatingContext} modal={context.modal}>
                    <div
                        ref={ref}
                        style={{
                            position: context.strategy,
                            top: context.y ?? 0,
                            left: context.x ?? 0,
                            width: "max-content",
                            ...props.style
                        }}
                        aria-labelledby={context.labelId}
                        aria-describedby={context.descriptionId}
                        className="Popover"
                        {...context.getFloatingProps(props)}
                    >
                        {props.children}
                    </div>
                </FloatingFocusManager>
            )}
        </FloatingPortal>
    );
});