import React from 'react'
import "./style.css"
import ProductsImg from '../../assets/3.png'

const Products = () => {
    return (
        <div className='productContainer'>
            <h6>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
            </h6>
            <img src={ProductsImg} alt="" />
            <p>Valves - Pumps - Pipes - IoT Drives & Controllers -  Wires & Cables - Solar Systems - Motors
            </p>
        </div>
    )
}

export default Products