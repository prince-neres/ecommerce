import Rating from '../Rating';
import { Link } from 'react-router-dom';


const Product = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`} className='flex m-3 justify-center'>
			<div className='p-5 flex flex-col w-64 text-center bg-dark-blue rounded text-white'	>
				<div>
					<img src={product.url} className='h-56 rounded' />
				</div>
				<h3 className='font-bold my-2 line-clamp-2'>{product.name}</h3>
				<strong className='py-3 bg-dark-orange my-2 rounded'>
					{new Intl.NumberFormat('pt-BR', {currency: 'BRL', style: 'currency'}).format(product.price)}
				</strong>

				<Rating
					value={product.rating}
					text={`${product.numReviews} avaliações`}
				/>
			</div>
    </Link>
  );
}

export default Product;
