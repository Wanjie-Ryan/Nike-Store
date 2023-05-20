import React from 'react'
import './energy.css'
import person1 from '../../Images/personwshoe1.jpg'
import person2 from '../../Images/personwshoe2.jpg'
import person3 from '../../Images/personwshoe3.jpg'



function Energy() {




  return (


    <>

        <div className="energy">

            <div className="energy_container">

                <h1 className ='text-energy'>Bring The Energy</h1>
                <h5>Turn up your style with all the comfort and color of the Air Max SC.</h5>

                <button>Shop All Air Max</button>


            </div>



        </div>

        <section className="fresh-styles">


            {/* <div className="fresh-styles_container"> */}

                <h3>Fresh Sales Styles</h3>

                <div className="fresh-cont">

                    <div className="fresh-img">

                        <img src={person3} alt="person" className="img-style" />


                        <div className="price-details">

                            <p className="text-dress">
                                Child's Nike Dress, real cotton.
                            </p>

                            <p className="text-dress">
                                Nike dress
                            </p>



                        </div>

                    </div>

                    <div className="fresh-img">

                        <img src={person1} alt="person" className="img-style" />

                        <div className="price-details">

                            <p className="text-dress">
                                Child's Nike Dress, real cotton.
                            </p>

                            <p className="text-dress">
                                Nike dress
                            </p>



                        </div>



                    </div>

                    <div className="fresh-img">

                        <img src={person2} alt="person" className="img-style" />

                        <div className="price-details">

                            <p className="text-dress">
                                Child's Nike Dress, real cotton.
                            </p>

                            <p className="text-dress">
                                Nike dress
                            </p>



                        </div>



                    </div>






                </div>
            {/* </div> */}

        </section>

    </>






  )
}

export default Energy