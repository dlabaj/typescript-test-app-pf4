import { SFC, HTMLProps, ReactType, ReactNode } from 'react';
import { Omit } from '../../typeUtils';

export interface DropdownItemProps extends Omit<HTMLProps<HTMLAnchorElement>, 'onClick'> {
  component?: ReactType<DropdownItemProps>;
  children?: ReactNode;
  isDisabled?: Boolean;
  onClick?: Function;
}
