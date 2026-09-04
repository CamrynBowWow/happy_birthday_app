import type { ComponentProps } from 'react';

type ParagraphProps = {} & ComponentProps<'p'>;

export default function Paragraph({ ...props }: ParagraphProps) {
	return <p {...props} />;
}
