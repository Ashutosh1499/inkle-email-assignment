import React, { useState, useContext, useEffect } from 'react';
import context from '@axios/pages/context/Context';
import Topbar from '../../components/topbar';
import Sidebar from '../../components/sidebar';
import EachMail from '../../components/eachMail';
import Image from 'next/image';
import inboxImage1 from '../../../public/Images/inboxImage1.png';
import socialImage2 from '../../../public/Images/social2.png';
import { fetchMails } from '@axios/pages/components/microservices/fetchMails';

export default function Tag() {
	const contextData = useContext(context);
	const [filteredMails, setFilteredMails] = useState([]);
	if (!contextData.fetched) {
		fetchMails(contextData);
		contextData.setFetched(true);
	}
	useEffect(() => {
		if (contextData.router.asPath.slice(6) !== 'all')
			setFilteredMails(
				contextData.mails.filter(
					eachMail => eachMail.tag === contextData.router.asPath.slice(6),
				),
			);
		else setFilteredMails(contextData.mails);
	}, [setFilteredMails, contextData.mails, contextData.router.asPath]);
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
						{Object.keys(filteredMails).map(eachMail => {
							return (
								<>
									<EachMail eachMail={filteredMails[eachMail]} key={eachMail} />
								</>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
