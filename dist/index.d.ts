/// <reference types="react" />
import { MouseEventHandler } from 'react';

interface ButtonProps {
    text?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare function Button(props: ButtonProps): JSX.Element;

export { Button };
