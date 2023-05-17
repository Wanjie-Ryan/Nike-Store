import React from 'react'
import './air.css'
import shoe7 from '../../Images/shoes7.jpg'
import shoe6 from '../../Images/shoes6.jpg'
import shoe5 from '../../Images/shoes5.jpg'
import shoe2 from '../../Images/shoes2.jpg'




function Air() {


  return (


    <>

        <section className="air-max">

            <div className="header-title"><p> Air Max</p></div>

            <div className="air-cont">


                <div className="max">

                    <div className="img-max">

                        <img src={shoe7} alt="" className="shoe-img-max" />

                    </div>

                    <div className="img-max">

                        <img src={shoe6} alt="" className="shoe-img-max" />

                    </div>

                    <div className="img-max">

                        <img src={shoe5} alt="" className="shoe-img-max" />

                    </div>

                    <div className="img-max">

                        <img src={shoe2} alt="" className="shoe-img-max" />

                    </div>





                </div>





            </div>
            
            
            
            
            
            
            
            
            
        </section>    
    
    
    
    </>


  )
}

export default Air