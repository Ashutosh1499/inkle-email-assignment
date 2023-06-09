import React, { useContext, useState } from 'react';
import Image from 'next/image';
import searchIcon from '../../public/Images/searchIcon.png';
import { Context } from '@axios/pages/_app';

function Topbar() {
	const router = useContext(Context).router;
	const [val, setVal] = useState('');
	return (
		<div className='header'>
			<div className='title' onClick={() => router.push('/')}>
				E-Mails
			</div>
			<div className='inputBox'>
				<Image src={searchIcon} width={20} height={20} alt='search' />
				<form
					className='inputForm'
					onSubmit={e => {
						e.preventDefault();
						router.push('/search/' + val);
					}}>
					<input
						type='text'
						placeholder='Search...'
						value={val}
						onChange={e => {
							e.preventDefault();
							setVal(e.target.value);
						}}
					/>
				</form>
			</div>
		</div>
	);
}

export default Topbar;
