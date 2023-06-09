import React, { useContext } from 'react';
import { Context } from '@axios/pages/_app';
import Topbar from '@axios/pages/components/topbar';
import Sidebar from '@axios/pages/components/sidebar';
import Image from 'next/image';
import EachMail from '@axios/pages/components/eachMail';
import inboxImage1 from '../../../public/Images/inboxImage1.png';
import socialImage2 from '../../../public/Images/social2.png';

function Search() {
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
	const contextData = useContext(Context);
	const fetchQuery = contextData.router.query.searchString;
	let query = [];
	if (fetchQuery !== undefined) query = fetchQuery.split(' ');
	if (!contextData.fetched) {
		fetchMails(contextData);
		contextData.setFetched(true);
	}
	const searchedResults = [];
	query.forEach(qry => {
		let mails = contextData.mails.filter(
			eachMail =>
				eachMail.userId.includes === qry ||
				eachMail.body.includes(qry) ||
				eachMail.tag.includes(qry) ||
				eachMail.subject.includes(qry),
		);
		searchedResults.push(mails);
	});
	return (
		<>
			<Topbar />
			<div className='main__body'>
				<Sidebar />
				<div className='emailList'>
					<div className='emailList__sections'>
						<div className='section section__selected'>
							<Image src={inboxImage1} width={20} height={20} alt='' />
							<h4>Primary</h4>
						</div>

						<div className='section'>
							<Image src={socialImage2} width={30} height={20} alt='' />
							<h4>Social</h4>
						</div>
					</div>
					<div className='emailList__list'>
						{searchedResults.length === 0
							? 'No mail found'
							: Object.keys(searchedResults).map(mails => {
									return Object.keys(searchedResults[mails]).map(eachMail => {
										console.log(searchedResults[mails][eachMail]);
										return (
											<>
												<EachMail eachMail={searchedResults[mails][eachMail]} />
											</>
										);
									});
							  })}
					</div>
				</div>
			</div>
		</>
	);
}

export default Search;
