import React from 'react'
import  './mainf.css'
import {FiTwitter} from 'react-icons/fi'
import {BsFacebook,BsYoutube,BsInstagram} from 'react-icons/bs'





function Mainf() {


  return (


    <>

        <footer className="main-footer">

            <section className="inner-footer">


                <div className="footer-1">

                  <h5>Gift Cards</h5>
                  <h5>Promotions</h5>
                  <h5>Promotions</h5>
                  <h5>Find a Store</h5>
                  <h5>Become A Member</h5>
                  <h5>Nike Journal</h5>
                  <h5>Send Us Feedback</h5>



                </div>

                <div className="footer-2">

                  <h5>Get Help</h5>

                  <h6>Order Status</h6>
                  <h6>Shipping and Delivery</h6>
                  <h6>Shipping and Delivery</h6>
                  <h6>Returns</h6>
                  <h6>Order cancellations</h6>
                  <h6>Payment Options</h6>
                  <h6>Gift Card Balance</h6>
                  <h6>Contact Us</h6> 


                </div>

                <div className="footer-2">

                  <h5>About Nike</h5>

                  <h6>News</h6>
                  <h6>Careers</h6>
                  <h6>Investors</h6>
                  <h6>Purpose</h6>
                  <h6>Sustainability</h6>



                </div>


                <div className="links">

                  <div className="twit"><FiTwitter className='icons-links'/></div>
                  <div className="twit"><BsFacebook className='icons-links'/></div>
                  <div className="twit"><BsYoutube className='icons-links'/></div>
                  <div className="twit"><BsInstagram className='icons-links'/></div>



                    
                </div>





            </section>


        </footer>


    
    </>


  )
}

export default Mainf