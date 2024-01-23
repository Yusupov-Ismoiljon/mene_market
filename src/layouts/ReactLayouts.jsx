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
            </main>
        </div>
    );
}

export default ReactLayouts;