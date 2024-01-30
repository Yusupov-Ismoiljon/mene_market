import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from '../components/Footer';

const ReactLayouts = ({ searchQuery, setSearchQuery }) => {
    const location = useLocation();
    const href = location.pathname;
    const hideHeaderOnPaths = ['/login', '/signup'];
    const showHeader = !hideHeaderOnPaths.includes(location.pathname);
    return (
        <div className=' '>
            {(href == '/' || href == '/') &&
                <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            }

            <div className=''>
                <main className=''>
                    <Outlet />
                </main>
            </div>

            {(href == '/' || href == '/') &&
                <Footer  />
            }
        </div>
    );
}

export default ReactLayouts;