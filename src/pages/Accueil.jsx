import React, { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import '../style/style.css'
import dot from '../images/dot_colorful.png'
import portrait from '../images/portrait.png'
import chevron from '../images/chevron.svg'
import bars_solid from '../images/bars-solid.svg'
/*Images Projets*/
import Kasa from '../images/projets/Kasa.png'
import Piiquante from '../images/projets/Piiquante.png'
import Kanap from '../images/projets/Kanap.png'
import La_Panthere from '../images/projets/La_Panthere.png'
import OhMyFood from '../images/projets/OhMyFood.png'
import Booki from '../images/projets/Booki.png'
import Universeva from '../images/projets/Universeva.png'
import Betwise from '../images/projets/Betwise.png'
/*Icone Contact */
import phone from '../images/phone.svg'
import mail_icon from '../images/mail.svg'
function Accueil() {

    const carouselRef = useRef(null)
    const itemsRef = useRef(0)
    const burgerRef = useRef(null)
    const [index,setIndex] = useState(0)
    const [nom,setNom] = useState('')
    const [mail,setMail] = useState('')
    const [message,setMessage] = useState('')
    const [open,setOpen] = useState('')
    /*Code Carousel */
    carouselRef.current = document.querySelector('.cv_carousel')
    itemsRef.current = document.querySelectorAll('.cv_descriptif')
    const prevContent = () => {
        const positionInfo = carouselRef.current.getBoundingClientRect()
        const newIndex = index === 0 ? itemsRef.current.length - 1 : index - 1
        carouselRef.current.style.transform = `translateX(-${newIndex * positionInfo.width}px)`
        setIndex(newIndex) 
    }
    const afterContent = () => {
        const positionInfo = carouselRef.current.getBoundingClientRect()
        const newIndex = index === itemsRef.current.length - 1 ? 0 : index + 1
        carouselRef.current.style.transform = `translateX(-${newIndex * positionInfo.width}px)`
        setIndex(newIndex) 
    }
    /*Envoi mail(EmailJs) via formulaire */
    const sendEmail = (e) => {
        e.preventDefault()
        
        const templateParams = {
            from_name:nom,
            from_email:mail,
            message:message
        }
        emailjs.send("service_xaujdyd", "template_gj2tobk", templateParams, "S5RBqBjYE0vWKIpO4")
        .then((response) => {
                console.log('Email envoyé', response)
                setNom('')
                setMail('')
                setMessage('')
            },
            (error) => {
                console.log('Erreur:', error.text)
            },
        )
    }
    
    useEffect(()=>{
        /*Menu burger version mobile */
        burgerRef.current = document.querySelector('.nav_burger_content')
        open ? burgerRef.current.style.transform = `scaleY(1)`:burgerRef.current.style.transform = `scaleY(0)`
    },[open])

    /*Smooth scrolling */
    const Scroll = (link)=>{
        const div_link = document.getElementById(link)

        if (div_link) 
        {
            const offset = 90
            const rect = div_link.getBoundingClientRect();
            const scrollTop = document.documentElement.scrollTop;

            window.scroll({
                top: rect.top + scrollTop - offset,
                behavior: 'smooth'
            })
        }
    }
    return (
        <div>
            <div className="nav">
                <div className="nav_burger">
                    <img src={bars_solid} alt='burger' onClick={()=> setOpen(!open)} />
                    <div className="nav_burger_content">
                    <p className='nav_lien' onClick={()=>Scroll('about_me')}>à propos de moi</p>
                    <p className='nav_lien' onClick={()=>Scroll('cv')}>cv</p>
                    <p className='nav_lien' onClick={()=>Scroll('projets')}>projets</p>
                    <p className='nav_lien' onClick={()=>Scroll('contact')}>contact</p>
                    </div>
                </div>
                <div className="nav_description">
                    <h2>Théo Desurvire</h2>
                    <p>/ Développeur Web</p>
                </div>
                <div className="nav_components">
                <p className='nav_lien' onClick={()=>Scroll('about_me')}>à propos de moi</p>
                <p className='nav_lien' onClick={()=>Scroll('cv')}>cv</p>
                <p className='nav_lien' onClick={()=>Scroll('projets')}>projets</p>
                <p className='nav_lien' onClick={()=>Scroll('contact')}>contact</p>  
                </div>
            </div>
            <div className="about_me" id='about_me'>
                <img src={dot} alt='' />
                <img src={portrait} alt='' width='581' height='600' />
                <div className="about_me_presentation">
                    <h1 className="about_me_presentation_title">Bienvenue !</h1>
                    <div className="about_me_presentation_paragraph">
                        <p>Je suis Théo Desurvire,<span>Développeur Intégrateur Web</span>diplômé Openclassrooms. Dans ce  portfolio, vous pourrez découvrir les projets menés lors de ma formation ainsi que mes projets personnels.</p>
                    </div>
                    <div className="about_me_presentation_bouton">
                        <p className="bouton_primary" onClick={()=>Scroll('cv')}>CV</p>
                        <p className="bouton_secondary" onClick={()=>Scroll('projets')}>Projets</p>
                        <p className="bouton_primary" onClick={()=>Scroll('contact')}>Contact</p>
                    </div>
                </div>    
            </div>
            <div className="cv" id='cv'>
                <h1 className='main_title'>CV</h1>
                <div className="puce"><div></div><p>Formation</p></div>
                <div className="cv_bloc_carousel">
                    <div onClick={()=>prevContent()}><img src={chevron} alt='chevron' height={48} className='cv_chevron' /></div>
                    <div className="cv_formation">
                        <div className="cv_carousel" ref={carouselRef}>
                            <div className="cv_descriptif">
                                <div className="cv_descriptif_points">
                                    <h2 className='cv_descriptif_points_date'>2022-2023</h2>
                                    <p className='cv_descriptif_points_diplome'>Diplôme développeur intégrateur web</p>
                                    <p className='cv_descriptif_points_ecole'>Openclassrooms</p>
                                </div>
                                <div className="cv_descriptif_resume">
                                    <p>Formation  de niveau Bac + 2, sous forme de projets d'entreprise avec scénario, je  devais rendre une soutenance pour présenter mon travail fourni.
                                        <br/>Les projets sont:
                                        <br/>-Kasa: Location de logement, React.js, Node.js
                                        <br/>-Piiquante: Vente de sauce piquante(back-end), Node.js, MongoDB
                                        <br/>-Kanap: Vente de mobilier, HTML, CSS, JS
                                        <br/>-La Panthere: Optimisation du site d’une agence de Web Design, HTML, CSS
                                        <br/>-OhMyFood: Landing page de plusieurs restaurants,HTML,CSS
                                        <br/>-Booki: Site d’hébergements, HTML, CSS
                                    </p>
                                </div>
                            </div> 
                            <div className="cv_descriptif">
                                <div className="cv_descriptif_points">
                                    <h2 className='cv_descriptif_points_date'>2020-2022</h2>
                                    <p className='cv_descriptif_points_diplome'>Licence PCST(Non validé)</p>
                                    <p className='cv_descriptif_points_ecole'>Faculté de Neuville sur oise</p>
                                </div>
                                <div className="cv_descriptif_resume">
                                    <p>
                                        Ayant eu grand intérêt pour la physique-chimie, je me suis tourné vers une licence PCST (Physique-Chimie Science de la Terre)
                                        <br/>mais  ne voyant pas continuer dans ce domaine, je me suis tourné vers ce qui  était au départ un simple hobby : le développement web
                                    </p>
                                </div>
                            </div>
                            <div className="cv_descriptif">
                                <div className="cv_descriptif_points">
                                    <h2 className='cv_descriptif_points_date'>2019-2020</h2>
                                    <p className='cv_descriptif_points_diplome'>Bac Général Scientifique</p>
                                    <p className='cv_descriptif_points_ecole'>Lycée Saint-Exupéry de Mantes-la-jolie</p>
                                </div>
                                <div className="cv_descriptif_resume">
                                    <p>Lors de ma Terminale, j'ai pu choisir l'option ISN (Informatique et Sciences du Numérique) dans  l'idée de devenir développeur. J'y ai appris les fondements de l'HTML  et du CSS mais surtout du Python. N'ayant pas l'idée du domaine voulu et  peu conquis par cette matière, j'ai décidé de me concentrer vers les  sciences.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div onClick={()=>afterContent()}><img src={chevron} alt='chevron' height={48} /></div>
                </div>
                <div className="cv_capacite">
                    <div className="cv_capacite_components">
                        <div className="puce_nogap"><div></div><p>Compétences</p></div>
                        <div className="cv_capacite_content_box">
                            <div className="cv_capacite_content">
                                <p><span className='puce_caree'></span>React.js</p>
                                <p><span className='puce_caree'></span>Javascript</p>
                            </div>
                            <div className="cv_capacite_content">
                                <p><span className='puce_caree'></span>Node.js</p>
                                <p><span className='puce_caree'></span>HTML/CSS</p>
                            </div>
                        </div>
                    </div>
                    <div className='cv_capacite_separation'></div>
                    <div className="cv_capacite_components">
                        <div className="puce_nogap"><div></div><p>Atouts</p></div>
                        <div className="cv_capacite_content_box">
                            <div className="cv_capacite_content">
                                <p><span className='puce_caree'></span>Curieux</p>
                                <p><span className='puce_caree'></span>Sérieux</p>
                            </div>
                            <div className="cv_capacite_content">
                                <p><span className='puce_caree'></span>Motivé</p>
                                <p><span className='puce_caree'></span>Persévérant</p>
                            </div>
                        </div>
                    </div>
                    <div className='cv_capacite_separation'></div>
                    <div className="cv_capacite_components">
                        <div className="puce_nogap"><div></div><p>Langues</p></div>
                        <div className="cv_capacite_content_box">
                            <div className="cv_capacite_content no_center">
                                <p><span className='puce_caree'></span>Français</p>
                            </div>
                            <div className="cv_capacite_content no_center">
                                <p><span className='puce_caree'></span>Anglais(B2)</p>
                            </div>
                        </div>
                    </div>
                    <div className='cv_capacite_separation'></div>
                    <div className="cv_capacite_components">
                        <div className="puce_nogap"><div></div><p>Centre d'Intérêt</p></div>
                        <p className="cv_capacite_components_interet">La programmation, l’électronique, la musique, le bricolage, les mangas, les jeux vidéos</p>
                    </div>
                </div>
                <div className="cv_recommendation">
                    <div className="puce_nogap"><div></div><p>Recommandation</p></div>
                    <p className="cv_recommendation_texte">“J'ai eu l'occasion de mentorer Théo dans le développement d'applications Web, et j'ai pu constater de près son sérieux et son autonomie. Théo a su faire face aux difficultés qu’il a rencontrées avec une implication continue pour atteindre les objectifs, Ce sera avec plaisir que je collaborai avec lui dans l'avenir et je le recommande fortement car il a le potentiel et le profil nécessaire pour réussir dans le domaine du développement.”</p>
                    <p className="cv_recommendation_auteur">Reda Chennoufi Ingénieur Génie Logiciel</p>   
                </div>
            </div>
            <div className="projets" id='projets'>
                <h1 className='main_title'>Projets</h1>
                <div className="projets_components">
                    <div className="puce_nogap"><div></div><p>Projets de Formation</p></div>
                    <div className="projets_subcomponents">
                        <a href='/portfolio/#/kasa'>
                            <div className="projets_content">
                                <div className="projets_content_text">
                                    <div className='projets_content_text_main'>
                                        <p className="projets_content_text_main_name">Kasa</p>
                                        <p>React.js</p>
                                    </div>
                                    <p className="projets_content_text_description">Développement front-end d'une plateforme web de location d'appartements en React.js</p>
                                </div>
                                <img src={Kasa} alt='Kasa' />
                            </div>
                        </a>
                        <a href='/portfolio/#/piiquante'>
                            <div className="projets_content">
                                <div className="projets_content_text">
                                    <div className='projets_content_text_main'>
                                        <p className="projets_content_text_main_name">Piiquante</p>
                                        <p>Node.js, MongoDB</p>
                                    </div>
                                    <p className="projets_content_text_description">Développement du back-end d'une plateforme de vente de sauce piquante</p>
                                </div>
                                <img src={Piiquante} alt='Piiquante' />    
                            </div>
                        </a>
                        <a href='/portfolio/#/kanap'>
                            <div className="projets_content">
                                <div className="projets_content_text">
                                    <div className='projets_content_text_main'>
                                        <p className="projets_content_text_main_name">Kanap</p>
                                        <p>HTML, CSS, Javascript</p>
                                    </div>
                                    <p className="projets_content_text_description">Développement du front-end d'une plateforme de vente de canapé</p>
                                </div>
                                <img src={Kanap} alt='Kanap' />
                            </div>
                        </a>
                        <a href='/portfolio/#/la_panthere'>
                            <div className="projets_content">    
                                <div className="projets_content_text">
                                    <div className='projets_content_text_main'>
                                        <p className="projets_content_text_main_name">La Panthère</p>
                                        <p>HTML, CSS</p>
                                    </div>
                                    <p className="projets_content_text_description">Optimisation du référencement naturel du site web d'une entreprise de design web</p>
                                </div>
                                <img src={La_Panthere} alt='La Panthère' />    
                            </div>
                        </a>
                        <a href='/portfolio/#/ohmyfood'>
                            <div className="projets_content">    
                                <div className="projets_content_text">
                                    <div className='projets_content_text_main'>
                                        <p className="projets_content_text_main_name">OhMyFood</p>
                                        <p>HTML, CSS</p>
                                    </div>
                                    <p className="projets_content_text_description">Développement centré sur l'animation CSS d'une plateforme regroupant des cartes de restaurants</p>
                                </div>
                                <img src={OhMyFood} alt='OhMyFood' />    
                            </div>
                        </a>
                        <a href='/portfolio/#/booki'>
                            <div className="projets_content">
                                <div className="projets_content_text">
                                    <div className='projets_content_text_main'>
                                        <p className="projets_content_text_main_name">Booki</p>
                                        <p>HTML, CSS</p>
                                    </div>
                                    <p className="projets_content_text_description">Développement d'une plateforme regroupant des hébergements</p>
                                </div>
                                <img src={Booki} alt='Booki' />
                            </div>
                        </a>   
                    </div>
                </div>
                <div className="projets_components">
                    <div className="puce_nogap"><div></div><p>Projets Personnels</p></div>
                    <div className="projets_subcomponents">
                        <a href='/portfolio/#/universeva'>
                            <div className="projets_content">   
                                <div className="projets_content_text">
                                    <div className='projets_content_text_main'>
                                        <p className="projets_content_text_main_name">Universeva</p>
                                        <p>MERN Stack</p>
                                    </div>
                                    <p className="projets_content_text_description">Site additionnel à un jeu gouverné par un bot Discord, permet de suivre l'avancée dans le jeu et simplifie des fonctionnalités du jeu</p>
                                </div>
                                <img src={Universeva} alt='Universeva' />   
                            </div>
                        </a>
                        <a href='/portfolio/#/betwise'>
                            <div className="projets_content">    
                                <div className="projets_content_text">
                                    <div className='projets_content_text_main'>
                                        <p className="projets_content_text_main_name">BetWise</p>
                                        <p>MERN Stack</p>
                                    </div>
                                    <p className="projets_content_text_description">Permets le suivi de paris sportifs de manière plus visuelle</p>
                                </div>
                                <img src={Betwise} alt='Betwise' />   
                            </div>
                        </a>    
                    </div>
                </div>
            </div>
            <div className='contact' id='contact'>
                <h1 className='main_title'>Contact</h1>
                <div className="contact_moyen_contact">
                    <div className="contact_bloc">
                        <div className="contact_icone"><img src={phone} width={28} height={28} alt='phone' /></div>
                        <div className="contact_bloc_text">
                            <p className="contact_bloc_text_title">Appelez moi !</p>
                            <p>06 52 70 73 20</p>
                        </div>
                    </div>
                    <div className="contact_bloc">
                        <div className="contact_icone"><img src={mail_icon} width={28} height={28} alt='mail' /></div>
                        <div className="contact_bloc_text">
                            <p className="contact_bloc_text_title">Envoyer moi un mail !</p>
                            <a href='mailto:theo.desurvire78@gmail.com'>theo.desurvire78@gmail.com</a>
                        </div>
                    </div>
                </div>
                <p className="contact_sup_formulaire"><span className="contact_trait"></span>OU<span className="contact_trait"></span></p>
                <form onSubmit={sendEmail}>
                    <div className="contact_formulaire">
                        <div className='contact_formulaire_input'>
                            <input type='text' name='user_name' onChange={(e)=>setNom(e.target.value)}/>
                            <span>Nom</span>
                        </div>
                        <div className='contact_formulaire_input'>
                            <input type='email' name='user_email' onChange={(e)=>setMail(e.target.value)}/>
                            <span>Email</span>
                        </div>
                        <div className='contact_formulaire_input'>
                            <textarea name='message' onChange={(e)=>setMessage(e.target.value)}></textarea>
                            <span>Message</span>
                        </div>
                        <button className="bouton_primary">Envoyer le message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Accueil