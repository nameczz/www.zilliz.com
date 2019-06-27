import React, {useEffect, useState} from "react";
import { useStaticQuery, graphql } from "gatsby"
import {SectionsContainer, Section, Header as RHeader, Footer as RFooter} from 'react-fullpage';
import Header from '../blocks/Header';
import SimpleFooter from '../blocks/SimpleFooter';
import SEO from '../components/seo';
import Texture from '../components/Texture';
import CHANGEBG from '../images/changing.png';
import demandExcellencebg from '../images/demandExcellence.png';
import './culture.scss';

const EngineeringCurlture = () => {
    return (
        <section style={{backgroundColor: '#F25022'}}>
            <div className="container">
                <div className="flexbox col center-box">
                    <div className="indent selfLeft text-white">
                        <h1>Engineering Culture</h1>
                        <h2>
                            If vision is where you are going, <br />
                            culture is what makes sure you can get there.
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

const ReinventDataScience = () => {
    return (
        <section>
        <div className="container">
            <div className="flexbox center-box">
                <h2 className="indent width50">
                    ZILLIZ IS CREATED <br />
                    TO REINVENT <br />
                    DATA SCIENCE.
                </h2>
                <div className="flexbox threeCircles fullsize indent selfTop hide-if-too-small">
                <svg width="100%" height="500px" style={{"transformOrigin": "left top"}}>
                    <defs>
                        <filter id="gooey">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="gooey"></feColorMatrix>
                            <feComposite in="SourceGraphic" in2="gooey" operator="atop"></feComposite>
                        </filter>
                    </defs>
                    <circle cx="240" cy="165" r="150" style={{fill: "rgb(159, 230, 184)", "willChange": "opacity", "mixBlendMode": "multiply"}}></circle>
                    <circle cx="330" cy="330" r="150" style={{fill: "rgb(157, 150, 245)", "willChange": "opacity", "mixBlendMode": "multiply"}}></circle>
                    <circle cx="180" cy="330" r="150" style={{fill: "rgb(49, 197, 233)", "willChange": "opacity", "mixBlendMode": "multiply"}}></circle>
                    <text x="168" y="148.5" style={{"fontSize": "20px"}}>ComputerScience</text>
                    <text x="144" y="230.99999999999997" style={{"fontSize": "20px"}}>AI</text>
                    <text x="313.5" y="198" style={{"fontSize": "14px"}}>Data</text>
                    <text x="297" y="230.99999999999997" style={{"fontSize": "14px"}}>Processing</text>
                    <text x="234" y="247.5" style={{"fontSize": "18px", fill: "rgb(255, 255, 255)"}}>Data</text>
                    <text x="216" y="280.5" style={{"fontSize": "18px", fill: "rgb(255, 255, 255)"}}>Science</text>
                    <text x="54" y="330" style={{"fontSize": "18px"}}>Math &amp; Statis</text>
                    <text x="330" y="330" style={{"fontSize": "15px"}}>Business Knowledge</text>
                    <text x="192" y="363.00000000000006" style={{"fontSize": "14px"}}>Traditional Research</text>
                </svg>
                </div>
            </div>
        </div>
        </section>
    )
}

const ChangingHow = () => {
    return (
        <section style={{background: `no-repeat center bottom/60% url(${CHANGEBG}) #FFFFFF`}}>
            <div className="container">
            <div className="flexbox text-center">
                <h2 className="width50 indent">CHANGING HOW <br />PEOPLE <br />INTERACT WITH <br />DATA </h2>
                <h2 className="width50 indent">WILL ALWAYS <br />CHANGE <br />THE WORLD</h2>
            </div>
            </div>
        </section>
    )
}

const GlobalDataSize = () => {
    let [zeroOne, setZeroOne] = useState('01');
    useEffect(() => {
        let str = '01';
        let rows = Math.floor(window.screen.height / 42);
        let cols = Math.floor(window.screen.width / 8);
        let parts = Array(rows * cols).fill(str).join('');
        setZeroOne(parts);
    }, [])
    return (
        <section style={{background: '#F25022'}}>
        <div className="container">
            <div className="flexbox">
                <p className="width50 text-alpha-30 text-size-03em indent2x overflow-hidden word-break zeroOne hide-if-too-small disable-selection text-white">
                    {zeroOne}
                </p>
                <div className="digits width50 indent word-break fullsize-if-too-small text-white">
                    The global data will reach 175 ZB by 2025 <br />in more familiar numbers<br /> <h2>175,000,000,000,000,000,000,000 </h2>bytes. 
                    <br /> <br />
                    <h2>Guess how much data each Zilliz engineer will be of help? </h2>
                </div>
            </div>
        </div>
        </section>
    )
}

const Heros = () => {
    const {allFile} = useStaticQuery(graphql`
    {
        allFile(filter: {base: {regex:"/(.*)_(.*)_(.*).png/" }}) {
            edges {
              node {
                childImageSharp {
                  fixed(width:100) {
                    src
                  } 
                }
              }
            }
          }
    }
  `);
    return (
        <section style={{backgroundColor: '#002B36'}}>
            <div className="container">
            <div className="flexbox center-v-box text-white">
                <h1 className="indent width40">
                WE ONLY <br />
                WORK WITH <br /> HEROES.
                </h1>
                <div className="width60">
                    <ul className="heros">
                        {allFile.edges.map((h, i) => {
                            return (
                                <li key={i}>
                                    <img alt="hero" width="100" src={h.node.childImageSharp.fixed.src} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            </div>
        </section>
    )
}

const Ownership = () => {
    return (
        <section style={{background: '#000'}}>
        <Texture type="circles" size="8" method="lighter" fillColor="#666" />
        <div className="container">
            <div className="flexbox center-v-box">
                <ul className="indent text-white">
                    <li><h2>OWNERSHIP AND AUTONOMY</h2></li>
                    <li><h2>EMBRACE CHALLENGES</h2></li>
                    <li><h2>SOLVING PROBLEMS</h2></li>
                    <li><h2>LEAD BY EXAMPLE</h2></li>
                    <li><h2>INFLUENCE PEOPLE</h2></li>
                </ul>
            </div>
        </div>
        </section>
    )
}

const AmazingPeople = () => {
    return (
        <section style={{backgroundColor: '#000000'}}>
        <div className="container">
        <Texture type="circles" size="11" method="lighter" fillColor="#666" />
        <div className="flexbox center-box">
            <h1 className="indent text-white">OUR BEST PERK IS AMAZING <br />PEOPLE.</h1>
        </div>
        </div>
        </section>
    )
}

const DemandExcellence = () => {
    return (
        <section style={{background: `no-repeat 8% center/35% url(${demandExcellencebg}) #0077B5`}}>
        <div className="container">
        <div className="flexbox center-v-box rowEnd">
            <h1 className="indent width50 text-white">DEMAND <br /> EXCELLENCE</h1>
        </div>
        </div>
        </section>
    )
}

const ThinkBig = () => {
    return (
        <section style={{backgroundColor: '#3B5998'}}>
        <Texture type="circles" method="lighter" fillColor="#48A6E2" size="6" />
        <div className="container">
        <div className="flexbox center-v-box rowEnd">
            <ul className="indent width50 text-white fullsize-if-too-small">
                <li><h2>THINK BIG, BUILD SIMPLE</h2></li>
                <li><h2>ITERATE AND IMPROVE</h2></li>
                <li><h2>QUESTION THE STATUS QUO</h2></li>
                <li><h2>INNOVATION AT EVERY LEVEL</h2></li>
                <li><h2>CONTINUOUSLY LEARN</h2></li>
            </ul>
        </div>
        </div>
        </section>
    )
}

const FinishToday = () => {
    return (
        <section style={{backgroundColor: '#0077B5'}}>
        <Texture type="lines" method="lighter" strokeColor="#111" size="7" />
        <div className="container">
        <div className="flexbox center-box">
            <h1 className="indent text-white">FINISH TODAY A BETTER PROFESSIONAL THAN YESTERDAY.</h1>
        </div>
        </div>
        </section>
    )
}

const LiveIn = () => {
    return (
        <section style={{background: 'linear-gradient(to left, #FFF 50%, #FF9900 50%)'}}>
        <div className="container">
        <div className="flexbox text-center center-box">
            <h2 className="width50 text-white">WE LIVE WITH CANDID, </h2>
            <h2 className="width50 text-black">AS WE LIVE WITH AIR.</h2>
        </div>
        </div>
        </section>
    )
}

const Communicate = () => {
    return (
        <section style={{backgroundColor: '#F4B400'}}>
        <div className="container">
        <div className="flexbox text-center center-box">
            <ul className="indent">
                <li><h2>COLLABORATIVE COMMUNICATE</h2></li>
                <li><h2>REMARKABLY TRANSPARENT</h2></li>
                <li><h2>ADMIT MISTAKES FREELY AND OPENLY</h2></li>
                <li><h2>EGOLESS</h2></li>
                <li><h2>INTEGRITY</h2></li>
            </ul>
        </div>
        </div>
        </section>
    )
}

const Authenticity = () => {
    return (
        <section style={{backgroundColor: '#FF9900'}}>
        <Texture type="circles" method="lighter" fillColor="#FFF" size="10" />
        <div className="container">
        <div className="flexbox center-box">
            <h2 className="indent text-white">WE ARE KNOWN FOR AUTHENTICITY AND BEING NON-POLITICAL.</h2>
        </div>
        </div>
        </section>
    )
}

const Greatness = () => {
    return (
        <section style={{backgroundColor: '#DB4437'}}>
        <Texture type="circles" method="lighter" fillColor="#CC665D" size="3" />
        <div className="container">
        <div className="flexbox center-box">
            <h2 className="indent text-white">
                GREATNESS <br />
                AND COMFORT  <br />NEVER  <br />COEXIST.
            </h2>
            <div className="indent selfTop width50 text-alpha-30 hide-if-too-small" style={{height: '84vh'}}>
                <div className="checkCircles overflow-hidden disable-selection text-white">
                    {Array(8 * 14).fill(1).map(() => {
                        return <><i class="fas fa-check"></i> <i class="far fa-circle"></i></>
                    })}
                </div>
            </div>
        </div>
        </div>
        </section>
    )
}

const Errors = () => {
    return (
        <section style={{background: 'linear-gradient(to left, #0F9D58 50%, #DB4437 50%)'}}>
        <Texture type="circles" method="lighter" fillColor="#CCC" size="7" />
        <div className="container">
        <div className="flexbox center-box">
            <h2 className="width50"><p className="indent text-white"><em>“Man errs so long as he strives.”</em></p></h2>
            <h2 className="width50"><p className="indent text-black">LEARN FROM FAILURE.</p></h2>
        </div>
        </div>
        </section>
    )
}

const NotEasy = () => {
    return (
        <section style={{background: 'linear-gradient(to left, #F80000 50%, #76B900 50%)'}}>
        <Texture type="circles" method="lighter" fillColor="#CCC" size="7" />
        <div className="container">
        <div className="flexbox text-center center-box" >
            <h2 className="width50"><p className="indent text-black">NOT WHAT IS EASY.</p></h2>
            <h2 className="width50 text-black"><p className="indent text-white">DO WHAT IS RIGHT. </p></h2>
        </div>
        </div>
        </section>
    )
}

const GreatProduct = () => {
    return (
        <section style={{background: 'linear-gradient(to right, #F80000 50%, #0F9D58 50%)'}}>
        <Texture type="circles" method="lighter" fillColor="#CCC" size="10" />
        <div className="container">
        <div className="flexbox text-center center-box">
            <h2 className="width50"><p className="indent text-black">WE DON’T BUILD PRODUCTS TO MAKE MONEY;</p></h2>
            <h2 className="width50"><p className="indent text-white">WE MAKE MONEY TO BUILD GREAT PRODUCTS.</p></h2>
        </div>
        </div>
        </section>
    )
}

const ProtectCulture = () => {
    return (
        <section  style={{backgroundColor: '#4285F4'}}>
        <div className="container">
        <div className="flexbox center-box">
            <div className="indent text-white">
                <h1>PROTECTING OUR CULTURE</h1>
                <ul>
                    <li><h2>Hiring is crucial</h2></li>
                    <li><h2>Communicate our values</h2></li>
                    <li><h2>Measure against our values</h2></li>
                    <li><h2>Value high performers</h2></li>
                    <li><h2>Firing is also crucial</h2></li>
                </ul>
            </div>
        </div>
        </div>
        </section>
    )
}


const Culture = props => {
    const [initState, setInitState] = useState(null);
    const onScroll = (e) => {
        if (initState === null) {
            setInitState(e.activeSection);
        }
    }
    const options = {
        sectionclassNameName: 'section',
        anchors: [
            'EngineeringCurlture', 'ReinventDataScience', 'ChangingHow',
            'GlobalDataSize', 'Heros', 'Ownership',
            'AmazingPeople', 'DemandExcellence', 'ThinkBig',
            'FinishToday', 'LiveIn', 'Communicate',
            'Authenticity', 'Greatness', 'Errors',
            'NotEasy', 'GreatProduct', 'ProtectCulture',
        ],
        delay: 600,
        scrollBar: false,
        navigation: true,
        verticalAlign: false,
        sectionPaddingTop: '0',
        sectionPaddingBottom: '0',
        arrowNavigation: true,
        scrollCallback: onScroll,
    };

    return (
        <div className="culture">
            <SEO title="Culture" />
            <RHeader>
                <Header />
            </RHeader>
            <SectionsContainer {...options} activeSection={initState}>
                <Section><EngineeringCurlture /></Section>
                <Section><ReinventDataScience /></Section>
                <Section><ChangingHow /></Section>
                <Section><GlobalDataSize /></Section>
                <Section><Heros /></Section>
                <Section><Ownership /></Section>
                <Section><AmazingPeople /></Section>
                <Section><DemandExcellence /></Section>
                <Section><ThinkBig /></Section>
                <Section><FinishToday /></Section>
                <Section><LiveIn /></Section>
                <Section><Communicate /></Section>
                <Section><Authenticity /></Section>
                <Section><Greatness /></Section>
                <Section><Errors /></Section>
                <Section><NotEasy /></Section>
                <Section><GreatProduct /></Section>
                <Section><ProtectCulture /></Section>
            </SectionsContainer>
            <RFooter>
                <SimpleFooter />
            </RFooter>
        </div>
    )
}

export default Culture;
