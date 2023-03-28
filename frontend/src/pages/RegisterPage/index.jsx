import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/userActions';


const RegisterPage = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState('')
	
	const navigate = useNavigate()
	const location = useLocation()

	const dispatch = useDispatch()

	const redirect = location.search ? location.search.split('=')[1] : '/'

	const userRegister = useSelector(state => state.userRegister)
	
	const {error, loading, userInfo} = userRegister

  useEffect(() => {
		if(userInfo) {
			navigate(redirect)
		}
	},[navigate, userInfo, redirect])

	const submitHandler = (e) => {
		e.preventDefault()
		if (password != confirmPassword) {
			setMessage('Password do not Match')
		} else {
			dispatch(register(name, email, password))
		}
	}

	return (
		<div>
			<h1>Se Registrar</h1>
			{ message && <p>{message}</p> }
			{ error && <p>{error}</p> }
			{ loading && <Loader /> }

			<form onSubmit={submitHandler}>
				<div>
					<label>Nome:</label>
					<input type='name' placeholder='Digite seu nome' value={name} onChange={(e)=> setName(e.target.value)} required />
				</div>

				<div>
					<label>Email:</label>
					<input required type='email' placeholder='Digite seu email' value={email} onChange={(e)=> setEmail(e.target.value)} />
				</div>

				<div>
					<label>Password</label>
					<input required type='password' placeholder='Digite a senha' value={password} onChange={(e)=> setPassword(e.target.value)} />
				</div>

				<div>
					<label>Confirm Password</label>
					<input required type='password' placeholder='Confirme a senha' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} />
				</div>
				<button type='submit'>Cadastrar</button>
			</form>
			<div>
				<p>Já possui conta?</p>
				<Link to={redirect?`/login?redirect=${redirect}`:'/login'}>Entrar</Link>
			</div>
		</div>
	);
};

export default  RegisterPage;
