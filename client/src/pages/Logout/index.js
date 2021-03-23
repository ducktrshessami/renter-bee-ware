import React from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";

export default function Logout({ refreshAuth }) {
    const history = useHistory();
    API.logout()
        .then(() => refreshAuth())
        .then(() => history.push("/"));
    return <div></div>;
};
