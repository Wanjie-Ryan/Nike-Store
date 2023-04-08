import React, {useState} from 'react'
import './jordan.css'
import {SiJordan} from 'react-icons/si'
import {GiConverseShoe} from 'react-icons/gi'


function Jordan() {

    const [element, setElement] = useState(false)

    const showFeature =()=>{

        setElement(true)
    }

    const hideFeature = ()=>{

        setElement(false)
    }


  return (


    <>



        

        <nav className = 'jordan'>

            <section className="jordan-main">


                <div className="left-jordan">

                    <SiJordan className='brand-icons'/>
                    <GiConverseShoe className='brand-icons'/>




                </div>




                <div className="right-jordan">


                    <div className="navigations">

                        <div className="store">
                            
                            <span  className='brand-titles'>Find a Store</span>
                        </div>


                        <div className="help">

                            <span className='brand-titles' onMouseOver={showFeature} onMouseOut={hideFeature}>Help</span>

                            {element && <div className="showhelp">


                                <span className="title">Help</span>

                                <span className="list">

                                    <p>Order</p>
                                    <p>Shipping & Delivery</p>
                                    <p>Returns</p>
                                    <p>Size Charts</p>
                                    <p>Contact Us</p>
                                    <p>Privacy Policy</p>
                                    <p>Terms of Sales</p>
                                    <p>Terms of Use</p>
                                    <p>Send Us Feedback</p>



                                </span>

                            </div>}


                        </div>


                        <div className="join-us">
                        
                            <span className='brand-titles'>Join Us</span>

                        </div>


                        <div className="sign-in">

                            <span className='brand-titles'>Sign In</span>

                        </div>



                    </div>


                </div>




            </section>


        </nav>

    </>

    
  )
}

export default Jordan