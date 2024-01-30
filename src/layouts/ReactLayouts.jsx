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
            </main>
            {/* <Footer /> */}
        </div>
    )
}

export default ReactLayouts