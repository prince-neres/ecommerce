


import { Link  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions/userActions';


const Navbar = () => {
	const userLogin = useSelector(state=>state.userLogin)
  const {userInfo} = userLogin
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
  }

	return (
		<nav>
			<Link to={'/'}>
				Ínicio
			</Link>

			<Link to={'/cart'}>
				Carrinho
			</Link>

			{	
				userInfo
				? (
					<>
						<Link to={'/profile'}>
							Perfil
						</Link>
						<button onClick={logoutHandler}>
							Sair
						</button>
					</>
				)
				: (
					<Link to={"/login"}>
						Login
					</Link>
				)
			}
		</nav>
	);
};

export default Navbar;
