import { type ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {} & ComponentProps<'button'>;

export default function Button({ className, ...props }: ButtonProps) {
	return <button {...props} className={twMerge('button', className)} />;
}
