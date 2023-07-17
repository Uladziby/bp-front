import { ReactNode } from 'react';

export interface IAMessageProps {
  children: string | ReactNode;
  type: 'warning' | 'error';
  className?: string;
}
