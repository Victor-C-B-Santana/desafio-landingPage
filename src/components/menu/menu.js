import { React } from 'react';
import './menu.css';

export default function menu() {
    return (
        <nav className="navbar navbar-expand w-100 position-absolute top-0 left-0">

            <div className="container-fluid p-0 m-0">

                <div className="w-100 row m-0 fs-4 mt-4">

                    <div className="navbar-nav col">
                        <span className="d-flex justify-content-around w-100 align-items-center">
                        {/* eslint-disable-next-line */}
                            <a
                                className="nav-link text-light"
                                aria-current="page"
                                href="#"
                            >SIAPRESP</a>
                            {/* eslint-disable-next-line */}
                            <a className="nav-link text-light" href="#">PHYTOBLOOM</a>
                        </span>
                    </div>

                    <div className="col">
                        <span className="d-flex justify-content-center w-100 align-items-center">
                            {/* eslint-disable-next-line */}
                            <a className="navbar-brand text-light img" href="#">
                                <img src={
                                    (window.innerWidth < 1000)
                                    ?"./assets/img/logoV2.png":"./assets/img/logo.png"
                                }
                                    alt="Logo do phytobloom" className={
                                        (window.innerWidth < 1000)?'w-100':'w-75'}/>
                            </a>
                        </span>
                    </div>

                    <div className="navbar-nav col">
                        <span className="d-flex justify-content-around w-100 align-items-center">
                        {/* eslint-disable-next-line */}
                            <a className="nav-link text-light" href="#">SOBRE NÓS</a>
                        {/* eslint-disable-next-line */}
                            <a className="nav-link text-light" href="#">CONTATO</a>
                        </span>
                    </div>

                    <div className='col div_btn'>
                        <button type="button" class="btn btn-primary">TESTAR AGORA</button>
                    </div>

                </div>

            </div>
            
        </nav>
    )
}