import React from 'react'
import './jordan.css'
import {SiJordan} from 'react-icons/si'
import {GiConverseShoe} from 'react-icons/gi'


function Jordan() {


  return (


    <>



        

        <nav className = 'jordan'>

            <section className="jordan-main">


                <div className="left-jordan">

                    <SiJordan/>
                    <GiConverseShoe/>




                </div>




                <div className="right-jordan">


                    <div className="navigations">

                        <p>Find a Store</p>
                        <p>Help</p>
                        <p>Join Us</p>
                        <p>Sign In</p>



                    </div>


                </div>




            </section>


        </nav>

    </>

    
  )
}

export default Jordan