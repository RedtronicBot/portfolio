import React from 'react'
import '../../style/style.css'
import piiquante from './images/piiquante1.png'
import piiquante2 from './images/piiquante2.png'
import piiquante3 from './images/piiquante3.png'
import arrow from '../website/OhMyFood/icons/arrow-left-solid.svg'
function Piiquante() {
    return (
        <div className='projets_page'>
            <div className='projets_page_nav'>
                <div className='projets_page_nav_components'>
                    <img src={arrow} alt='fleche' className='projets_page_arrow' />
                    <a href='/portfolio/#/kasa'>Kasa</a>   
                </div>
                <a href='/portfolio'>Retour</a>
                <div className='projets_page_nav_components'>
                    <a href='/portfolio/#/kanap'>Kanap</a>
                    <img src={arrow} alt='fleche' className='projets_page_arrow_reverse' />
                </div>
            </div>
            <h1 className='main_title'>Piiquante</h1>
            <div className='projets_page_date'>
                <h2>Date</h2>
                <p>Avril - Juin 2023</p>
            </div>
            <p className='projets_page_text'>Projet basé uniquement sur le back-end, ma mission à été de créer un back-end capable de se créer un compte tout en chiffrant le mot de passe,de pouvoir s'authentifier pour pouvoir accéder au contenu et enfin de pouvoir créer,modifier,de voir et de supprimer une sauce. Il est aussi possible de donner son avis sur la sauce par un système de "j'aime"</p>
            <div className='projets_page_webpage'>
                <div className="projets_page_webpage_images_bloc">
                    <img src={piiquante} alt='piiquante' className='projets_page_webpage_images'/>
                    <img src={piiquante2} alt='piiquante' className='projets_page_webpage_images'/>
                    <img src={piiquante3} alt='piiquante' className='projets_page_webpage_images'/> 
                </div>    
            </div>
            <div className='projets_page_nav'>
                <div className='projets_page_nav_components'>
                    <img src={arrow} alt='fleche' className='projets_page_arrow' />
                    <a href='/portfolio/#/kasa'>Kasa</a>   
                </div>
                <a href='/portfolio'>Retour</a>
                <div className='projets_page_nav_components'>
                    <a href='/portfolio/#/kanap'>Kanap</a>
                    <img src={arrow} alt='fleche' className='projets_page_arrow_reverse' />
                </div>
            </div>
        </div>
    )
}

export default Piiquante