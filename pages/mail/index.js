import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';

function Mails() {
	const router = useRouter();
	useEffect(() => {
		router.push('/');
	});
	return <></>;
}

export default Mails;
