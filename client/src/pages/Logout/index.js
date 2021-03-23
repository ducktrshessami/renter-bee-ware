import React from "react";
import API from "../../utils/API";

export default function Logout() {
    API.logout()
        .then(() => window.location.pathname = "/");
    return <div></div>;
};
