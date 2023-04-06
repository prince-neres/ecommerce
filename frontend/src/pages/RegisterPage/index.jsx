import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import { register } from '../../redux/actions/userActions';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);

  const redirect = location.search ? location.search.split('=')[1] : '/';
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Password do not Match');
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-5">
      <h1 className="font-bold text-lg pt-5 text-center">Se Registrar</h1>
      <div className="flex flex-col justify-center items-center-text-center w-72 sm:w-96 pt-10">
        {message && <p className="text-center font-bold text-dark-orange pb-5">{message}</p>}
        {error && <p className="text-center font-bold text-red-500 pb-5">{error}</p>}
        <form onSubmit={submitHandler} className="flex flex-col text-center">
          <label className="font-bold mb-3" htmlFor="name">
            Nome
            <input
              id="name"
              type="name"
              placeholder="Digite seu nome"
              className="mb-3 p-3 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label htmlFor="email" className="font-bold my-3">
            Email
            <input
              id="email"
              required
              type="email"
              placeholder="Digite seu email"
              className="mb-3 p-3 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <input
            id="email"
            required
            type="email"
            placeholder="Digite seu email"
            className="mb-3 p-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="font-bold my-3" htmlFor="password">
            Senha
            <input
              required
              id="password"
              type="password"
              placeholder="Digite a senha"
              className="mb-3 p-3 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label className="font-bold my-3" htmlFor="confirm-password">
            Confirmar Senha
            <input
              required
              id="confirm-password"
              type="password"
              placeholder="Confirme a senha"
              className="p-3 rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>

          <button
            type="submit"
            className="font-bold bg-green-500 p-3 my-7 rounded text-white flex flex-row items-center justify-center"
          >
            {loading && <Loader />} Cadastrar
          </button>
        </form>
        <div className="flex justify-center">
          <p>
            Já possui conta?
            <Link
              to={redirect ? `/login?redirect=${redirect}` : '/login'}
              className="hover:text-dark-orange text-dark-blue first-letter:duration-200 font-bold"
            >
              {' '}
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
