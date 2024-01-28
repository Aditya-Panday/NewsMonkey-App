import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    let [search, setSearch] = useState("")

    function postSearch(e) {
        e.preventDefault()      //not reload
        props.changeSearch(search)
        setSearch("")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light"  to="/"><span className='nm'>NewsMonkey</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light active" aria-current="page" onClick={()=>props.changeSearch("")} to="/All">All</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" onClick={()=>props.changeSearch("")} to="/Politics">Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" onClick={()=>props.changeSearch("")} to="/Science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" onClick={()=>props.changeSearch("")} to="/Technology">Technology</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link text-light dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Other
                                </a>
                                <ul className="dropdown-menu bg-dark ">
                                    <li><Link className="dropdown-item text-light" onClick={()=>props.changeSearch("")} to="/Education">Education</Link></li>
                                    <li><Link className="dropdown-item text-light" onClick={()=>props.changeSearch("")} to="/Crime">Crime</Link></li>
                                    <li><Link className="dropdown-item text-light" onClick={()=>props.changeSearch("")} to="/Sports">Sports</Link></li>
                                    <li><Link className="dropdown-item text-light" onClick={()=>props.changeSearch("")} to="/Cricket">Cricket</Link></li>
                                    <li><Link className="dropdown-item text-light" onClick={()=>props.changeSearch("")} to="/Entertainment">Entertainment</Link></li>
                                    <li><Link className="dropdown-item text-light" onClick={()=>props.changeSearch("")} to="/Jokes">Jokes</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link text-light dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </a>
                                <ul className="dropdown-menu bg-dark">
                                    <li><button className="dropdown-item text-light" onClick={() => props.changeLanguage('hi')}>Hindi</button></li>
                                    <li><button className="dropdown-item text-light" onClick={() => props.changeLanguage('en')}>English</button></li>
                                </ul>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode } type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                        </div>
                        <form className="d-flex" role="search" onSubmit={(e) => postSearch(e)}>
                            <input className="form-control me-2" type="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

