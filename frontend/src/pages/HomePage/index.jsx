import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../redux/actions/productAction';
import Loader from '../../components/Loader';
import Product from '../../components/Product';

function HomePage() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="mb-3 p-5">
      <h2 className="font-bold text-lg pt-5 text-center">Últimos produtos</h2>
      {(() => {
        if (loading) return <Loader />;
        if (error) return <p className="text-center font-bold text-red-500 pb-5">{error}</p>;
        return (
          <div className="my-3 flex flex-col flex-wrap justify-center sm:flex-row">
            {products.map((product) => (
              // eslint-disable-next-line no-underscore-dangle
              <Product product={product} key={product._id} />
            ))}
          </div>
        );
      })()}
    </div>
  );
}

export default HomePage;
