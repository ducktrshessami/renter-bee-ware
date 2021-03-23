import React from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";

export default function Logout({ refreshNavAuth }) {
    const history = useHistory();
    API.logout()
        .then(() => refreshNavAuth())
        .then(() => history.push("/"));
    return <div></div>;
};
