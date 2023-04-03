import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import { login } from '../../redux/actions/userActions';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';


const LoginPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const location = useLocation()
	const navigate = useNavigate()

	const redirect = location.search ? location.search.split('=')[1] : '/'

	const userLogin = useSelector(state => state.userLogin)
	const { error, loading, userInfo } = userLogin

	useEffect(()=>{
		if (userInfo) {
			navigate(redirect)
		}
	}, [navigate, userInfo, redirect])

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(login(email, password))
	}

	return (
		<div className='flex flex-col justify-center items-center pt-5'>
			<h1 className='font-bold text-lg pt-5 text-center'>Fazer Login</h1>
			<div className='flex flex-col justify-center items-center-text-center w-72	 sm:w-96 pt-10	'>
				{ error && <p className='text-center font-bold text-red-500 pb-5'>{error}</p> }
				<form onSubmit={submitHandler} className='flex flex-col text-center'>
					<label
						className='font-bold mb-3'
						htmlFor='email'
					>
						Email
					</label>
					<input
						required
						type='email'
						id='email'
						placeholder='Digite seu email'
						className='mb-3 p-3 rounded'
						value={email}
						onChange={(e) =>
							setEmail(e.target.value)} 
					/>	
					<label
						className='font-bold my-3'
						htmlFor='password'
					>
						Senha
					</label>
					<input
						required
						type='password'
						id='password'
						placeholder='Digite seu senha'
						className='p-3 rounded'
						value={password}
						onChange={(e) =>
							setPassword(e.target.value)} 
					/>
					<button type='submit' className='font-bold bg-green-500 p-3 my-7 rounded text-white flex flex-row items-center justify-center'>
						<ArrowRightOnRectangleIcon className='h-5 pr-1' />
						 Entrar { loading && <Loader /> }
					</button>
				</form>
				<div className='text-center	'>
					<p>
						Novo?
						<Link
							className='hover:text-dark-orange text-dark-blue first-letter:duration-200 font-bold'
							to={redirect?`/register?redirect=${redirect}`:'/register'}
						> Se Registrar
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
