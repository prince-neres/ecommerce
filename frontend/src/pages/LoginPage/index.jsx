import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import { login } from '../../redux/actions/userActions';


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
		<div>
			<h1>Entrar</h1>
			{ error && <p>Erro</p> }
			{ loading && <Loader /> }

			<form onSubmit={submitHandler}>
				<label>Email:</label>
				<input
					required
					type='email'
					placeholder='Digite seu email'
					value={email}
					onChange={(e) =>
					 setEmail(e.target.value)} 
				/>
				<label>Senha:</label>
				<input
					required
					type='password'
					placeholder='Digite seu senha'
					value={password}
					onChange={(e) =>
					 setPassword(e.target.value)} 
				/>
				<button type='submit'>
					Entrar
				</button>
			</form>
				<div>
					<p>Novo?</p>
					<Link to={redirect?`/register?redirect=${redirect}`:'/register'}>Se Registrar</Link>
				</div>
		</div>
	);
};

export default LoginPage;
