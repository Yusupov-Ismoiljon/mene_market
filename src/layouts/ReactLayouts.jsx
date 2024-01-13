import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';

const ReactLayouts = () => {
    const location = useLocation();
    const header = location.pathname === '/';
    return (
        <div className='flex flex-col'>
            <Header />
            <main className='max-h-screen'>
                <Outlet />
            </main>
        </div>
    )
}

export default ReactLayouts