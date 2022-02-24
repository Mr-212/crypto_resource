import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./layouts/dashboard";

export const AdminRoutes = () => {
    return(
        <div className="row">
            <Routes>
                <Route path='/admin' element={<Dashboard/>} ></Route>
            </Routes>

        </div>
    )

}