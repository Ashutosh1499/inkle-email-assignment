import React, { useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import inboxImage2 from '../public/Images/inboxImage2.png';
import draftImage1 from '../public/Images/draft1.png';
import spamImage1 from '../public/Images/spam1.png';
import trashImage1 from '../public/Images/trash1.png';
import inboxImage1 from '../public/Images/inboxImage2.png';
import draftImage2 from '../public/Images/draft1.png';
import spamImage2 from '../public/Images/spam1.png';
import trashImage2 from '../public/Images/trash2.png';
import context from './context/Context';

function Sidebar() {
	const contextData = useContext(context);
	const refs = useRef(new Array());
	const makeSidebarActive = i => {
		refs.current.forEach(ref => {
			ref.classList = 'sidebarOption';
		});
		refs.current[i].classList.add('sidebarOption__active');
	};
	useEffect(() => {
		console.log(refs);
		refs.current = refs.current.slice(0, contextData.tagCount.length + 1);
		switch (contextData.router.asPath) {
			case '/tags/inbox':
				makeSidebarActive(0);
				break;
			case '/tags/draft':
				makeSidebarActive(1);
				break;
			case '/tags/spam':
				makeSidebarActive(2);
				break;
			case '/tags/trash':
				makeSidebarActive(3);
				break;
			case '/tags/all':
				makeSidebarActive(4);
				break;
			default:
				makeSidebarActive(0);
				break;
		}
	});
	return (
		<div className='sidebar'>
			<div
				className='sidebarOption'
				ref={ele => refs.current.push(ele)}
				onClick={e => {
					contextData.router.push('/tags/inbox');
				}}>
				<Image src={inboxImage2} width={20} height={20} alt='' />
				<h3>Inbox</h3>
				<span>{contextData.tagCount[0]}</span>
			</div>

			<div
				className='sidebarOption'
				ref={ele => refs.current.push(ele)}
				onClick={e => {
					contextData.router.push('/tags/draft');
				}}>
				<Image src={draftImage1} width={20} height={20} alt='' />
				<h3>Drafts</h3>
				<span>{contextData.tagCount[1]}</span>
			</div>

			<div
				className='sidebarOption'
				ref={ele => refs.current.push(ele)}
				onClick={e => {
					contextData.router.push('/tags/spam');
				}}>
				<Image src={spamImage1} width={20} height={20} alt='' />
				<h3>Spam</h3>
				<span>{contextData.tagCount[2]}</span>
			</div>

			<div
				className='sidebarOption'
				ref={ele => refs.current.push(ele)}
				onClick={e => {
					contextData.router.push('/tags/trash');
				}}>
				<Image src={trashImage1} width={20} height={20} alt='' />
				<h3>Trash</h3>
				<span>{contextData.tagCount[3]}</span>
			</div>
			<div
				className='sidebarOption'
				ref={ele => refs.current.push(ele)}
				onClick={e => {
					contextData.router.push('/tags/all');
				}}>
				<h3>All E-Mails</h3>
			</div>
		</div>
	);
}

export default Sidebar;
