import React from 'react'
import './style.css'
import heart from './icons/heart-solid.svg'
import money from './icons/money-bill-wave-solid.svg'
import dog from './icons/dog-solid.svg'
import person from './icons/person-solid.svg'
import info from './icons/info-solid.svg'
import location_dot from './icons/location-dot-solid.svg'
import star from './icons/star-solid.svg'
import chart from './icons/chart-line-solid.svg'
import magnifying_glass from './icons/magnifying-glass-solid.svg'
/*Logo*/
import logo_booki from './Images/Booki.png'
/*hebergement*/
import la_canebiere from './Images/hebergements/marcus-loke-WQJvWU_HZFo-unsplash.jpg'
import hotel_du_port from './Images/hebergements/fred-kleber-gTbaxaVLvsg-unsplash.jpg'
import hotel_les_mouettes from './Images/hebergements/reisetopia-B8WIgxA_PFU-unsplash.jpg'
import hotel_de_la_mouette from './Images/hebergements/annie-spratt-Eg1qcIitAuA-unsplash.jpg'
import auberge_le_panier from './Images/hebergements/nicate-lee-kT-ZyaiwBe0-unsplash.jpg'
import hotel_chez_amina from './Images/hebergements/febrian-zakaria-M6S1WvfW68A-unsplash.jpg'
/*Populaire*/
import hotel_soleil_matin from './Images/hebergements/emile-guillemot-Bj_rcSC5XfE-unsplash.jpg'
import chambre_hote from './Images/hebergements/aw-creative-VGs8z60yT2c-unsplash.jpg'
import hotel_bleu_blanc from './Images/hebergements/febrian-zakaria-sjvU0THccQA-unsplash.jpg'
/*Activités*/
import vieux_port from './Images/activites/reno-laithienne-QUgJhdY5Fyk-unsplash.jpg'
import fort_pomeques from './Images/activites/paul-hermann-QFTrLdQIRhI-unsplash.jpg'
import parc_calanques from './Images/activites/kilyan-sockalingum-NR8-cBCN3aI-unsplash.jpg'
import notre_dame from './Images/activites/florian-wehde-xW9e8gdotxI-unsplash.jpg'
function Booki() {
  return (
    <div className='booki'>
        <header>
            <img src={logo_booki} width="61" height="19" alt="Logo Booki" className="image_booki" />
            <nav id="navigation_header">
                <ul className="navigation">
                    <li className="lien_activites"><a href="#hebergements" className="lien">Hébergements</a></li>
                    <li className="lien_activites"><a href="#activites" className="lien">Activités</a></li>
                </ul>
            </nav>
        </header>    
        <main>
            <section className="titre">
                <h1 id="texte_titre">Trouvez votre hébergement pour des vacances de rêve</h1>
                <p>En plein centre-ville ou en pleine nature</p>
            </section>    
            <form className="recherche">
                <div className='marqueur_location'><img src={location_dot} alt='location_dot'/></div>   
                <input type="text" name="ville" id="barre_recherche" placeholder="Paris,France" /> 
                <button id="bouton_recherche"><span id="texte_bouton">Rechercher</span><img src={magnifying_glass} alt='loupe_recherche' className='loupe_recherche' /></button>
            </form> 
            <div id="filtre">
                <h2 id="titre_filtre">Filtres</h2>
                <div id="bouton_1">
                    <a href="/booki" className="bouton_filtre"><img src={money} alt='money' className='image_filtre' /><h2 className="texte_filtre">Économique</h2></a>
                    <a href="/booki" className="bouton_filtre"><img src={person} alt='person' className='image_filtre' /><h2 className="texte_filtre">Familial</h2></a>
                </div>    
                <div id="bouton_2">
                    <a href="/booki" className="bouton_filtre"><img src={heart} alt='heart' className='image_filtre' /><h2 className="texte_filtre">Romantique</h2></a>
                    <a href="/booki" className="bouton_filtre"><img src={dog} alt='dog' className='image_filtre' /><h2 className="texte_filtre">Animaux autorisés</h2></a>
                </div>
            </div>
            <div id="info">
                <div className="circle_icon">
                    <img src={info} alt='info' />
                </div>
                <p> Plus de 500 logements sont disponibles dans cette ville</p>
            </div>
            <div className="vigette_hotel">
                <section id="hebergements">
                    <h2 className="titre_hebergements">Hébergements à Marseille</h2>
                    <div className="cartes_article_hebergements">

                        <div className="cartes_hebergements">
                            <img src={la_canebiere} alt="Auberge La Canebière" className="images_hebergements" />
                            <div className="container_hebergements">
                                <h3>Auberge La Canebière</h3>
                                <p>Nuit à partir de 25€</p>
                                <div className="etoile">
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_grise' />
                                </div>   
                            </div>
                        </div>

                        <div className="cartes_hebergements">
                            <img src={hotel_du_port} alt="Hôtel du port" className="images_hebergements" />
                            <div className="container_hebergements">
                                <h3>Hôtel du port</h3>
                                <p>Nuit à partir de 52€</p>
                                <div className="etoile">
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_grise' />
                                </div>   
                            </div>
                        </div>

                        <div className="cartes_hebergements">
                            <img src={hotel_les_mouettes} alt="Hôtel Les mouettes" className="images_hebergements" />
                            <div className="container_hebergements">
                                <h3>Hôtel Les mouettes</h3>
                                <p>Nuit à partir de 76€</p>
                                <div className="etoile">
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_grise' />
                                </div>  
                            </div>
                        </div>

                        <div className="cartes_hebergements">
                            <img src={hotel_de_la_mouette} alt="Hôtel de la mer" className="images_hebergements" />
                            <div className="container_hebergements">
                                <h3>Hôtel de la mer</h3>
                                <p>Nuit à partir de 46€</p>
                                <div className="etoile">
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_grise' />
                                </div>       
                            </div>
                        </div>

                        <div className="cartes_hebergements">
                            <img src={auberge_le_panier} alt="Auberge Le Panier" className="images_hebergements" />
                            <div className="container_hebergements">
                                <h3>Auberge Le Panier</h3>
                                <p>Nuit à partir de 23€</p>
                                <div className="etoile">
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_grise' />
                                </div>
                            </div>
                        </div>

                        <div className="cartes_hebergements">
                            <img src={hotel_chez_amina} alt="Hôtel Chez Amina" className="images_hebergements" />
                            <div className="container_hebergements">
                                <h3>Hôtel Chez Amina</h3>
                                <p>Nuit à partir de 96€</p>
                                <div className="etoile">
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_grise' />
                                </div>
                            </div>
                        </div> 

                    </div>
                    <a href="/booki" id="texte_afficher">Afficher plus</a>  
                </section>

                <article id="populaire">
                    <div id="titre_populaire">
                        <h2 className="titre_hebergements">Les plus populaires</h2><img src={chart} alt='graph' className='image_graph' />
                    </div>
                    <div className="cartes_article_populaire">
                        <div className="cartes_populaire">
                            <img src={hotel_soleil_matin} alt="Hôtel Le soleil du matin" className="images_populaire" />
                            <div className="container_populaire">
                                <h3>Hôtel Le soleil du matin</h3>
                                <p>Nuit à partir de 25€</p>
                                <div className="etoile">
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_grise' />
                                </div>
                            </div>
                        </div>
                        <div className="cartes_populaire">
                            <img src={chambre_hote} alt="Chambres d'hôtes Au coeur de l'eau" className="images_populaire" />
                            <div className="container_populaire">
                                <h3>Chambres d'hôtes Au coeur de l'eau</h3>
                                <p>Nuit à partir de 71€</p>
                                <div className="etoile">
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_grise' />
                                </div>
                            </div>
                        </div>
                        <div className="cartes_populaire">
                            <img src={hotel_bleu_blanc} alt="Hôtel Bleu et Blanc" className="images_populaire" />
                            <div className="container_populaire">
                                <h3>Hôtel Bleu et Blanc</h3>
                                <p>Nuit à partir de 68€</p>
                                <div className="etoile">
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_bleu' />
                                    <img src={star} alt='star' className='etoile_grise' />
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

            </div>

            <article id="activites">
                    <h2 className='activites_titre'>Activités à Marseille</h2>
                    <div className="cartes_article_activites">
                        
                        <div className="cartes_activites">
                            <img src={vieux_port} alt="Vieux-Port" className="images_activites" />
                            <div className="container_activites">
                                <h3>Vieux-Port</h3>
                            </div>
                        </div>

                        <div className="cartes_activites">
                            <img src={fort_pomeques} alt="Fort de Pomèques" className="images_activites" />
                            <div className="container_activites">
                                <h3>Fort de Pomèques</h3>
                            </div>
                        </div>

                        <div className="cartes_activites">
                            <img src={parc_calanques} alt="Parc national des Calanques" className="images_activites" />
                            <div className="container_activites">
                                <h3>Parc national des Calanques</h3>
                            </div>
                        </div>

                        <div className="cartes_activites">
                            <img src={notre_dame} alt="Notre-Dame-de-la-Garde" className="images_activites" />
                            <div className="container_activites">
                                <h3>Notre-Dame-de-la-Garde</h3>
                            </div>
                        </div>

                    </div>    
            </article>      
        </main>
        <footer>
            <div id="bloc_footer">
                <nav>
                    <h3>À propos</h3>
                    <ul className="navigation_footer">
                        <li className="texte_lien_nav"><a href="/booki" className="lien_nav">Fonctionnement du site</a></li>
                        <li className="texte_lien_nav"><a href="/booki" className="lien_nav">Conditions générales</a></li>
                        <li className="texte_lien_nav"><a href="/booki" className="lien_nav">Données et confidentialité</a></li>
                    </ul>
                </nav>
                <nav>
                    <h3>Nos hébergements</h3>
                    <ul className="navigation_footer">
                        <li className="texte_lien_nav"><a href="/booki" className="lien_nav">Charte qualité</a></li>
                        <li className="texte_lien_nav"><a href="/booki" className="lien_nav">Proposer votre hotel</a></li>
                    </ul>
                </nav>
                <nav>
                    <h3>Assistance</h3>
                    <ul className="navigation_footer">
                        <li className="texte_lien_nav"><a href="/booki" className="lien_nav">Centre d'aide</a></li>
                        <li className="texte_lien_nav"><a href="/booki" className="lien_nav">Nous contacter</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    </div>
  )
}

export default Booki