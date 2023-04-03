import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


const BasePage = () => {
	return (
		<div className='h-screen flex flex-col justify-between scrollbar-thin scrollbar-thumb-dark-blue overflow-y-scroll scrollbar-thumb-rounded-full'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
	);
};

export default BasePage;
