import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<nav>
				<Image
					src="colored-logo.svg"
					alt="Webz.io logo"
					width="100"
					height="0"
					className='navbar-logo'
				/>
				<div className="links-container">
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
				</div>
				<button className="primary-button small:max-large:hidden" type="button">
					Get API Access Token
				</button>
				<div className="large:hidden">
					<input type="checkbox" id="dropdown-active" />
					<label htmlFor="dropdown-active" className="open-dropdown">
						<Image
							src="eaten-hamburger.svg"
							alt="hamburger icon"
							width={24}
							height={24}
						/>
					</label>
					<label htmlFor="dropdown-active" className="close-dropdown">
						<Image
							src="close.svg"
							alt="close button"
							width={24}
							height={24}
						/>
					</label>
				</div>
			</nav>
		</header>
	);
}
