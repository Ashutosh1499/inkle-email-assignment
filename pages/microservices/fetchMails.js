const fetchMails = async contextData => {
	let response = await fetch(
		'https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123',
	);
	response = await response.json();
	let array = [0, 0, 0, 0];
	response.forEach(res => {
		if (res.tag === 'inbox') array[0]++;
		else if (res.tag === 'draft') array[1]++;
		else if (res.tag === 'spam') array[2]++;
		else array[3]++;
	});
	contextData.setTagCount(array);
	contextData.setMails(response);
	return true;
};

export { fetchMails };
