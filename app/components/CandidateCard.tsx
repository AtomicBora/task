import Image from 'next/image';
import Link from 'next/link';

export interface ICandidateCardProps {
	image: string;
	alt: string;
	candidate: string;
	content: string;
	linkUrl: string;
	party: string;
}

export function CandidateCard({
	image,
	alt,
	linkUrl,
	content,
	candidate,
	party
}: ICandidateCardProps) {
	return (
		<Link
			href={linkUrl}
            prefetch={true}
			className="bg-gray hover:bg-orange-primary focus:bg-orange-primary flex flex-col items-center border-[0.81px] border-darkslategray rounded-[15px] relative p-[9.75px] my-6"
		>
			<Image
				alt={alt}
				src={image}
				width="1920"
				height="1080"
				className="aspect-square object-cover object-top rounded-[16.26px]"
			/>
			<div className="flex flex-col gap-5 text-center pt-5 px-[30px] pb-[63px]">
				<div className="flex flex-col">
					<h3 className="font-arboria font-bold text-[19.51px] leading-[24.56px]">
						{candidate}
					</h3>
					<span className="text-[11.38px] leading-[11.38px] opacity-70">
						{party}
					</span>
				</div>
				<hr className="text-orange-primary w-2/3 self-center" />
				<p className="leading-[18.2px] text-[13px] text-dark font-normal">
					{content}
				</p>
			</div>
		</Link>
	);
}
