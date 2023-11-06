import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function InstructorCarousel() {
    return (

        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
        >
            

                <div className="box-container" style={{ display: 'flex' }}>
                <div className="box">
                        
                        <div className="image">
                            <img src="/images/Nuwan_sir.png" alt="" /> 
                        </div>

                    <h3>Nuwan Kodagoda</h3>
                    <p>Supervisor</p>
                    <div className="share">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>

                <div className="box">
                <div className="image">
                            <img src="/images/Thusith_sir.png" alt="" /> 
                        </div>
                    <h3>Thusithanjana Thilakarthna</h3>
                    <p>Co-supervisor</p>
                    <div className="share">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
                    
          <div className="box-container" style={{ display: 'flex' }}>

          <div className="box">
                    <div className="image">
                                <img src="/images/U.png" alt="" /> 
                            </div>
                        <h3>Udara Wijesinghe</h3>
                        <p>Leader</p>
                        <div className="share">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>

             <div className="box">
                        
                            <div className="image">
                                <img src="/images/Ramona.png" alt="" /> 
                            </div>

                        <h3>Ramona Vanhoff</h3>
                        <p>Member</p>
                        <div className="share">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>

          </div>

          
          <div className="box-container" style={{ display: 'flex' }}>
                    <div className="box">
                        
                        <div className="image">
                            <img src="/images/Disni.png" alt="" /> 
                        </div>

                    <h3>Disni Jayawickrama</h3>
                    <p>Member</p>
                    <div className="share">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>

                <div className="box">
                    
                        <div className="image">
                            <img src="/images/Anodya.png" alt="" /> 
                        </div>

                    <h3>Anodya Fernando</h3>
                    <p>Member</p>
                    <div className="share">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>


          </div>
        
                    
        </Carousel>
        

      );
    }

export default InstructorCarousel;
