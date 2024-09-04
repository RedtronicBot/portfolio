import React from 'react'
import '../../style/style.css'
import BookiPage from '../website/Booki/Booki'
import arrow from '../website/OhMyFood/icons/arrow-left-solid.svg'
function Booki() {
    return (
        <div className='projets_page'>
            <div className='projets_page_nav'>
                <div className='projets_page_nav_components'>
                    <img src={arrow} alt='fleche' className='projets_page_arrow' />
                    <a href='/#/ohmyfood'>OhMyFood</a> 
                </div>
                <a href='/'>Retour</a>
                <div className='projets_page_nav_components'>
                    <a href='/#/universeva'>Universeva</a>
                    <img src={arrow} alt='fleche' className='projets_page_arrow_reverse' />
                </div>
            </div>
            <h1 className='main_title'>Booki</h1>
            <div className='projets_page_date'>
                <h2>Date</h2>
                <p>Septembre-Novembre 2022</p>
            </div>
            <p className='projets_page_text'>
                Ce projet avait pour but de comprendre comment agencer, espacer et surtout comment adapter des blocs selon la taille de l'écran.
                J'ai donc appris à faire un code propre en HTML et manipuler le CSS de manière responsive pour l'utilisateur.
            </p>
            <div className='projets_page_webpage'>
                <BookiPage/>
            </div>
            <div className='projets_page_nav'>
                <div className='projets_page_nav_components'>
                    <img src={arrow} alt='fleche' className='projets_page_arrow' />
                    <a href='/#/ohmyfood'>OhMyFood</a>   
                </div>
                <a href='/'>Retour</a>
                <div className='projets_page_nav_components'>
                    <a href='/#/universeva'>Universeva</a>
                    <img src={arrow} alt='fleche' className='projets_page_arrow_reverse' />
                </div>
            </div>
        </div>
    )
}

export default Booki