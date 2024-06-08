import Image from 'next/image';
import { PrimaryButton } from './components/PrimaryButton';
import { Card } from './components/Card';
import { SumbmitToken } from './components/SubmitToken';

export default function Home() {
	/* I put it like this since this might be some remote content from db or some CMS */
	const cardContent =
		'Webz.io transforms the web into machine-ready feeds that plug right into any platform. So machines get data just the way they need it — and companies easily turn web data into customer value.';
	const submitTokenContent =
		'Webz.io sources and collects data from across the web and transforms it into machine-ready feeds that plug right into any platform.';
	return (
		<>
			<section className="flex flex-col items-center gap-[30px] small:max-large:w-full small:max-large:px-[25px] small:max-large:pb-[51px] large:pb-[83px] small:pt-[33px] bg-gray">
				<div className="flex flex-col gap-4 items-center">
					<p className="landing-page-title text-center flex flex-col">
						<span className="font-arboria font-medium">
							Battle for the Oval
						</span>
						<span>Biden vs. Trump</span>
						<span className="text-nowrap">
							Deciding America&apos;s Future
						</span>
					</p>
					<p className="landing-page-content text-center w-[336px] text-[13px]">
						Webz.io transforms the web into machine-ready feeds that
						plug right into any platform. So machines get data just
						the way they need it — and companies easily turn web
						data into customer value.
					</p>
				</div>
				<PrimaryButton />
			</section>
			<div className="w-full flex large:gap-4 small:max-large:gap-4 small:max-large:flex-col small:max-large:px-9 large:pl-[130px] large:max-w-[50%] bg-gray">
				<Image
					src="/biden.png"
					alt="Joe Biden"
					width="1920"
					height="1080"
					className="small:max-large:w-full small:max-large:h-auto rounded-[10px]"
				/>
				<Image
					src="/trump.png"
					alt="Joe Biden"
					width="1240"
					height="826"
					className="small:max-large:w-full small:max-large:h-auto rounded-[10px]"
				/>
			</div>
			<section className="small:max-large:py-[100px] large:py-[224px] flex flex-col items-center px-7 bg-gray">
				{/* If real chart was expected, I would have used React Google Charts or chart.js library for it*/}
				<Image
					src="/pie-chart.png"
					alt="Pie Chart"
					width="400"
					height="400"
					className="small:max-w-[270px] large:max-w-[400px] mx-[50px]"
				/>
				<div className="mt-[50px] mb-[40px]">
					<div className="flex flex-col text-center">
						<span className="w-full font-arboria font-normal large:text-[48px] small:text-[31px] leading-[39.03px] text-orange-primary">
							Tracking the Pulse:
						</span>
						<span className="w-full px-[27.5px] font-arboria font-normal small:text-[31px] leading-[38.53px] text-wrap text-dark">
							Viewer Sentiment Analysis of the US Election
						</span>
					</div>
					<p className="small:max-large:px-[11px] small:max-large:mt-6 text-[13px] text-center leading-[18.2px] opacity-80">
						<span>
							Webz.io sources and collects data from across the
							web and transforms it into machine-ready feeds that
							plug right into any platform. It deploys a wide
							array of crawlers that run in near real-time,
							drawing from millions of sources — covering
							everything from the biggest news sites, to obscure
							blogs and forums, all the way to the furthest
							reaches of the dark web.
						</span>
						<br />
						<br />
						<span>
							All stored in repositories, so machines consume live
							and historical data on demand. Webz.io gives
							machines data exactly the way they need it, so
							companies easily turn web data into customer value.
						</span>
					</p>
				</div>
				<PrimaryButton className="flex items-center h-[54px] small:max-large:px-[16px] bg-transparent border border-orange-primary text-orange-primary rounded-[40px]" />
			</section>
			<section>
				<div className="small:max-large:px-[22px] small:max-large:mb-[82px] small:max-large:mt-[43px] large:mt-[110px] large:mb-[100px] flex flex-col items-center text-center">
					<span className="w-full font-arboria font-normal large:text-[48px] small:text-[31px] leading-[39.03px] text-orange-primary">
						How it Works:
					</span>
					<span className="w-full font-arboria font-normal text-nowrap text-dark small:text-[31px] leading-[38.53px]">
						Understanding the Process
					</span>
					<p className="small:max-large:px-[11px] small:max-large:mt-6 text-[13px] text-center opacity-70 leading-[18.2px]">
						Webz.io sources and collects data from across the web
						and transforms it into machine-ready feeds that plug
						right into any platform.
					</p>
				</div>
			</section>
			<section className="small:max-large:px-[27px] large:px-[130px] flex flex-col large:flex-row large:gap-6">
				<Card
					image="/API.png"
					alt="API"
					title="Get the News API Lite Access Token"
					content={cardContent}
					linkUrl="https://webz.io/"
					linkText="Visit Webz.io"
				/>
				<Card
					image="/token.png"
					alt="Token"
					title="Enter Access Token"
					content={cardContent}
					linkUrl="https://webz.io/"
					linkText="Enter Token"
				/>
				<Card
					image="/smile.png"
					alt="Smile"
					title="View Latest News by Viewers Sentiment"
					content={cardContent}
					linkUrl="https://webz.io/"
					linkText="Enter Token"
				/>
			</section>
			<section className="bg-light-gray pb-[130px] pt-20 px-4">
				<SumbmitToken
					title="Enter Access Token"
					content={submitTokenContent}
					placeholder="Enter your Access Token"
					buttonText="Submit"
				/>
			</section>
		</>
	);
}
