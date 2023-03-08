import React, { FC } from 'react';
import { Popover, PopoverClose, PopoverContent, PopoverDescription, PopoverHeading, PopoverTrigger } from './Popover';

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  return <div className={'Hello'}>
    <Popover>
      <PopoverTrigger>My trigger</PopoverTrigger>
      <PopoverContent className="Popover">
        <PopoverHeading>My popover heading</PopoverHeading>
        <PopoverDescription>My popover description</PopoverDescription>
        <PopoverClose>Close</PopoverClose>
      </PopoverContent>
    </Popover>
  </div>;
}
