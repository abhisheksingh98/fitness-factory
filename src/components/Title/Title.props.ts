import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  text: [string, string, string];
}
