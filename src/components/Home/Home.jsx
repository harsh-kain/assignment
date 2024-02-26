import React from 'react'
import './style.css'
import Container from '../Container/Container'
import LeftImg from '../../assets/1.png'
import RightImg from '../../assets/2.png'
const Home = () => {
    return (
        // <Container>
            <div className="homeContainer">
                <div className="left">
                    <img src={LeftImg} alt="" />
                </div>
                <div className="right">
                    <div className="topContent">
                        <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
                        <ul>
                            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                        </ul>
                    </div>
                    <img src={RightImg} alt="" />
                    <div className="bottomContent">
                        
	Government of India has awarded the <span>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                    </div>
                </div>
            </div>
        // </Container>
    )
}

export default Home