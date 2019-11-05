import React, { useState } from 'react';
import Axios from 'axios';
import { shuffle, sortBy } from 'lodash';
import { Helmet } from 'react-helmet';

export default props => {
	const [content, setContent] = useState([]);
	content.length === 0 &&
		Axios.get('/sets/gre/english/word-meaning.json').then(response => {
			setContent(sortBy(shuffle(response.data).slice(0, 10), 'word'));
        });
        
    if(!content) return ''

	return (
		<div className="max-w-3xl w-full md:my-16 bg-gray-300 p-4 md:p-16 mx-auto markdown">
			<h2>10 words at each refresh</h2>
			<Helmet>
				<title>10 words at each refresh | Meroexam.com</title>
				<meta
					name="description"
					content="Learn 10 words at each new refresh is the best around the web right now."
				/>
			</Helmet>
			<ul>
				{content.map(text => (
					<li className="mb-2">
						<strong className="mr-2">{text.word}:</strong>
						{text.meaning}
					</li>
				))}
			</ul>
			<a href="/page/10-words" className="text-xs italic text-green-800">
				Refresh for new words
			</a>
		</div>
	);
};
