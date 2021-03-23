import React from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";

export default function Logout() {
    API.logout();
    return <div></div>;
};
