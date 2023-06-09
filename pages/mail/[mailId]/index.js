/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import Sidebar from '@axios/pages/sidebar';
import context from '@axios/pages/context/Context';
import { fetchMails } from '@axios/pages/microservices/fetchMails';
import Image from 'next/image';
import backimage from '../../../public/Images/backimage.png';
import Topbar from '@axios/pages/topbar';

function Mail() {
	const contextData = useContext(context);
	const maildata = contextData.mails[contextData.router.query.mailId];
	if (!contextData.fetched) {
		fetchMails(contextData);
		contextData.setFetched(true);
	}
	return (
		<div>
			<Topbar />
			<div className='main__body'>
				<Sidebar />
				{maildata !== undefined ? (
					<div className='mailBody'>
						<Image
							width={20}
							height={20}
							src={backimage}
							alt=''
							onClick={() => contextData.router.back()}
						/>
						<div className='mailcontainer'>
							<h3>
								From:
								<span className='emailRow__description'>
									{' '}
									User{maildata.userId}
								</span>
							</h3>
							<h3>
								Subject:
								<span className='emailRow__description'>
									{' '}
									{maildata.subject}
								</span>
							</h3>
							<hr />
							<p>{maildata.body}</p>
						</div>
					</div>
				) : (
					'Loading'
				)}
			</div>
		</div>
	);
}

export default Mail;
