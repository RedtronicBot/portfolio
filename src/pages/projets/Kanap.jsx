import React from 'react'
import '../../style/style.css'
import kanap from './images/kanap1.png'
import kanap2 from './images/kanap2.png'
import kanap3 from './images/kanap3.png'
import arrow from '../website/OhMyFood/icons/arrow-left-solid.svg'
function Kanap() {
    return (
        <div className='projets_page'>
            <div className='projets_page_nav'>
                <div className='projets_page_nav_components'>
                    <img src={arrow} alt='fleche' className='projets_page_arrow' />
                    <a href='/portfolio/#/piiquante'>Piiquante</a>  
                </div>
                <a href='/portfolio'>Retour</a>
                <div className='projets_page_nav_components'>
                    <a href='/portfolio/#/la_panthere'>La Panthère</a>
                    <img src={arrow} alt='fleche' className='projets_page_arrow_reverse' />
                </div>
            </div>
            <h1 className='main_title'>Kanap</h1>
            <div className='projets_page_date'>
                <h2>Date</h2>
                <p>Février - Avril 2023</p>
            </div>
            <p className='projets_page_text'>L'idée de ce projet était d'ajouter des fonctionnalité à un site de magasin en ligne de vente de canapé. Il fallait donc : afficher la liste des canapé,avoir une présentation détaillé lors du choix de celui-ci,pouvoir l'ajouter au panier,modifier le panier,le supprimer du panier et enfin une vérification de la saisie lors de la commande</p>
            <div className='projets_page_webpage'>
                <div className="projets_page_webpage_images_bloc">
                    <img src={kanap} alt='kanap' className='projets_page_webpage_images'/>
                    <img src={kanap2} alt='kanap' className='projets_page_webpage_images'/>
                    <img src={kanap3} alt='kanap' className='projets_page_webpage_images'/> 
                </div>    
            </div>
            <div className='projets_page_nav'>
                <div className='projets_page_nav_components'>
                    <img src={arrow} alt='fleche' className='projets_page_arrow' />
                    <a href='/portfolio/#/piiquante'>Piiquante</a>  
                </div>
                <a href='/portfolio'>Retour</a>
                <div className='projets_page_nav_components'>
                    <a href='/portfolio/#/la_panthere'>La Panthère</a>
                    <img src={arrow} alt='fleche' className='projets_page_arrow_reverse' />
                </div>
            </div>
        </div>
    )
}

export default Kanap