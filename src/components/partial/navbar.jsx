import React from "react";
import bseaLogo from '../../img/bsea-logo.png'
import { NavLink } from "react-router-dom";


function Navbar(){
    const activeLink = 'active';
    return (
            <div className="container-xxl bg-white p-0">
                
                <div className="container-xxl position-relative p-0 hero-head">
                    <nav className="navbar navbar-expand-lg navbar-primary px-4 px-lg-5 py-3 py-lg-0">
                        <a href="/" className="navbar-brand p-0">
                            <img src={bseaLogo} width="50" height="50" className="d-inline-block align-middle" alt="bsea logo"/>
                            <h1 className="d-inline-block align-middle m-0 brand-title">BSEA Cambodia</h1>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <NavLink to="/" className='nav-item nav-link {({isActive}=>(isActive?activeLink:null))}'>Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link {({isActive}=>(isActive?activeLink:null))}">About</NavLink>
                                <NavLink to="/error" className="nav-item nav-link {({isActive}=>(isActive?activeLink:null))}">Membership</NavLink>
                                <div className="nav-item dropdown">
                                    <a id="dropdown-page" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0 page">
                                        <a href="/team" className="dropdown-item">Our Team</a>
                                    </div>
                                </div>
                                <a href="/contact" className="nav-item nav-link">Contact</a>
                                
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle lang" data-bs-toggle="dropdown">EN</a>
                                    <div className="dropdown-menu m-0">
                                        <a className="dropdown-item lang-kh">ភាសាខ្មែរ</a>
                                        <a className="dropdown-item lang-en">English</a>
                                        <a className="dropdown-item lang-cn">中文</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
    )
}

export default Navbar;