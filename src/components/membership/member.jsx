import React from 'react'
import './member.css'
import {SiNike} from 'react-icons/si'


function Member() {



  return (


    <>


      <section className="member">

        <h2>Nike Membership</h2>


        <div className="membership">

          <div className="membership__item">

            <p className="text-member">BECOME A MEMBER </p>

            <p className="community">Sign up for free. Join the community.</p>

            <button className="btn">Join Us</button>
            <button className="btn">Sign In</button>


          </div>


          <div className="nike-logo">

            <SiNike className="nike-logo__icon" />

          
          </div>




        </div>

      </section>
    
    </>



  )
}

export default Member