
import { Outlet } from 'react-router-dom';
import Nav from '../Components/SheredStyle/Nav';
import Footer from '../Components/SheredStyle/Footer';

const Root = () => {
    return (
        <div className=' mt-5 px-5 '>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;