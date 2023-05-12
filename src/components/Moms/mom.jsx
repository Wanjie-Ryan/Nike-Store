import React from 'react'
import './mom.css'
import mom1 from '../../Images/mom1.jpg'
import mom2 from '../../Images/mom2.jpg'
import mom3 from '../../Images/mom3.jpg'




function Mom() {



  return (


    <>

    <main className="mom-sec">


        <div className="nike-moms">

            <div className="images">

                <div className="mom-1">

                    <img src={mom1} alt="nike-mom" className="mom-one-nike" />



                </div>

                <div className="mom-1">

                    <img src={mom2} alt="nike-mom" className="mom-one-nike" />



                </div>


                <div className="mom-1">

                    <img src={mom3} alt="nike-mom" className="mom-one-nike" />



                </div>



            </div>


        </div>

    </main>
    
    
    
    
    
    
    
    </>



  )
}

export default Mom