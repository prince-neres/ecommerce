import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { listProducts } from '../../redux/actions/productAction';
import Loader from '../../components/Loader';
import Product from '../../components/Product';


const HomePage = () => {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { error, loading, products } = productList

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch])

	return (
		<div className='mb-3 p-5'>
			<h2 className='font-bold pt-5'>Últimos produtos</h2>
			{
				loading
				? (	
					<Loader />
				) : (
					<div className='my-3 flex flex-col flex-wrap justify-center sm:flex-row'>
						{
							products.map((product) => (
								<Product
									product={product}
									key={product._id}
								/>
							))
						}
					</div>
				)
			}
		</div>
	);
};

export default HomePage;
