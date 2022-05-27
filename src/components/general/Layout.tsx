import React, {ReactComponentElement} from 'react';
import ReactDOM from 'react-dom/client';
import './Layout.css';


const Layout = ({
    children
                }: any) => {
    return (
        <div className="bg__container">
            <div className="bg__animated bg__animated-rectangle--1" />
            <div className="bg__animated bg__animated-rectangle--2" />
            <div className="bg__animated bg__animated-rectangle--3" />
            {children}
        </div>
    );
}

export default Layout;
