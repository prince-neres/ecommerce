import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Loader from '../../components/Loader';
import Rating from '../../components/Rating';
import { listProductDetails } from '../../redux/actions/productAction';

function ProductPage() {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  return (
    <div className="p-8">
      <Link to="/" className="flex pb-5">
        <ArrowLeftIcon className="h-5 pr-1 text-lg" /> Voltar
      </Link>

      {(() => {
        if (loading) return <Loader />;
        if (error) return <p>{error}</p>;
        return (
          <div className="bg-dark-blue flex flex-col justify-center text-center p-5 rounded text-white">
            <div className="md:justify-center md:flex md:flex-row md:flex-wrap">
              <div className="flex justify-center sm:h-96">
                <img src={product.url} alt={product.name} className="sm:h-96 rounded" />
              </div>
              <div className="md:w-2/3">
                <h3 className="font-bold pt-5">{product.name}</h3>
                <span className="font-bold text-dark-orange text-lg px-5">
                  {new Intl.NumberFormat('pt-BR', { currency: 'BRL', style: 'currency' }).format(
                    product.price
                  )}
                </span>
                <div>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} avaliações`}
                    color="#f8e825"
                  />
                </div>
                <p className="px-5 pt-5 line-clamp-6 hover:line-clamp-none indent-5 text-justify">
                  {product.description}
                </p>

                <p className={product.countInStock > 0 ? 'text-green-500 mt-3' : 'text-red-500'}>
                  {product.countInStock > 0 ? 'Em estoque' : 'Sem estoque'}
                </p>
                {product.countInStock > 0 && (
                  <div className="flex justify-center mt-3">
                    <p className="pr-3">Quantidade:</p>
                    <select
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                      className="text-black"
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <button
                  disabled={product.countInStock === 0}
                  type="button"
                  onClick={addToCartHandler}
                  className="bg-green-600 p-4 rounded mt-5"
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

export default ProductPage;
