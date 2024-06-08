import Link from 'next/link';
import * as React from 'react';

export interface IButtonProps {
	 className?: string | undefined;
}

export function PrimaryButton({ className }: IButtonProps) {
	return (
		<Link
			href="https://webz.io/login/signup"
			className={className ||'primary-button'}
		>
			Get API Access Token
		</Link>
	);
}
