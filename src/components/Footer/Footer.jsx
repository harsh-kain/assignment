import React from 'react'
import './style.css'
const Footer = () => {
  return (
    <>
        <div className="topFooter">
            <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>

            <p>CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE WATER <span>|</span> OILS & GAS <span>|</span> PHARMA <span>|</span> SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span> MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD & BEVERAGE  <span>|</span> PETROCHEMICAL & REFINERIES <span>|</span> SOLAR <span>|</span> BUILDING <span>|</span>HVAC <span>|</span> FIRE FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL</p>
        </div>
        <div className="bottomFooter">
            <div className="card">
                <i className="las la-phone"></i>
                <h5>Toll free : 1800 200 1234</h5>    
            </div>
            <div className="card">
                <i className="lab la-facebook-f"></i>
                <h5>www.facebook.com/cripump</h5>    
            </div>
            <div className="card">
                <i className="las la-globe-africa"></i>
                <h5>www.crigroups.com</h5>
            </div>
        </div>
    </>
  )
}

export default Footer