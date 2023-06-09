import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function Searches() {
	const router = useRouter();
	useEffect(() => {
		router.push('/');
	});
	return <div>Search mails</div>;
}

export default Searches;
