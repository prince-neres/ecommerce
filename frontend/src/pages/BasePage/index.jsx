import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


const BasePage = () => {
	return (
		<div className='flex flex-col justify-between'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
	);
};

export default BasePage;
