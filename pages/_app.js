import '@axios/styles/globals.css';
import Context from './context/Context';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
	const [mails, setMails] = useState([]);
	const [tagCount, setTagCount] = useState([0, 0, 0, 0]);
	const [fetched, setFetched] = useState(false);
	const [filteredMails, setFilteredMails] = useState([]);
	const [tag, setTag] = useState('/');
	const router = useRouter();
	return (
		<Context.Provider
			value={{
				mails,
				setMails,
				tagCount,
				setTagCount,
				router,
				fetched,
				setFetched,
				tag,
				setTag,
				filteredMails,
				setFilteredMails,
			}}>
			<Component {...pageProps} />
		</Context.Provider>
	);
}
