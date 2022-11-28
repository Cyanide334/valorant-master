import React, { useState, useEffect, useRef } from 'react';

import '../styles/home_styles.css';

import Deck from './Deck.js';

function Point(props) {
    return (
        <div className="point">
            <div className="point_head">
                <img src={props.icon} alt="" />
            </div>
            <div className="point_body">
                <div className="point_name" style={{fontFamily: "VALORANT"}}>{props.name}</div>
                <div className="point_description">{props.description}</div>
            </div>
        </div>
    )
}

function Package(props) {
    return (
        <div className="package" style={{ backgroundColor: props.color}}>
            <img src={props.image} alt="" className="package_image" />

            <div className="package_information d-flex align-content-between flex-wrap ">
                <div className="package_head " >
                    <div className="package_name" style={{fontFamily: "VALORANT"}}>{props.name}</div>
                    <div className="package_description">{props.description}</div>
                    <div className="package_description">{`${props.price}`} Rs. / rank</div>

                </div>
                <div className="package_body d-flex flex-column justify-content-end" style={{fontFamily: "VALORANT"}}>
                    <div className="package_purchase">
                        <a href="https://localhost" target="_blank" rel="noreferrer"  style={{fontFamily: "VALORANT"}}>Call Now!</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

function Home() {
    const [loaded, setLoaded] = useState(false);
    const [gallery, setGallery] = useState(0);
    const galleryRef = useRef(null);

    useEffect(() => {
        setGallery(galleryRef);
        setLoaded(true);
    }, []);

    return (
        <div style={{position: "absolute"}}>
            <div className="section1">
                <div className="container dark-overlay">
                    {/*<img src={process.env.PUBLIC_URL + "/images/reyna.png"} alt="" className="splash_image" />*/}
                    <img src={process.env.PUBLIC_URL + "/images/val-logo.png"} alt="" className="splash_logo" />
                    <h1 className="splash_image">
                        RENT AND BOOST
                    </h1>

                </div>
                <div ref={galleryRef} className="gallery">
                    {
                        loaded ?
                        <Deck gallery={gallery} /> : null
                    }
                </div>
            </div>
            <div className="section2 d-flex flex-column">
                <div className="container_header flex-row mb-5">
                Accounts
                </div>
                <div className="marketing_points_container flex-row">

                    <Point
                        icon={process.env.PUBLIC_URL + "/images/icons/bladestorm.png"}
                        name="Bronze"
                        description="Smurf to your heart's content. Sheriff and Vandal Skin included."
                    />
                    <Point
                        icon={process.env.PUBLIC_URL + "/images/icons/empress.png"}
                        name="Gold"
                        description="Good ol' fashioned smurfing. Sheriff and Vandal Skin included."
                    />
                    <Point
                        icon={process.env.PUBLIC_URL + "/images/icons/dimensional-drift.png"}
                        name="Platinum"
                        description="Bit more fancier. Sheriff, Operator and Vandal Reaver pack included."
                    />

                    <Point
                        icon={process.env.PUBLIC_URL + "/images/icons/shock-bolt.png"}
                        name="Diamond"
                        description="Now it's getting serious. Sheriff, Operator and Vandal Reaver pack included."
                    />
                    <Point
                        icon={process.env.PUBLIC_URL + "/images/icons/turret.png"}
                        name="Immortal"
                        description="Time for the big leagues. Sheriff, Operator, Vandal Reaver pack included. Ghost, Classic and Phantom Glitchpop set included"
                    />
                     <Point
                        icon={process.env.PUBLIC_URL + "/images/icons/val-symbol.png"}
                        name="Radiant"
                        description="The best of the best. Sheriff, Operator, Vandal Reaver pack included. Ghost, Classic and Phantom Glitchpop set included. Guardian and Spectre Skin included."
                    />
                </div>
            </div>

            <div className="section3">
                <div className="accolades_container">
                    <div className="accolade" style={{fontFamily: "VALORANT"}}>
                       Boosting Services
                    </div>
                </div>
            </div>

            <div className="section4">
                <div className="packages_container">
                    <Package
                        color="#84cfd6"
                        image={process.env.PUBLIC_URL + "/images/jett.png"}
                        name="Platinum"
                        description="2 days per rank"
                        price="200"
                    />
                    <Package
                        color="#d366f4"
                        image={process.env.PUBLIC_URL + "/images/phoenix.png"}
                        name="Diamond"
                        description="2 days per rank"
                        price="500"
                    />
                    <Package
                        color="#6dc79a"
                        image={process.env.PUBLIC_URL + "/images/jett.png"}
                        name="Ascendant"
                        description="2 days to diamond, 5 days to ascendant"
                        price="1000"
                    />
                </div>
            </div>

            <div className="section5">
                <div className="contacts_container w-100">
                    <div className="contact_section w-100 d-flex flex-column justify-items-center align-items-center">
                        <div style={{fontFamily: "VALORANT"}}>
                            <i className="fas fa-phone-square-alt"></i> +923156627228
                        </div>
                        <div className="mt-5" >
                            <p  style={{fontFamily: "VALORANT"}}>Call or Whatsapp Now to book your accounts and services. GG!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
