import {
	HomeIcon,
	ShoppingCartIcon,
	UserIcon,
	ArrowLeftOnRectangleIcon,
	ArrowRightOnRectangleIcon,
	Bars3Icon
} from '@heroicons/react/24/solid';
import { Link  } from 'react-router-dom';


const MobilMenu = ({location, userInfo, logoutHandler}) => {
	const mobile_menu = () => {
		const menu = document.querySelector('.mobile-menu');
			menu.classList.toggle('hidden');
	};

	return (
		<>
			<div className='block sm:hidden items-center p-5' onClick={mobile_menu}>
				<button className='outline-none mobile-menu-button'>
					<Bars3Icon className='h-10' />
				</button>
			</div>
			<div>
				<div className='sm:hidden flex-col py-5 mobile-menu'>
					<Link to={'/'} className={location.pathname === '/' ? 'font-bold' : 'hover:text-dark-theme duration-200'}>
						<p className='flex'>
							<HomeIcon className='h-5 pr-1'/>
							Ínicio
						</p>
					</Link>
					<Link to={'/cart'} className={location.pathname === '/cart' ? 'font-bold' : 'hover:text-dark-theme duration-200'}>
						<p className='flex pt-2'>
							<ShoppingCartIcon className='h-5 pr-1'/>
							Carrinho
						</p>
					</Link>
					{	
						userInfo
						? (
							<>
								<Link to={'/profile'} className={location.pathname === '/profile' ? 'font-bold' : 'hover:text-dark-theme duration-200'}>
									<p className='flex pt-2'>
										<UserIcon className='h-5 pr-1'/>
										Perfil
									</p>
								</Link>
								<button onClick={logoutHandler}>
									<p className='flex hover:text-dark-theme duration-200 pt-2'>
										<ArrowLeftOnRectangleIcon className='h-5 pr-1'/>
										Sair
									</p>
								</button>
							</>
							) : (
								<Link to={"/login"} className={location.pathname === '/login' ? 'font-bold' : 'hover:text-dark-theme duration-200'}>
									<p className='flex duration-200 pt-2'>
										<ArrowRightOnRectangleIcon className='h-5 pr-1'/>
										Login
									</p>
								</Link>
						)
					}
				</div>
			</div>
		</>
	);
};

export default MobilMenu;