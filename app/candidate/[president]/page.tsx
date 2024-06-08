import { News } from '@/app/components/NewsArticlesCard';
import assert from 'assert';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	params: { president: string };
	searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	console.log(params.president);
	return {
		title:
			params.president === 'trump'
				? 'Donald Trump - News'
				: 'Joe Biden - News'
	};
}

async function getPosts(url: string) {
	const data = await fetch(url, { method: 'GET', cache: 'no-store' });
	const allPosts = await data.json();
	return allPosts;
}

export default async function CandidatePage({
	params
}: {
	params: { president: string };
}) {
	let queryParams = '';

	assert(process.env.BASE_URL);
	assert(process.env.API_KEY);

	if (params.president === 'trump') {
		queryParams = encodeURI(
			'title:Trump AND (election OR polls) AND sentiment:(positive OR negative) AND language:english'
		);
	} else {
		queryParams = encodeURI(
			'title:Biden AND (election OR polls) AND sentiment:(positive OR negative) AND language:english'
		);
	}
	const url = `${process.env.BASE_URL}?token=${process.env.API_KEY}&q=${queryParams}`;
	const data: { posts: { sentiment: string }[] } = await getPosts(url);

	const positiveArticles = data.posts.filter(
		(article) => article?.sentiment === 'positive'
	).length;
	const negativeArticles = data.posts.filter(
		(article) => article?.sentiment === 'negative'
	).length;

	return (
		<>
			<Link href="/" className="ml-4 flex items-end my-[23px]">
				<Image
					src="/arrow-left.svg"
					width={10}
					height={10}
					alt="Go Back Arrow"
					className="max-h-[13px] opacity-50"
				/>
				<span className="text-orange-primary font-medium ml-[5px] leading-4">
					Back to Candidate Selection
				</span>
			</Link>
			<section className="bg-gray text-center">
				<div className="flex flex-col items-center mx-12 py-[19px]">
					<span className="font-arboria font-black text-2xl leading-[30.98px] text-orange-primary">
						2024 Presidential Candidates
					</span>
					{/* this text should be fetched as well or change it based on query param, as well */}
					<p className="leading-[18.2px] text-[13px] text-dark opacity-80 mt-[6.45px] pb-7 text-pretty">
						Donald Trump is the presumptive Republican presidential
						nominee who will face President Joe Biden in November.
						These were his GOP primary challengers.
					</p>
					<Image
						src="/us-map.svg"
						width={180}
						height={84}
						alt="US Map"
					/>
				</div>
			</section>
			<section className="flex flex-col items-center px-[16px] py-10 text-center">
				{/* this should be changed based on query param, as well */}
				<Image
					src="/trump-card.webp"
					alt="Donald Trump"
					width="1240"
					height="826"
					className="rounded-[10px]"
					priority={true}
				/>
			</section>
			{/* content between main image and positive articles */}
			<section className='flex flex-col gap-10 my-10 mx-4'>
                <News positiveNews={true} numberOfArticles={positiveArticles} />
                <News positiveNews={false} numberOfArticles={negativeArticles} />
            </section>
		</>
	);
}
