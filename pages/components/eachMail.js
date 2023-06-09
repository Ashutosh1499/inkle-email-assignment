import React, { useContext } from 'react';
import { Context } from '@axios/pages/_app';

function EachMail({ eachMail }) {
	const contextData = useContext(Context);
	return (
		<>
			{eachMail !== undefined ? (
				<div
					className='emailRow'
					key={eachMail}
					onClick={() => {
						contextData.router.push(`/mail/${eachMail.id - 1}`);
					}}>
					<h4 className='emailRow__title'>
						From
						<span className='emailRow__description'>
							{' '}
							- User{eachMail.userId}
						</span>
					</h4>
					<div className='emailRow__title'>
						<h4>
							Tag
							<span className='emailRow__description'> - {eachMail.tag} </span>
						</h4>
					</div>
					<div className='emailRow__message'>
						<h4>
							Subject
							<span className='emailRow__description'>
								{' '}
								- {eachMail.subject}{' '}
							</span>
						</h4>
					</div>
				</div>
			) : (
				'No Data'
			)}
		</>
	);
}

export default EachMail;
