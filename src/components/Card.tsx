import type { ComponentProps } from 'react';

type CardProps = {} & ComponentProps<'div'>;

export default function Card({ ...props }: CardProps) {
	return <div {...props} />;
}
