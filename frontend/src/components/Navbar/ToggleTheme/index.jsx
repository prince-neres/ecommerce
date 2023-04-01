import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';

export default function ToggleTheme () {
	useEffect(() => {
		const darkMode = JSON.parse(localStorage.getItem('darkMode'));
		darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
	});

	const toogle = () => {
		document.documentElement.classList.toggle('dark');
		localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
	};

	return (
			<div className='h-14 rounded-full pr-8'>
				<MoonIcon className='block dark:hidden cursor-pointer h-14 hover:text-dark-orange duration-200' onClick={toogle} />
				<SunIcon className='hidden dark:block cursor-pointer h-14 hover:text-dark-orange duration-200' onClick={toogle} />
			</div>
		)
};
