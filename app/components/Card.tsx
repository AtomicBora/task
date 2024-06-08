import Image from 'next/image';
import Link from 'next/link';

export interface ICardProps {
	image: string;
	alt: string;
	title: string;
	content: string;
	linkUrl: string;
	linkText: string;
}

export function Card({
	image,
	alt,
	linkText,
	linkUrl,
	content,
	title
}: ICardProps) {
	return (
		<div className="bg-light-gray flex flex-col items-center border-[5px] border-gray rounded-[15px] relative pt-[26px] mb-[63px]">
			<Image alt={alt} src={image} width={120} height={120} />
			<div className="flex flex-col gap-5 text-center pt-5 px-[30px] pb-[63px]">
				<span className="font-arboria font-bold text-xl text-dark leading-[25.18px] text-pretty">
					{title}
				</span>
				<p className="leading-[22.4px] text-dark opacity-80 font-normal">
					{content}
				</p>
			</div>
			<Link
				href={linkUrl}
				className="p-5 rounded-[41px] bg-orange-primary absolute text-white font-arboria font-medium leading-4 bottom-[-23px]"
			>
				{linkText}
			</Link>
		</div>
	);
}
