<<<<<<< HEAD
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import  Footer from '../components/Footer';

const ReactLayouts = ({ searchQuery, setSearchQuery }) => {
    const location = useLocation();
    const href = location.pathname ;
    return (
        <div className='flex flex-col'>
            {(href == '/' || href =='/') &&
                 <Header  searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            }
            <main className='max-h-screen'>
                <Outlet /> 
=======
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

const ReactLayouts = ({ searchQuery, setSearchQuery }) => {
    const location = useLocation();
    const hideHeaderOnPaths = ['/login', '/signup'];
    const showHeader = !hideHeaderOnPaths.includes(location.pathname);

    return (
        <div className='flex flex-col max-h-screen'>
            {showHeader && <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
            <main className='grow'>
                <Outlet />
>>>>>>> 5762a110e4f5d01cba5795e43b680d79380ea8ef
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default ReactLayouts;