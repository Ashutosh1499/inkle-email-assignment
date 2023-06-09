/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import inboxImage1 from '../public/Images/inboxImage1.png';
import socialImage2 from '../public/Images/social2.png';
import Sidebar from './components/sidebar';
import context from './context/Context';
import { fetchMails } from './components/microservices/fetchMails';
import EachMail from './components/eachMail';
import Topbar from './components/topbar';

const MailInbox = () => {
	const contextData = useContext(context);
	const [flag1, setFlag1] = useState(false);
	useEffect(() => {
		if (!flag1) {
			fetchMails(contextData);
			setFlag1(true);
		}
		if (!contextData.fetched && flag1) {
			contextData.setFetched(true);
		}
	}, [flag1, setFlag1]);
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
						{Object.keys(contextData.mails).map(eachMail => {
							if (contextData.mails[eachMail].tag === 'inbox')
								return (
									<>
										<EachMail eachMail={contextData.mails[eachMail]} />
									</>
								);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default MailInbox;
