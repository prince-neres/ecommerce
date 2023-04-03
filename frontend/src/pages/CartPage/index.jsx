import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import { TrashIcon } from '@heroicons/react/24/solid';


const CartPage = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const location = useLocation();
	const dispatch = useDispatch();

	const qty = location.search ? Number(location.search.split('=')[1]) : 1;
	const cart = useSelector (state => state.cart);
	const { cartItems } = cart;

	useEffect(() => {
		if (id) {
			dispatch(addToCart(id, qty));
		};

		console.log(cartItems)
	}, [dispatch, id, qty]);

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
	};

	const checkoutHandler = () => {
		navigate('/login?redirect=shipping');
	};

	return (
		<div className='p-8'>
			<h2 className='font-bold text-lg pt-5 text-center'>Carrinho de compras</h2>
			<div className='pt-10 flex flex-col md:flex-row justify-center'> 
				<div className='flex flex-col justify-center text-center'>
						{
							cartItems.length === 0
							? (<p>
									Seu carrinho está vázio <Link to='/'>Voltar</Link>
								</p>
							) : (
								<div className='flex flex-col justify-center'>
									{
										cartItems.map(item => (
											<div key={item.product} className='p-5 flex flex-col md:flex-row bg-dark-blue rounded mb-5 md:mr-5'>
												<div className='flex justify-center'>
													<img 
														src={item.url}
														alt={item.name}
														className='h-56 rounded'
													/>
												</div>
												<div className='md:mx-5'>
													<div className=	'font-bold pt-5	'>
														<Link to={`/product/${item.product}`}>{item.name}</Link>
													</div>
													<div className='flex flex-row justify-center items-center md:justify-start'>
														<strong className='p-3'>
																{new Intl.NumberFormat('pt-BR', {currency: 'BRL', style: 'currency'}).format(item.price)}
														</strong>
														<select
															value={item.qty}
															onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
															className='text-black h-5'
														>
															{
																[...Array(item.countInStock).keys()].map((x) => (
																	<option key={x + 1} value={x + 1}>
																		{x + 1}
																	</option>
																))
															}
														</select>
													</div>
													<div className='flex justify-center md:justify-start py-3 w-full'>
														<button
															type='button'
															variant='light'
															onClick={() => removeFromCartHandler(item.product)}
															className='flex flex-row bg-red-500 p-3 rounded'
														>
															<TrashIcon className='h-5 pr-1' /> Remover
														</button>
													</div>
												</div>
											</div>
										))
									}
								</div>
							)
						}
				</div>

				<div className='p-5 flex flex-col text-center bg-dark-blue rounded h-full w-full sm:w-auto'>
						<div>
							<h2 className=''>
								Total de {cartItems.reduce((acc, item) => acc + item.qty, 0)} produtos
							</h2>
							<p className='bg-green-100 text-green-700 w-full py-3 rounded mt-3'>
								{
									new Intl.NumberFormat('pt-BR', {currency: 'BRL', style: 'currency'}).format(
										cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)
									)
								}
							</p>
						</div>

						<div>
							<button
								type='button'
								className='bg-green-600 p-4 rounded mt-3 w-full'
								disabled={cartItems.length === 0}
								onClick={checkoutHandler}
							>
								Confirmar
							</button>
						</div>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
