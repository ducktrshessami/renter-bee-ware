import React from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";

export default function Logout() {
    API.logout()
        .then(() => {
            let history = useHistory();
            history.push("/");
        });
    return <div></div>;
};
