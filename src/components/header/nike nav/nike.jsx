import React from 'react'
import './nike.css'
import {SiNike} from 'react-icons/si'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsBag} from 'react-icons/bs'




function Nike() {



  return (


    <>


        <nav className="nike">


          <section className="nike-main">

            <div className="left">

              <SiNike className='nike-icon'/>
              
            </div>


            <div className="middle">

              <div className="new">

                <label>New & Featured</label>


              </div>

              <div className="new">

                <label>men</label>

              </div>

              <div className="new">

                <label>Women</label>

              </div>

              <div className="new">

                <label>Kids</label>

              </div>

              <div className="new">

                <label>Accessories</label>

              </div>

              <div className="sale">

                <label>Sale</label>

              </div>




            </div>


            <div className="right">

              <div className="search">

                <input type="text" className="search-box" placeholder='search'/>

              </div>

              <div className="icons">

                <AiOutlineHeart/>
                <BsBag/>

              </div>


            </div>




            
          </section>








        </nav>


    
    
    
    
    
    </>



  )
}

export default Nike