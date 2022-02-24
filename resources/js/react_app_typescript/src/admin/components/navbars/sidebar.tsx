import React from "react";
import { Routes, Route, Navigate, Link} from 'react-router-dom';

export const SideNavBar = () => {

    return (
        <div className="flex-shrink-0 p-3 bg-white border-end">
            <a className="d-flex align-items-center border-bottom"> Menu List</a>
            <ul className="list-unstyled ps-0">
                <>
                    <li className="mb-1">
                        <Link to='/admin/profile' > Profile</Link>
                    </li>
                    <li className="mb-1">
                        <Link to='/admin/settings' > Settings</Link>
                    </li>
                </>
            </ul>
        </div>
    );
    
}