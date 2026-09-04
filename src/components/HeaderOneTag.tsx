import type { ComponentProps } from 'react';

type HeaderOneTagProps = {} & ComponentProps<'h1'>;

export default function HeaderOneTag({ ...props }: HeaderOneTagProps) {
	return <h1 {...props} />;
}
