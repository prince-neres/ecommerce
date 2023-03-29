


import { Link, useLocation  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userActions';
import ToggleTheme from './ToggleTheme';
import {
	HomeIcon,
	ShoppingCartIcon,
	UserIcon,
	ArrowLeftOnRectangleIcon,
	ArrowRightOnRectangleIcon
} from '@heroicons/react/24/solid';
import MobilMenu from './MobileMenu';


const Navbar = () => {
	const userLogin = useSelector(state => state.userLogin);
	const location = useLocation();
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

	return (
		<nav className='flex items-center md:items-center  h-auto justify-between'>
			<div className='hidden sm:flex sm:flex-row p-8'>
				<Link to={'/'} className={location.pathname === '/' ? 'font-bold' : 'hover:text-dark-theme duration-200'}>
					<p className='flex pr-5'>
						<HomeIcon className='h-5 pr-1' />
						Ínicio
					</p>
				</Link>
				<Link to={'/cart'} className={location.pathname === '/cart' ? 'font-bold' : 'hover:text-dark-theme duration-200'}>
					<p className='flex pr-5'>
						<ShoppingCartIcon className='h-5 pr-1' />
						Carrinho
					</p>
				</Link>
				{	
					userInfo
					? (
						<>
							<Link to={'/profile'} className={location.pathname === '/profile' ? 'font-bold' : 'hover:text-dark-theme duration-200'}>
								<p className='flex pr-5'>
									<UserIcon className='h-5 pr-1' />
									Perfil
								</p>
							</Link>
							<button onClick={logoutHandler}>
								<p className='flex hover:text-dark-theme duration-200'>
									<ArrowLeftOnRectangleIcon className='h-5 pr-1' />
									Sair
								</p>
							</button>
						</>
					)
					: (
						<Link to={"/login"} className={location.pathname === '/login' ? 'font-bold' : 'hover:text-dark-theme duration-200'}>
							<p className='flex hover:text-dark-theme duration-200'>
								<ArrowRightOnRectangleIcon className='h-5 pr-1' />
								Login
							</p>
						</Link>
					)
				}
			</div>
			<MobilMenu location={location} userInfo={userInfo} logoutHandler={logoutHandler} />
			<ToggleTheme />
		</nav>
	);
};

export default Navbar;
