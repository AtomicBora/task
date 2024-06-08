import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Footer from './components/Footer';
import Header from './components/Header';

const NeueHaasUnica = localFont({
	src: [
		{
			path: './fonts/NeueHaasUnica/NeueHaasUnica-Regular.woff2',
			weight: '400',
			style: 'normal'
		},
		{
			path: './fonts/NeueHaasUnica/NeueHaasUnica-Medium.woff2',
			weight: '500',
			style: 'nomral'
		}
	],
	variable: '--font-neue-haas-unica'
});
const Arboria = localFont({
	src: [
		{
			path: './fonts/Arboria/Arboria-Medium.woff2',
			weight: '500',
			style: 'normal'
		},
		{
			path: './fonts/Arboria/Arboria-Bold.woff2',
			weight: '700',
			style: 'normal'
		},
		{
			path: './fonts/Arboria/Arboria-Black.woff2',
			weight: '900',
			style: 'normal'
		}
	],
	variable: '--font-arboria'
});

export const metadata: Metadata = {
	title: 'Webz.io - Big Web Data',
	description:
		"Power your big data application with the world's largest structured web data feeds from across the open, deep, and dark web."
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${NeueHaasUnica.className} ${Arboria.variable}`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
