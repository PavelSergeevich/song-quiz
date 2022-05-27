import React from "react";
import Layout from "./Layout";
import FormRegistration from "./FormRegistration";


const Home = () => {
    return (
        <Layout children={<FormRegistration />}/>
    )}

export default Home
