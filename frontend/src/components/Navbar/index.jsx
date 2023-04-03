


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
import { useEffect } from 'react';


const Navbar = () => {
	const userLogin = useSelector(state => state.userLogin);
	const location = useLocation();
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
	const cart = useSelector (state => state.cart);
	const { cartItems } = cart;

	useEffect(() => {
		console.log(cartItems)
	}, [])

	return (
		<nav className='flex items-center md:items-center  h-auto justify-between'>
			<div className='hidden sm:flex sm:flex-row p-8'>
				<Link to={'/'} className={location.pathname === '/' ? 'font-bold' : 'hover:text-dark-orange duration-200'}>
					<p className='flex pr-5'>
						<HomeIcon className='h-5 pr-1' />
						Ínicio
					</p>
				</Link>
				<Link to={'/cart'} className={location.pathname === '/cart' ? 'font-bold' : 'group duration-200'}>
					<div	 className='flex pr-5'>
						<span className='flex flex-row'>
							<ShoppingCartIcon className='h-5 pr-1 group-hover:text-dark-orange'/>
							{	
								cartItems.length
								?	<strong className='px-2 mr-2 bg-dark-orange rounded-md'>
										{(cartItems.reduce((acc, item) => acc + item.qty, 0))}
									</strong>
								: null
							}
						</span>
						<p className='group-hover:text-dark-orange'>Carrinho</p>
					</div>
				</Link>
				{	
					userInfo
					? (
						<>
							<Link to={'/profile'} className={location.pathname === '/profile' ? 'font-bold' : 'hover:text-dark-orange duration-200'}>
								<p className='flex pr-5'>
									<UserIcon className='h-5 pr-1' />
									Perfil
								</p>
							</Link>
							<button onClick={logoutHandler}>
								<p className='flex hover:text-dark-orange duration-200'>
									<ArrowLeftOnRectangleIcon className='h-5 pr-1' />
									Sair
								</p>
							</button>
						</>
					)
					: (
						<Link to={"/login"} className={location.pathname === '/login' ? 'font-bold' : 'hover:text-dark-orange duration-200'}>
							<p className='flex hover:text-dark-theme duration-200'>
								<ArrowRightOnRectangleIcon className='h-5 pr-1' />
								Login
							</p>
						</Link>
					)
				}
			</div>
			<MobilMenu location={location} userInfo={userInfo} logoutHandler={logoutHandler} cartItems={cartItems}/>
			<ToggleTheme />
		</nav>
	);
};

export default Navbar;
