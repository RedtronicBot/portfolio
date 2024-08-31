import React from 'react'
import '../../style/style.css'
import betwise from './images/betwise.png'
import betwise2 from './images/betwise2.png'
import betwise3 from './images/betwise3.png'
import arrow from '../website/OhMyFood/icons/arrow-left-solid.svg'
function BetWise() {
    return (
        <div className='projets_page'>
            <div className='projets_page_nav'>
                <div className='projets_page_nav_components'>
                    <img src={arrow} alt='fleche' className='projets_page_arrow' />
                    <a href='/universeva'>Universeva</a> 
                </div>
                <a href='/'>Retour</a>
                <div></div>
            </div>
            <h1 className='main_title'>BetWise</h1>
            <div className='projets_page_date'>
                <h2>Date</h2>
                <p>Avril-Mai 2024</p>
            </div>
            <p className='projets_page_text'>Projet de suivi de pari sportifs, il est possible d'y entrer des paris simples et des paris combinés afin de suivre les pertes/gain sur tout les paris enregistrés.</p>
            <div className='projets_page_webpage'>
                <div className="projets_page_webpage_images_bloc">
                    <img src={betwise} alt='betwise' className='projets_page_webpage_images'/>
                    <img src={betwise2} alt='betwise' className='projets_page_webpage_images'/>
                    <img src={betwise3} alt='betwise' className='projets_page_webpage_images'/> 
                </div>  
            </div>
            <div className='projets_page_nav'>
                <div className='projets_page_nav_components'>
                    <img src={arrow} alt='fleche' className='projets_page_arrow' />
                    <a href='/universeva'>Universeva</a>   
                </div>
                <a href='/'>Retour</a>
                <div></div>
            </div>
        </div>
    )
}

export default BetWise