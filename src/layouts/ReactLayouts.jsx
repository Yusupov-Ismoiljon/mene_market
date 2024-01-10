import React from 'react';
import Home from '../components/Home';
import { Outlet } from 'react-router-dom';

const ReactLayouts = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default ReactLayouts