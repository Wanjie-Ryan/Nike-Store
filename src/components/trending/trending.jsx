import React from 'react'
import './trending.css'
import trending1 from '../../Images/trending1.jpg'
import trending2 from '../../Images/trending2.jpg'



function Trending() {



  return (

    <>


    <section className="trending">

        <p>Trending</p>


        <div className="image-conts">

            <div className="img">

                <div className='img-1'>


                 <img src ={trending1} alt ='' className='nike-img-1'/>

                </div>


                <div className='img-2'> 
                
                    <img src ={trending2} alt ='' className='nike-img-2'/>
                
                </div>





            </div>




        </div>





    </section>












    </>


  )
}

export default Trending