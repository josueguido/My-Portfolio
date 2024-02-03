import React from "react";
import Home from "../views/all-home-version/Home";
import { Routes, Route } from "react-router-dom";

const AllRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default AllRouter;
