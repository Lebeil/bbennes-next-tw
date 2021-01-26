import React from 'react';
import Navbar from "../components/nav";
import Footer from "../components/footer";

const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;
