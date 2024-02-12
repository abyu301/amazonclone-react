import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

const ProtectedRoute = ({ children, msg, redirect }) => {
    const navigate = useNavigate();
    const [{ user }, dispatch] = useContext(DataContext);

    useEffect(() => {
        if (!user) {
            navigate("/signin", { state: { msg, redirect } });
        }
    }, [user, navigate, msg, redirect]);

    // // Return null if user is not set yet
    // if (user === null) {
    //     return null;
    // }

    return children;
};

export default ProtectedRoute;
