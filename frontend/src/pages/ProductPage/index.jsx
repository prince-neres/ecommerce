import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import Rating from '../../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../../redux/actions/productAction';


const ProductPage = () => {
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
	const { id } = useParams();
	const navigate = useNavigate();

  useEffect(() => {
    dispatch(listProductDetails(id));
  },[dispatch, id]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`)
 	}

	return (
		<div>
      <Link to="/">
        {" "}
        Voltar
      </Link>
			{
				loading 
				? (<Loader />) 
				: error 
				? (<p>{error}</p>)
				: (
					<div>
						<div>
							<img src={product.url} alt={product.name} />
						</div>
						<div>
							<h3>{product.name}</h3>
							<Rating
								value={product.rating}
								text={`${product.numReviews} reviews`}
								color={"#f8e825"}
							/>
							<span>
								Preço: R$ {product.price}
							</span>
							<p>
								Descrição: {product.description}
							</p>
						</div>
						<p>Status:</p>
						<p>
							{product.countInStock > 0 ? 'Em estoque' : 'Sem estoque'}
						</p>
							{
								product.countInStock > 0 && (
									<div>
										<p>Quantidade:</p>
										<select
											value={qty}
											onChange={(e) => setQty(e.target.value)}
										>
											{[...Array(product.countInStock).keys()].map((x) => (
												<option key={x + 1} value={x + 1}>
													{x + 1}
												</option>
											))}
										</select>
									</div>
								)
							}
							<button
								disabled={product.countInStock == 0}
								type="button"
								onClick={addToCartHandler}
							>
								Adicionar ao carrinho
							</button>
					</div>
      	)
			}
		</div>
	);
};

export default ProductPage;
