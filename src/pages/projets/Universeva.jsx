import React from 'react'
import '../../style/style.css'
import universeva from './images/universeva1.png'
import universeva2 from './images/universeva2.png'
import universeva3 from './images/universeva3.png'
import arrow from '../website/OhMyFood/icons/arrow-left-solid.svg'
function Universeva() {
    return (
        <div className='projets_page'>
            <div className='projets_page_nav'>
                <div className='projets_page_nav_components'>
                    <img src={arrow} alt='fleche' className='projets_page_arrow' />  
                    <a href='/portfolio/#/booki'>Booki</a> 
                </div>
                <a href='/'>Retour</a>
                <div className='projets_page_nav_components'>
                    <a href='/portfolio/#/betwise'>BetWise</a>
                    <img src={arrow} alt='fleche' className='projets_page_arrow_reverse' />
                </div>
            </div>
            <h1 className='main_title'>Universeva</h1>
            <div className='projets_page_date'>
                <h2>Date</h2>
                <p>Mars 2022 - Présent</p>
            </div>
            <p className='projets_page_text'>Le projet est un jeu de tirage de cartes en ligne, il est composé de deux parties: un bot discord et un site internet. Le bot discord permet un tirage aléatoire avec un taux de rareté contrôlé chaque jour,de voir le profil du joueur,d'échanger des cartes et de transformer des cartes. Le site internet permet de compléter les fonctionnalités du bot comme par exemple l'affichage des cartes obtenue, la simplification des échanges de cartes,etc</p>
            <div className='projets_page_webpage'>
                <div className="projets_page_webpage_images_bloc">
                    <img src={universeva} alt='universeva' className='projets_page_webpage_images'/>
                    <img src={universeva2} alt='universeva' className='projets_page_webpage_images'/>
                    <img src={universeva3} alt='universeva' className='projets_page_webpage_images'/> 
                </div>    
            </div>
            <div className='projets_page_nav'>
                <div className='projets_page_nav_components'>
                    <img src={arrow} alt='fleche' className='projets_page_arrow' />  
                    <a href='/portfolio/#/booki'>Booki</a> 
                </div>
                <a href='/'>Retour</a>
                <div className='projets_page_nav_components'>
                    <a href='/portfolio/#/betwise'>BetWise</a>
                    <img src={arrow} alt='fleche' className='projets_page_arrow_reverse' />
                </div>
            </div>
        </div>
    )
}

export default Universeva