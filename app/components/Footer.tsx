import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-dark text-white">
			<div className="flex small:max-large:flex-col small:max-large:items-center small:max-large:text-center large:justify-around large:mx-[130px]">
				<Image
					src="logo.svg"
					alt="Webz.io logo"
					width="0"
					height="0"
					className="w-full small:max-w-[100px] large:max-w-[200px] h-auto mt-10"
				/>
				<section className="small:max-large:mt-[60px]">
					<h5 className="small:mb-10 large:my-10 font-extrabold text-[20px]">
						Site Links
					</h5>
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/how-it-works">How it Works</Link>
						</li>
						<li>
							<Link href="/access-token">Access Token</Link>
						</li>
						<li>
							<Link href="/faq">FAQ&apos;s</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</section>
				<section className="small:max-large:mt-10">
					<h5 className="my-10 font-extrabold text-[20px]">Others</h5>
					<ul>
						<li>
							<Link href="/tos">Terms of Service</Link>
						</li>
						<li>
							<Link href="/privacy">Privacy Policy</Link>
						</li>
						<li>
							<Link href="/news-api">News API</Link>
						</li>
					</ul>
				</section>
				<section className="small:max-large:mt-10 small:max-large:mb-[59px]">
					<h5 className="mt-10 mb-[28px] font-extrabold text-[20px]">
						Social Media
					</h5>
					<div className="flex gap-[16px]">
						<Link
							title="Telegram group"
							href="https://web.telegram.org/"
							prefetch={false}
							className="border rounded-full border-solid w-[50px] h-[50px] p-[13px]"
						>
							<Image
								src="telegram.svg"
								alt="Telegram logo"
								width="24"
								height="24"
							/>
						</Link>
						<Link
							title="X website"
							href="https://x.com/"
							prefetch={false}
							className="border rounded-full border-solid w-[50px] h-[50px] p-[13px]"
						>
							<Image
								src="x.svg"
								alt="X logo"
								width="24"
								height="24"
							/>
						</Link>
						<Link
							title="Discord website"
							href="https://discord.com/"
							prefetch={false}
							className="border rounded-full border-solid w-[50px] h-[50px] p-[13px]"
						>
							<Image
								src="discord.svg"
								alt="Discord logo"
								width="24"
								height="24"
							/>
						</Link>
						<Link
							title="Web Solid?"
							href="/"
							prefetch={false}
							className="border rounded-full border-solid w-[50px] h-[50px] p-[13px]"
						>
							<Image
								src="web-solid.svg"
								alt="Web Solid logo?"
								width="24"
								height="24"
							/>
						</Link>
					</div>
				</section>
			</div>
			<hr className="opacity-15 bg-white large:mt-10" />
			<p className="text-center text-gray my-5">
				&copy; {currentYear} by Webz.io, All Rights Reserved.
			</p>
		</footer>
	);
}
