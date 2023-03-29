import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';


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
	}, [dispatch, id, qty]);

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
	};

	const checkoutHandler = () => {
		navigate('/login?redirect=shipping');
	};

	return (
		<div>
			<div>
				<h1>Carrinho de compras</h1>
					{
						cartItems.length === 0
						? (<p>
								Seu carrinho está vázio <Link to='/'>Voltar</Link>
							</p>
						) : (
							<div>
								{
									cartItems.map(item => (
										<div key={item.product}>
												<div>
														<div>
															<img src={item.url} alt={item.name} />
														</div>
														<div>
															<Link to={`/product/${item.product}`}>{item.name}</Link>
														</div>

														<div>
																${item.price}
														</div>

														<div>
															<select
																value={item.qty}
																onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
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

														<div>
															<button
																type='button'
																variant='light'
																onClick={() => removeFromCartHandler(item.product)}
															>
																Remover
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

			<div>
				<div>
					<div>
						<div>
							<h2>Total ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) produtos</h2>
							${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
						</div>
					</div>

					<div>
						<button
							type='button'
							className='btn-block'
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
