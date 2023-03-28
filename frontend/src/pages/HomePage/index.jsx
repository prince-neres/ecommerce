import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { listProducts } from '../../redux/actions/productAction';
import Loader from '../../components/Loader';


const HomePage = () => {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { error, loading, products } = productList

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch])

	return (
		<div>
			<h1>Últimos produtos</h1>
			{
				loading
				? (	
					<Loader />
				) : (
					<div>
						{
							products.map((product, index) => (
								<div key={index}>
									<p>{product.name}</p>
								</div>
							))
						}
					</div>
				)
			}
		</div>
	);
};

export default HomePage;
