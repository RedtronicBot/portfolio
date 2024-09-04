import React from 'react'
import '../../style/style.css'
import la_panthere from './images/la_panthere1.png'
import la_panthere2 from './images/la_panthere2.png'
import la_panthere3 from './images/la_panthere3.png'
import arrow from '../website/OhMyFood/icons/arrow-left-solid.svg'
function LaPanthere() {
    return (
        <div className='projets_page'>
            <div className='projets_page_nav'>
                <div className='projets_page_nav_components'>
                    <img src={arrow} alt='fleche' className='projets_page_arrow' />
                    <a href='/#/kanap'>Kanap</a>   
                </div>
                <a href='/'>Retour</a>
                <div className='projets_page_nav_components'>
                    <a href='/#/ohmyfood'>OhMyFood</a>
                    <img src={arrow} alt='fleche' className='projets_page_arrow_reverse' />
                </div>
            </div>
            <h1 className='main_title'>La Panthère</h1>
            <div className='projets_page_date'>
                <h2>Date</h2>
                <p>Décembre - Avril 2023</p>
            </div>
            <p className='projets_page_text'>L'optimisation SEO était ma mission sur ce projet. En effet le site d'une agence de web design avait des problèmes d'accessibilité,de performance et de SEO ce qui faisait descendre le site lors de recherches d'agence de web design</p>
            <div className='projets_page_webpage'>
                <div className="projets_page_webpage_images_bloc">
                    <img src={la_panthere} alt='la_panthere' className='projets_page_webpage_images'/>
                    <img src={la_panthere2} alt='la_panthere' className='projets_page_webpage_images no_ratio'/>
                    <img src={la_panthere3} alt='la_panthere' className='projets_page_webpage_images no_ratio'/> 
                </div>    
            </div>
            <div className='projets_page_nav'>
                <div className='projets_page_nav_components'>
                    <img src={arrow} alt='fleche' className='projets_page_arrow' />
                    <a href='/#/kanap'>Kanap</a>   
                </div>
                <a href='/'>Retour</a>
                <div className='projets_page_nav_components'>
                    <a href='/#/ohmyfood'>OhMyFood</a>
                    <img src={arrow} alt='fleche' className='projets_page_arrow_reverse' />
                </div>
            </div>
        </div>
    )
}

export default LaPanthere