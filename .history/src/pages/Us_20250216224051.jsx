import React from 'react';
import './styles/Us.css'; // Asegúrate de tener el CSS correspondiente

const Us = () => {
    return (
        <div>
            <header className="header">
                <section className="header_info">
                    <p> 💜🤍💜🤍💜🤍💜🤍💜</p>
                </section>
                <section className="container-navbar">
                    <nav className="navbar container">
                        <a href="/src/Layouts/home.html" className="navbar_logo">
                            <img src="/src/img/Icono Redes Sociales - IYF.jpg" alt="logo de la marca" />
                            <span> Im Your Fan Store</span>
                        </a>
                        <div className="navbar_nav">
                            <ul className="nav_list">
                                <li className="nav_link"><a href="/src/Layouts/home.html">Inicio</a></li>
                                <li className="nav_link"><a href="#">Productos</a></li>
                                <li className="nav_link"><a href="#">Ofertas</a></li>
                                <li className="nav_link"><a href="/src/Layouts/nosotros.html">Nosotros</a></li>
                            </ul>
                            <form action="" className="navbar_search">
                                <a href="" className="search_icon">
                                    <img src="/src/img/icons-búsqueda.png" alt="boton de busqueda" />
                                </a>
                            </form>
                            <a href="/src/Layouts/login.html" className="button button-primary button-saber-mas">Iniciar Sesión</a>
                            <button className="navbar_toogle-btn">
                                <img src="/img/menu-icon.svg" alt="boton de menu" />
                            </button>
                            <div className="navbar_mobile-menu">
                                <ul className="nav_list-mobile">
                                    <li className="nav_link-mobile"><a href="/src/Layouts/home.html">Inicio</a></li>
                                    <li className="nav_link-mobile"><a href="#">Productos</a></li>
                                    <li className="nav_link-mobile"><a href="#">Ofertas</a></li>
                                    <li className="nav_link-mobile"><a href="/src/Layouts/nosotros.html">Nosotras</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>
            </header>

            <section className="sobre-nosotros">
                <h2>Sobre Nosotras</h2>
                <div className="mision-vision">
                    <div className="mision">
                        <img src="/src/img/mision1.png" alt="Misión" />
                        <h3>Misión</h3>
                        <p>Nuestra misión en IM YOUR FAN STORE es proporcionar a los fanáticos del K-pop productos exclusivos y de alta calidad, creando una comunidad que conecte a las personas a través de su pasión por la música y el entretenimiento.</p>
                    </div>
                    <div className="vision">
                        <img src="/src/img/vision.png" alt="Visión" />
                        <h3>Visión</h3>
                        <p>Nuestra visión es ser la tienda virtual líder en la industria de productos de K-pop, ofreciendo a nuestros clientes una experiencia única, personalizada y accesible para satisfacer sus necesidades y deseos como fanáticos.</p>
                    </div>
                </div>

                <div className="valores">
                    <h3>Valores</h3>
                    <ul>
                        <li><strong>Pasión ❤️:</strong> Nos impulsa la misma pasión que sienten nuestros clientes por el K-pop.</li>
                        <li><strong>Calidad 🏆 :</strong> Garantizamos la mejor calidad en cada producto que ofrecemos.</li>
                        <li><strong>Comunidad 🌍:</strong> Creemos en fortalecer la comunidad global de fans del K-pop.</li>
                        <li><strong>Innovación 💡:</strong> Buscamos innovar constantemente para ofrecer experiencias únicas.</li>
                    </ul>
                </div>
            </section>

            <footer>
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <ul className="social_icon">
                    <li>
                        <a href="https://www.instagram.com/">
                            <ion-icon name="logo-instagram"></ion-icon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                            </svg>
                        </a>
                    </li>
                </ul>

                <ul className="menuu">
                    <li><a href="/src/Layouts/home.html">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="/src/Layouts/nosotros.html">Nosotras</a></li>
                </ul>
                <p> 2024 Creado por </p>
            </footer>
        </div>
    );
};

export default Us;
