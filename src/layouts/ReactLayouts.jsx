import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const ReactLayouts = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default ReactLayouts