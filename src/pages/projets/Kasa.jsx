import React from 'react'
import '../../style/style.css'
import kasa from './images/kasa1.png'
import kasa2 from './images/kasa2.png'
import kasa3 from './images/kasa3.png'
import arrow from '../website/OhMyFood/icons/arrow-left-solid.svg'
function Kasa() {
    return (
        <div className='projets_page'>
            <div className='projets_page_nav'>
                <div></div>
                <a href='/'>Retour</a>
                <div className='projets_page_nav_components'>
                    <a href='/portfolio/#/piiquante'>Piiquante</a>
                    <img src={arrow} alt='fleche' className='projets_page_arrow_reverse' />
                </div>
            </div>
            <h1 className='main_title'>Kasa</h1>
            <div className='projets_page_date'>
                <h2>Date</h2>
                <p>Juin - Juillet 2023</p>
            </div>
            <p className='projets_page_text'>Le but de ce projet était de créer une application React à partir d'un figma et d'un fichier json contenant les logements et ses informations. Dans ce projet il y avait plusieurs composants fonctionnel : un Carrousel,des menus déroulant configurable et un système de notation par étoile</p>
            <div className='projets_page_webpage'>
                <div className="projets_page_webpage_images_bloc">
                    <img src={kasa} alt='kasa' className='projets_page_webpage_images'/>
                    <img src={kasa2} alt='kasa' className='projets_page_webpage_images'/>
                    <img src={kasa3} alt='kasa' className='projets_page_webpage_images'/> 
                </div>    
            </div>
            <div className='projets_page_nav'>
                <div></div>
                <a href='/'>Retour</a>
                <div className='projets_page_nav_components'>
                    <a href='/portfolio/#/piiquante'>Piiquante</a>
                    <img src={arrow} alt='fleche' className='projets_page_arrow_reverse' />
                </div>
            </div>
        </div>
    )
}

export default Kasa