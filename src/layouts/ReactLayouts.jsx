import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';

const ReactLayouts = ({ searchQuery, setSearchQuery }) => {
    const location = useLocation();
    const header = location.pathname === '/';
    return (
        <div className='flex flex-col'>
            {header &&
                 <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            }
            <main className='max-h-screen'>
                <Outlet />
            </main>
        </div>
    )
}

export default ReactLayouts