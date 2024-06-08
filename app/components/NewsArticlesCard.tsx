import * as React from 'react';

export interface INewsProps {
	positiveNews: boolean;
	numberOfArticles: string | number;
}

export function News({ positiveNews, numberOfArticles }: INewsProps) {
	return (
		<article
			className={`flex flex-col mx-4 ${
				positiveNews ? 'positive-articles-bg' : 'negative-articles-bg'
			}`}
		>
			<div className="flex justify-between">
				<div>
					<span>{numberOfArticles}</span>
					<span>
						{positiveNews
							? 'Positive Articles'
							: 'Negative Articles'}
					</span>
				</div>
				<button>Latest</button>
			</div>
		</article>
	);
}
