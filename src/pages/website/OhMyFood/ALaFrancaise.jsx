import React from 'react'
import arrow from '../../website/OhMyFood/icons/arrow-left-solid.svg'
import logo_ohmyfood from './images/logo/ohmyfood@2x.svg'
import circle_check from '../OhMyFood/icons/circle-check-solid.svg'
import utensils from '../OhMyFood/icons/utensils-solid.svg'
import handshake from '../OhMyFood/icons/handshake-solid.svg'
import a_la_francaise from './images/restaurants/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg'
function ALaFrancaise({onSetPage}) {
    const handlePage = (newpage) =>
    {
        onSetPage(newpage)
    }
    return (
        <div>
            <header className="header_logo backheader">
                <div onClick={()=>handlePage('')} className="header_logo__retour"><img src={arrow} alt='flèche_retour' /></div>
                <img src={logo_ohmyfood} width="165" height="30"  alt="image_logo" className="header_logo__image" /> 
                <div></div>    
            </header>
            <main> 
                <img src={a_la_francaise} alt="ALaFrancaise" className="page_restaurant__image"/>    
                <div className="menu_restaurant">
                    <article className="menu_restaurant__header">
                        <h2 className="menu_restaurant__titre">À la française</h2>
                        <div className="heart_container">
                            <svg width="32" height="32" viewBox="0 0 512 512" className='heart_stroke'>
                                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                            </svg>
                            <svg width="32" height="32" viewBox="0 0 512 512" className="heart_full">
                                <defs>
                                    <linearGradient id="MyGradient" x2="50%" y2="0%" x1="50%" y1="100%">
                                        <stop offset="30%" stop-color="#E972DA" />
                                        <stop offset="100%" stop-color="#9356DC" />
                                    </linearGradient>
                                </defs>
                                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" fill="url(#MyGradient)"/>
                            </svg>
                        </div>
                    </article>
                    <section className="menu_restaurant__entree">
                        <h1 className="menu_restaurant__intitulee">ENTRÉES</h1>
                        <div className="bloc_menu_bouton">
                            <article className="menu_restaurant__bouton animation1">
                                <div className="menu_restaurant__bouton__block">
                                    <div className="menu_restaurant__bouton__plat">
                                        <div className="menu_restaurant__bouton__bloc_titre">
                                            <h3 className="menu_restaurant__bouton__titre">Tartare de poulpe acidulé</h3>
                                        </div>
                                        <div className="menu_restaurant__bouton__paragraphe">
                                            <p>Aux zestes d'orange</p>
                                        </div>
                                    </div>
                                    <p className="menu_restaurant__bouton__prix">25€</p>
                                </div>
                                <div className="menu_restaurant__bouton__check"><img src={circle_check} className='icone_check' alt='icone_check' /></div>
                            </article>
                            <article className="menu_restaurant__bouton animation2">
                                <div className="menu_restaurant__bouton__block">
                                    <div className="menu_restaurant__bouton__plat">
                                        <div className="menu_restaurant__bouton__bloc_titre">
                                            <h3 className="menu_restaurant__bouton__titre">Velouté de légumes d'antan</h3>
                                        </div>
                                        <div className="menu_restaurant__bouton__paragraphe">
                                            <p>Carotte, panais, topinambour</p>
                                        </div>
                                    </div>
                                    <p className="menu_restaurant__bouton__prix">35€</p>
                                </div>
                                <div className="menu_restaurant__bouton__check"><img src={circle_check} className='icone_check' alt='icone_check' /></div>
                            </article>
                            <article className="menu_restaurant__bouton animation3">
                                <div className="menu_restaurant__bouton__block">
                                    <div className="menu_restaurant__bouton__plat">
                                        <div className="menu_restaurant__bouton__bloc_titre">
                                            <h3 className="menu_restaurant__bouton__titre">Soupe à l'oignon</h3>
                                        </div>
                                        <div className="menu_restaurant__bouton__paragraphe">
                                            <p>Revisitée</p>
                                        </div>
                                    </div>
                                    <p className="menu_restaurant__bouton__prix">20€</p>
                                </div>
                                <div className="menu_restaurant__bouton__check"><img src={circle_check} className='icone_check' alt='icone_check' /></div>
                            </article>
                        </div>
                    </section>
                    <section className="menu_restaurant__plat">
                        <h1 className="menu_restaurant__intitulee">PLATS</h1>
                        <div className="bloc_menu_bouton">
                            <article className="menu_restaurant__bouton animation1">
                                <div className="menu_restaurant__bouton__block">
                                    <div className="menu_restaurant__bouton__plat">
                                        <div className="menu_restaurant__bouton__bloc_titre">
                                            <h3 className="menu_restaurant__bouton__titre">Coquilles Saint-Jacques</h3>
                                        </div>
                                        <div className="menu_restaurant__bouton__paragraphe">
                                            <p>Accompagnées d'une purée de panais</p>
                                        </div>
                                    </div>
                                    <p className="menu_restaurant__bouton__prix">40€</p>
                                </div>
                                <div className="menu_restaurant__bouton__check"><img src={circle_check} className='icone_check' alt='icone_check' /></div>
                            </article>
                            <article className="menu_restaurant__bouton animation2">
                                <div className="menu_restaurant__bouton__block">
                                    <div className="menu_restaurant__bouton__plat">
                                        <div className="menu_restaurant__bouton__bloc_titre">
                                            <h3 className="menu_restaurant__bouton__titre">Magret de canard</h3>
                                        </div>
                                        <div className="menu_restaurant__bouton__paragraphe">
                                            <p>Et parmentier de pommes de terre</p>
                                        </div>
                                    </div>
                                    <p className="menu_restaurant__bouton__prix">35€</p>
                                </div>
                                <div className="menu_restaurant__bouton__check"><img src={circle_check} className='icone_check' alt='icone_check' /></div>
                            </article>
                            <article className="menu_restaurant__bouton animation3">
                                <div className="menu_restaurant__bouton__block">
                                    <div className="menu_restaurant__bouton__plat">
                                        <div className="menu_restaurant__bouton__bloc_titre">
                                            <h3 className="menu_restaurant__bouton__titre">Pigeonneau d’Ille-et-Vilaine</h3>
                                        </div>
                                        <div className="menu_restaurant__bouton__paragraphe">
                                            <p>Sur son lit de gnocchis aux légumes</p>
                                        </div>
                                    </div>
                                    <p className="menu_restaurant__bouton__prix">44€</p>
                                </div>
                                <div className="menu_restaurant__bouton__check"><img src={circle_check} className='icone_check' alt='icone_check' /></div>
                            </article>
                        </div>
                    </section>
                    <section className="menu_restaurant__dessert">
                        <h1 className="menu_restaurant__intitulee">DESSERTS</h1>
                        <div className="bloc_menu_bouton">
                            <article className="menu_restaurant__bouton animation1">
                                <div className="menu_restaurant__bouton__block">
                                    <div className="menu_restaurant__bouton__plat">
                                        <div className="menu_restaurant__bouton__bloc_titre">
                                            <h3 className="menu_restaurant__bouton__titre">Pétales de violettes glacés</h3>
                                        </div>
                                        <div className="menu_restaurant__bouton__paragraphe">
                                            <p>Et purée de noisettes</p>
                                        </div>
                                    </div>
                                    <p className="menu_restaurant__bouton__prix">18€</p>
                                </div>
                                <div className="menu_restaurant__bouton__check"><img src={circle_check} className='icone_check' alt='icone_check' /></div>
                            </article>
                            <article className="menu_restaurant__bouton animation2">
                                <div className="menu_restaurant__bouton__block">
                                    <div className="menu_restaurant__bouton__plat">
                                        <div className="menu_restaurant__bouton__bloc_titre">
                                            <h3 className="menu_restaurant__bouton__titre">Fondant au chocolat</h3>
                                        </div>
                                        <div className="menu_restaurant__bouton__paragraphe">
                                            <p>Revisitée</p>
                                        </div>
                                    </div>
                                    <p className="menu_restaurant__bouton__prix">22€</p>
                                </div>
                                <div className="menu_restaurant__bouton__check"><img src={circle_check} className='icone_check' alt='icone_check' /></div>
                            </article>
                            <article className="menu_restaurant__bouton animation3">
                                <div className="menu_restaurant__bouton__block">
                                    <div className="menu_restaurant__bouton__plat">
                                        <div className="menu_restaurant__bouton__bloc_titre">
                                            <h3 className="menu_restaurant__bouton__titre">Millefeuille croustillant</h3>
                                        </div>
                                        <div className="menu_restaurant__bouton__paragraphe">
                                            <p>Myrtilles et pâte d’amande</p>
                                        </div>
                                    </div>
                                    <p className="menu_restaurant__bouton__prix">23€</p>
                                </div>
                                <div className="menu_restaurant__bouton__check"><img src={circle_check} className='icone_check' alt='icone_check' /></div>
                            </article>
                        </div>
                    </section>
                    <a href="#" className="bouton"><p className="bouton__paragraphe">Commander</p></a>
                </div>
            </main>
            <footer className="footer_ohmyfood">
                <article className="article_footer">
                    <h3 className="article_footer__titre">ohmyfood</h3>
                    <ul className="article_footer__liste">
                    <li><a href="#" className="article_footer__lien"><img src={utensils} alt="ustensile" className="article_footer__logo" /><p>Proposer un restaurant</p></a></li>
                    <li><a href="#" className="article_footer__lien"><img src={handshake} alt="handshake" className="article_footer__logo" /><p>Devenir partenaire</p></a></li>
                        <li><a href="#" className="article_footer__lien"><p>Mentions légales</p></a></li>
                        <li><a href="#" className="article_footer__lien"><p>Contact</p></a></li>
                    </ul>
                </article>
            </footer>
        </div>
    )
}

export default ALaFrancaise