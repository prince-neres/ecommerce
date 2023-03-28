import Rating from '../Rating';
import { Link } from 'react-router-dom';


const Product = ({ product }) => {
  return (
    <div>
      <Link to={`/product/${product._id}`}>
        <img src={product.url} />
      </Link>

			<Link to={`/product/${product._id}`}>
				<h3>
					<strong>{product.name}</strong>
				</h3>
			</Link>

				<div>
					{product.rating} de {product.numReviews} avaliações
				</div>

			<strong>
				${product.price}
			</strong>

			<Rating
				value={product.rating}
				text={`${product.numReviews} reviews`}
				color={"#f8e825"}
			/>
    </div>
  );
}

export default Product;
