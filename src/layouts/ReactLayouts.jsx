import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const ReactLayouts = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default ReactLayouts