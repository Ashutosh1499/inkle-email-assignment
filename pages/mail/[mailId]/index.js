/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import Sidebar from '@axios/pages/components/sidebar';
import context from '@axios/pages/context/Context';
import Image from 'next/image';
import backimage from '../../../public/Images/backimage.png';
import Topbar from '@axios/pages/components/topbar';

function Mail() {
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
