import React from 'react'
import './style.css'
import logo_ohmyfood from './images/logo/ohmyfood@2x.svg'
/*Restaurant*/
import la_palette_du_gout from './images/restaurants/jay-wennington-N_Y88TWmGwA-unsplash.jpg'
import la_note_enchantee from './images/restaurants/stil-u2Lp8tXIcjw-unsplash.jpg'
import a_la_francaise from './images/restaurants/toa-heftiba-DQKerTsQwi0-unsplash.jpg'
import le_delice_des_sens from './images/restaurants/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg'
/*Icones*/
import circle_notch from '../OhMyFood/icons/circle-notch-solid.svg'
import utensils from '../OhMyFood/icons/utensils-solid.svg'
import handshake from '../OhMyFood/icons/handshake-solid.svg'
import location_dot from '../OhMyFood/icons/location-dot-solid.svg'
import mobile from '../OhMyFood/icons/mobile-screen-button-solid.svg'
import list from '../OhMyFood/icons/list-solid.svg'
import store from '../OhMyFood/icons/store-solid.svg'
function OhMyFood({onSetPage}) {
    const handlePage = (newpage) =>
    {
        onSetPage(newpage)
    }
    return (
        <div className='ohmyfood'>
            <div className="loading_spinner"><img src={circle_notch} className='loading_spinner__cercle' alt='chargement' /></div>
            <header className="header_logo">
                <img src={logo_ohmyfood} width="165" height="30"  alt="image_logo" className="header_logo__image" />   
            </header>
            <main>
                <div className="section_explication_principe">
                    <div className="article_emplacement_restaurant">
                        <img src={location_dot} className='location_dot' alt='location' />
                        <p className="article_emplacement_restaurant__paragraphe">Paris,Belleville</p>
                    </div>
                    <article className="article_decouverte_restaurant">
                        <h2 className="article_decouverte_restaurant__titre">Réserver le menu qui vous convient</h2>
                        <p className="article_decouverte_restaurant__paragraphe">Découvrer des restaurants d'exception,sélectionnés par nos soins</p>
                        <a href="#restaurants" className="bouton"><p className="bouton__paragraphe">Explorer nos restaurants</p></a>
                    </article>
                    <article className="article_fonctionnement_restaurant">
                        <h2>Fonctionnement</h2>
                        <ul className="article_fonctionnement_restaurant__liste">
                            <li><div className="bouton_fonctionnement_restaurant"><p className="bouton_fonctionnement_restaurant__ordre">1</p><img src={mobile} className='logo_hover' alt='mobile' /><p>Choisissez un restaurant</p></div></li>
                            <li><div className="bouton_fonctionnement_restaurant"><p className="bouton_fonctionnement_restaurant__ordre">2</p><img src={list} className='logo_hover' alt='list' /><p>Composez votre menu</p></div></li>
                            <li><div className="bouton_fonctionnement_restaurant"><p className="bouton_fonctionnement_restaurant__ordre">3</p><img src={store} className='logo_hover' alt='store' /><p>Dégustez au restaurant</p></div></li>
                        </ul>
                    </article>
                </div>
                <section id="restaurants">
                    <h2 className="titre_restaurant">Restaurants</h2>
                    <div className="carte_partie">   
                        <div onClick={()=>handlePage('LaPaletteDuGout')} className="carte_restaurant nouveau">
                            <img src={la_palette_du_gout} alt="image_laPaletteDuGout" className="carte_restaurant__image" />
                            <div className="carte_restaurant__conteneur">
                                <div>
                                    <h3>La palette du goût</h3>
                                    <p>Ménilmontant</p>
                                </div>
                                <div className="heart_container">
                                    <svg width="32" height="32" viewBox="0 0 512 512" className='heart_stroke'>
                                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                                    </svg>
                                    <svg width="32" height="32" viewBox="0 0 512 512" className="heart_full">
                                        <defs>
                                            <linearGradient id="MyGradient" x2="50%" y2="0%" x1="50%" y1="100%">
                                                <stop offset="30%" stopColor="#E972DA" />
                                                <stop offset="100%" stopColor="#9356DC" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" fill="url(#MyGradient)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div onClick={()=>handlePage('LaNoteEnchantee')} className="carte_restaurant nouveau">
                            <img src={la_note_enchantee} alt="image_laNoteEnchantee" className="carte_restaurant__image" />
                            <div className="carte_restaurant__conteneur">
                                <div>
                                    <h3>La note enchantée</h3>
                                    <p>Charonne</p>
                                </div>
                                <div className="heart_container">
                                    <svg width="32" height="32" viewBox="0 0 512 512" className='heart_stroke'>
                                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                                    </svg>
                                    <svg width="32" height="32" viewBox="0 0 512 512" className="heart_full">
                                        <defs>
                                            <linearGradient id="MyGradient" x2="50%" y2="0%" x1="50%" y1="100%">
                                                <stop offset="30%" stopColor="#E972DA" />
                                                <stop offset="100%" stopColor="#9356DC" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" fill="url(#MyGradient)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carte_partie">
                        <div onClick={()=>handlePage('ALaFrancaise')} className="carte_restaurant">
                            <img src={a_la_francaise} alt="image_aLaFrancaise" className="carte_restaurant__image" />
                            <div className="carte_restaurant__conteneur">
                                <div>
                                    <h3>À la française</h3>
                                    <p>Cité Rouge</p>
                                </div>
                                <div className="heart_container">
                                    <svg width="32" height="32" viewBox="0 0 512 512" className='heart_stroke'>
                                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                                    </svg>
                                    <svg width="32" height="32" viewBox="0 0 512 512" className="heart_full">
                                        <defs>
                                            <linearGradient id="MyGradient" x2="50%" y2="0%" x1="50%" y1="100%">
                                                <stop offset="30%" stopColor="#E972DA" />
                                                <stop offset="100%" stopColor="#9356DC" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" fill="url(#MyGradient)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div onClick={()=>handlePage('LeDeliceDesSens')} className="carte_restaurant">
                            <img src={le_delice_des_sens} alt="image_leDeliceDesSens" className="carte_restaurant__image" />
                            <div className="carte_restaurant__conteneur">
                                <div>
                                    <h3>Le délice des sens</h3>
                                    <p>Folie-Méricourt</p>
                                </div>
                                <div className="heart_container">
                                    <svg width="32" height="32" viewBox="0 0 512 512" className='heart_stroke'>
                                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                                    </svg>
                                    <svg width="32" height="32" viewBox="0 0 512 512" className="heart_full">
                                        <defs>
                                            <linearGradient id="MyGradient" x2="50%" y2="0%" x1="50%" y1="100%">
                                                <stop offset="30%" stopColor="#E972DA" />
                                                <stop offset="100%" stopColor="#9356DC" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" fill="url(#MyGradient)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="footer_ohmyfood">
                <article className="article_footer">
                    <h3 className="article_footer__titre">ohmyfood</h3>
                    <ul className="article_footer__liste">
                        <li><a href="/ohmyfood" className="article_footer__lien"><img src={utensils} alt="ustensile" className="article_footer__logo" /><p>Proposer un restaurant</p></a></li>
                        <li><a href="/ohmyfood" className="article_footer__lien"><img src={handshake} alt="handshake" className="article_footer__logo" /><p>Devenir partenaire</p></a></li>
                        <li><a href="/ohmyfood" className="article_footer__lien"><p>Mentions légales</p></a></li>
                        <li><a href="/ohmyfood" className="article_footer__lien"><p>Contact</p></a></li>
                    </ul>
                </article>
            </footer>
        </div>
    )
}

export default OhMyFood