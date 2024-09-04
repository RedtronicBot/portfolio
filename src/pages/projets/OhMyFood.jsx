import React, { useState } from 'react'
import '../../style/style.css'
import OhMyFoodPage from '../website/OhMyFood/OhMyFood'
import LaPaletteDuGout from '../website/OhMyFood/LaPaletteDuGout'
import LaNoteEnchantee from '../website/OhMyFood/LaNoteEnchantee'
import ALaFrancaise from '../website/OhMyFood/ALaFrancaise'
import LeDeliceDesSens from '../website/OhMyFood/LeDeliceDesSens'
import arrow from '../website/OhMyFood/icons/arrow-left-solid.svg'
function OhMyFood() {
    const [page,setPage] = useState('')
    const handleSetPage = (newpage)=>
    {
        setPage(newpage)
    }
    
    return (
        <div className='projets_page'>
            <div className='projets_page_nav'>
                <div className='projets_page_nav_components'>
                    <img src={arrow} alt='fleche' className='projets_page_arrow' />
                    <a href='/portfolio/#/la_panthere'>La Panthère</a>   
                </div>
                <a href='/'>Retour</a>
                <div className='projets_page_nav_components'>
                    <a href='/portfolio/#/booki'>Booki</a>
                    <img src={arrow} alt='fleche' className='projets_page_arrow_reverse' />
                </div>
            </div>
            <h1 className='main_title'>OhMyFood</h1>
            <div className='projets_page_date'>
                <h2>Date</h2>
                <p>Novembre - Décembre 2022</p>
            </div>
            <p className='projets_page_text'>Application regroupant des cartes de plusieurs restaurants, ma missions à été de faire des animations CSS et faire un site "mobile-first" donc optimisé pour la navigation téléphone puis l'adapter pour écran plus grand</p>
            <div className='projets_page_webpage'>
            {
                page === '' ? (
                    <OhMyFoodPage onSetPage={handleSetPage} />
                ) : page === 'LaPaletteDuGout' ? (
                    <LaPaletteDuGout onSetPage={handleSetPage} />
                ) : page === 'LaNoteEnchantee' ? (
                    <LaNoteEnchantee onSetPage={handleSetPage} /> 
                ) : page === 'ALaFrancaise' ? (
                    <ALaFrancaise onSetPage={handleSetPage} />
                ) :  (
                    <LeDeliceDesSens onSetPage={handleSetPage} />
                )
            }
            </div>
            <div className='projets_page_nav'>
                <div className='projets_page_nav_components'>
                    <img src={arrow} alt='fleche' className='projets_page_arrow' />
                    <a href='/portfolio/#/la_panthere'>La Panthère</a>   
                </div>
                <a href='/'>Retour</a>
                <div className='projets_page_nav_components'>
                    <a href='/portfolio/#/booki'>Booki</a>
                    <img src={arrow} alt='fleche' className='projets_page_arrow_reverse' />
                </div>
            </div>
        </div>
    )
}

export default OhMyFood