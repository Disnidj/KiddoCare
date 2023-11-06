import React from 'react';
import Slider from 'react-slick';
import InstructorCarousel from './InstructorCarousel'; 
import './styles/Homestyle.css';
import Milestone from './Milestone'
import Demo from './Demo';

function HomeMain() {


    const settings = {
        infinite: true,
        slidesToShow: 3, // Adjust the number of visible slides as needed
        slidesToScroll: 1,
    };

    const instructors = [
        { name: 'John Wright', role: 'Instructor', image: '/images/about us.png' },
        // Add more instructor data as needed
    ];





    return (
        <div>

            {/* <!-- header section starts --> */}

            <div>
            <header className="header">
                <a href="#" className="logo" style={{ textDecoration: 'none' }}> <i className="fa-solid fa-baby-carriage"></i> KiddoCare</a> 
                <nav className="navbar">
                    <a href="#home" style={{ textDecoration: 'none' }}>Home</a>
                    <a href="#about" style={{ textDecoration: 'none' }}>About</a>
                    <a href="#demo" style={{ textDecoration: 'none' }}>Details</a>
                    <a href="#steps" style={{ textDecoration: 'none' }}>Components</a>
                    <a href="#milestone" style={{ textDecoration: 'none' }}>Milestone</a>
                    <a href="#Team" style={{ textDecoration: 'none' }}>Team</a>
                    <a href="#docs" style={{ textDecoration: 'none' }}>Documents</a>
                    
                    <a href="#contact" style={{ textDecoration: 'none' }}>contact</a>
                </nav>
                <div className="icons">
                    <div className="fas fa-user" id="login-btn"></div>
                    <div className="fas fa-bars" id="menu-btn"></div>
                </div>
                <form action="" className="login-form">
                    <h3>login now</h3>
                    <input type="email" placeholder="your email" className="box" />
                    <input type="password" placeholder="your password" className="box" />
                    <p>forget your password <a href="#">click here</a></p>
                    <input type="submit" value="login now" className="btn" />
                </form>
            </header>

        </div>



            {/* <!-- header section ends --> */}

            {/* home section starts for chatbot and skin rash prediction */}
            <section className="home" id="home">
                <div className="content">
                    <h3 style={{fontSize:'70px'}}>
                        <span className="skin-rash-text">Welcome To</span> {' '}
                        <span className="predictions-text">KiddoCare</span>
                    </h3>
                    <p style={{fontSize:'24px'}}>"Your Baby's Wellness, Our Priority!"</p>
                </div>

                <div className="image1">
                    <img src="images/logo2.png" alt="" style={{width:'700px', height:'400px'}} />
                </div>

                <div className="content" style={{marginTop:'-150px'}}>   
                <p style={{fontSize:'18px'}}> Your Trusted Partner in Infant Health. 
                    We're dedicated to providing parents with innovative tools for early detection, 
                    guidance, and support in your journey of nurturing your little ones. Our integrated 
                    system leverages cutting-edge technology to empower you with insights, from growth predictions,
                     skin rash identification, behavior prediction, to a friendly chatbot offering immediate assistance. 
                     Explore the future of infant healthcare with KiddoCare
                </p> 
                </div>
                
                <div className="custom-shape-divider-bottom-1684324473">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
            </section>
            {/* home section ends */}

            {/* about us section starts */}
            <section className="about" id="about">
                <h1 className="heading">
                    <span className="skin-rash-text">About</span>
                    <span className="predictions-text"> Us</span>
                </h1>
                <div className="row">

                    <div className="image">
                        <div className='frame'> <img src="/images/baby1.jpg" alt="" /> </div>
                        
                        
                    </div>
                    <div className="content">
                       
                        <p className="desc-text" style={{fontSize:'17px'}}>
                        
                        "At KiddoCare, we're driven by a passion for infant well-being and a commitment to making parenthood an even more rewarding journey. Our mission is to provide parents with the tools and resources they need to ensure the health and happiness of their little ones."</p>

                       <p> With a team of dedicated professionals, including experts in healthcare, technology, and child development, we've developed an integrated healthcare system that combines cutting-edge technology with a deep understanding of infant needs.

                        Our system offers growth predictions, skin rash identification, behavior prediction, and a user-friendly chatbot, all aimed at empowering parents with the knowledge and support they need to care for their infants effectively.</p>

                      <p>  We believe that proactive and informed parenting is the key to a brighter future for the youngest members of our society. KiddoCare is here to provide you with the tools and guidance you need to ensure a healthy and happy start for your child. Join us on this exciting journey to redefine infant healthcare.
                        
                        </p>
                    </div>
                </div>
            </section>
            {/* about us section ends */}

<section>
    
    <div className="about-us-list">
    <div className="section-container">
      <div className="section-header">
   
        <h2 style={{fontSize:'20px', fontWeight:'bold'}}> <i className="fa-brands fa-canadian-maple-leaf" style={{color: '#e9768f', fontSize:'40px'}}></i> WHO WE ARE?</h2>
      </div>
      <p style={{fontSize:'15px'}}>
        We are a web application specially designed for remote consultations for infants healthcare.
      </p>
      </div>

      <div className="section-container">
      <div className="section-header">
     
        <h2 style={{fontSize:'20px', fontWeight:'bold'}}> <i className="fa-brands fa-canadian-maple-leaf" style={{color: '#4670b9', fontSize:'40px'}}></i> WHAT WE DO?</h2>
      </div>
      <ul style={{fontSize:'15px'}}>
        <li>Help The Remote Consultations To COnduct Easier</li>
        <li>Provide Health Informatic Solutions</li>
        <li>Focus On the Availability Of Assistancing</li>
        <li>Help To Reduce The Stress Of Parents </li>
        
      </ul>
      </div>

      <div className="section-container">
      <div className="section-header">
      
        <h2 style={{fontSize:'20px', fontWeight:'bold'}}> <i className="fa-brands fa-canadian-maple-leaf" style={{color: '#e9768f', fontSize:'40px'}}></i> WHAT ARE THE KEY FEATURES?</h2>
      </div>
      <ul style={{fontSize:'15px'}}>
        <li>Health Informatic Chatbot Application With a Emergency Solution Set.</li>
        <li>Infant Growth Level Prediction.</li>
        <li>Behavioral Detection By Video Recording.</li>
        <li>Skin Rash Detection. </li>
      </ul>
      </div>


      <div className="section-container">
      <div className="section-header">
      
        <h2 style={{fontSize:'20px', fontWeight:'bold'}}> <i className="fa-brands fa-canadian-maple-leaf" style={{color: '#4670b9', fontSize:'40px'}}></i> WHY WE DO IT?</h2>
      </div>
      <p style={{fontSize:'15px'}}>
        To Help The Parents With The Problems They Face With Thier Infants Health Care
      </p>
      </div>

      <div className="section-container">
      <div className="section-header">
     
        <h2 style={{fontSize:'20px', fontWeight:'bold'}} > <i className="fa-brands fa-canadian-maple-leaf" style={{color: '#e9768f', fontSize:'40px'}}></i> HOW WE DO IT?</h2>
      </div>
      <p style={{fontSize:'15px'}}>
        We Provide a Web Application To Make IT Easy With Remote Consulting For Infant Healthcare.
      </p>
      </div>

      <div className="section-container">
      <div className="section-header">
       <h2 style={{fontSize:'20px', fontWeight:'bold'}}> <i className="fa-brands fa-canadian-maple-leaf" style={{color: '#4670b9', fontSize:'40px'}}></i> SINCE WHEN?</h2>
        
      </div>
      <p style={{fontSize:'15px'}}>Application will be live from 30th of November 2023</p>
      </div>

    </div>

    
            </section>

            <section className='Demo' id="demo">
            <Demo />
            </section>
            

            {/* education section start */}
            <section className="steps" id="steps">
                <h1 className="heading">What You Can Do ?</h1>
                <div className="box-container">
                    <div className="box">
                        <h3 style={{fontWeight: 'bold' , textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Growth Level Prediction</h3>
                        <p>
                            <p>
                            "This system uses research and technology to predict a baby's growth and development, not just physically but also their age-appropriate behaviors.
                            It considers various stages of development and provides parents with a full picture of their child's progress. By combining machine learning, behavior assessment, and real-time observation, 
                            it helps parents intervene early and improve their child's well-being."</p>
                        </p>
                        <br/>
                        {/* <Link to="/chatbot"> <button type="button" class="btn btn-primary" style={{ backgroundColor:'#3979b6', border:'white', width:'150px', height:'30px', fontSize:'15px'}} >Go To ChatBot</button></Link> */}
                        <br/><br/>
                    </div>

                    <div className="box">
                        <h3 style={{fontWeight: 'bold' , textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}} >Chatbot</h3>
                        <p>
                            <p> 
                            "This chatbot innovation offers remote consultations for new parents in Sri Lanka. It uses AI to understand conversations, identify symptoms, offer help, and store chat records. 
                            The chatbot aims to improve parental understanding, address child behavior issues, and optimize newborn healthcare by offering personalized advice and connecting with hospital 
                            systems."
                            </p>
                        </p>
                        
                        {/* <Link to="/upload"><button type="button" class="btn btn-primary" style={{backgroundColor:'#e9768f', color:'white', border:'white', width:'200px', height:'30px', fontSize:'15px'}} >Go To Rash Prediction</button></Link><br/> */}
                        <br/>

                    </div>

                    <div className="box">
                        <h3 style={{fontWeight: 'bold' , textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Skin Rashes Prediction</h3>
                        <p>
                            <p> 
                            
                            "Our Skin Rashes Prediction in KiddoCare utilizes advanced technology to distinguish between normal and abnormal infant skin conditions. 
                            By analyzing uploaded images, it predicts the type of skin rash, allowing early diagnosis and guidance for proper care.
                             We empower parents with the knowledge to keep their infants comfortable and healthy."
                            </p>
                        </p>
                        
                        {/* <Link to="/upload"><button type="button" class="btn btn-primary" style={{backgroundColor:'#e9768f', color:'white', border:'white', width:'200px', height:'30px', fontSize:'15px'}} >Go To Rash Prediction</button></Link><br/> */}
                        <br/>

                    </div>

                    <div className="box">
                        <h3 style={{fontWeight: 'bold' , textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Infant Behavior Detection </h3>
                        <p>
                            <p> 
                            
                            "This method uses video and image analysis to detect potential health issues in infants. It combines various techniques
                            like motion and facial expression analysis to provide a comprehensive assessment. Parents capture videos as per guidelines, and advanced technology checks 
                            for unusual behaviors or potential illnesses, 
                            guiding parents to take prompt action for their child's well-being."

                            </p>
                        </p>
                        
                        {/* <Link to="/upload"><button type="button" class="btn btn-primary" style={{backgroundColor:'#e9768f', color:'white', border:'white', width:'200px', height:'30px', fontSize:'15px'}} >Go To Rash Prediction</button></Link><br/> */}
                        <br/>

                    </div>

                </div>
            </section>
            {/* education section ends */}


            {/* milestone */}

            <section className="milestone" id="milestone">

            <h1 className="heading">
                    <span className="skin-rash-text">PROJECT</span>
                    <span className="predictions-text"> MILESTONE</span>
                </h1>

                <Milestone />
            </section>

            {/* end */}
            


            {/* <!-- teacher section starts --> */}

            <section className="teacher" id="Team">

            <h1 className="heading">
                    <span className="skin-rash-text">Our</span>
                    <span className="predictions-text"> Team</span>
                </h1>
               

                <div className="box-container">

                <InstructorCarousel />
                

                </div>

            </section>

            {/* <!-- teacher section ends --> */}
         

            {/* <!-- activities section starts --> */}

            <section className="activities" id='docs'>

            <center>
                <h3 style={{fontSize:'40px' }}>
                            <span className="skin-rash-text">PROJECT</span> {' '}
                            <span className="predictions-text">DOCUMENTS</span>
                </h3>
                <br/>
                

                <div className="box-container">



                <div className="box">
                    <img src="/images/document.gif" alt="" /> 
                    <h3>Research Paper</h3>
                    <p> This milestone involves writing a formal research paper summarizing the project's findings, methodology, and results. It's often a requirement for academic or research-oriented projects.</p>
                
                    
                    <a className='btn btn-info' href="Docs/Research paper-final.pdf" target="_blank" rel="noopener noreferrer">
                        Click Here 
                    </a>
                  
                </div>

              

                <div className="box">
                    <img src="/images/document.gif" alt="" /> 
                    <h3>Poster</h3>
                    <p> A poster presentation is a visual summary of the project. It should be concise and visually appealing to convey work's key points. </p>
                
                    <a className='btn btn-info' href="images/Post.jpeg" target="_blank" rel="noopener noreferrer">
                        Click Here 
                    </a>

                </div>


                <div className="box">
                    <img src="/images/document.gif" alt="" /> 
                    <h3>Final Report</h3>
                    <p> A comprehensive document summarizing the complete project's objectives, methodology, results, and conclusions. It serves as a formal record of work and is often submitted as a requirement for project completion.</p>
                
                    <a className='btn btn-info' href="Docs/23-103_group_report.pdf" target="_blank" rel="noopener noreferrer">
                        Click Here 
                    </a>
                </div>

                <div className="box">
                    <img src="/images/document.gif" alt="" /> 
                    <h3>Website Assessment</h3>
                    <p> This milestone involves evaluating and assessing the website's performance, usability, and overall effectiveness.</p>
                
                    <a className='btn btn-info' href="" target="_blank" rel="noopener noreferrer">
                        Click Here 
                    </a>
                </div>

                <div className="box">
                    <img src="/images/document.gif" alt="" /> 
                    <h3>Logbook</h3>
                    <p> A logbook is a chronological record of the project-related activities, including notes, tasks, and observations. It helps maintain an organized record of project's development.</p>
                    <a className='btn btn-info' href="/Docs/logbook.pdf" target="_blank" rel="noopener noreferrer">
                        Click Here 
                    </a>
                </div>

                </div>
                </center>

            </section>

{/* <!-- activities section ends --> */}


            {/* <!-- activities section starts --> */}

            <section className="activities">

            <center>
                <h3 style={{fontSize:'40px' }}>
                            <span className=" predictions-text">PRESENTATION</span> {' '}
                            <span className="skin-rash-text">DOCUMENTS</span>
                </h3>
                <br/>
                

                <div className="box-container">

                <div className="box2">
                    <img src="/images/teach.gif" alt="" /> 
                    <h3>Project Proposal</h3>
                    <p>At the start of the project, we created a proposal outlining the objectives, scope, methodology, and goals of our project. This document helps to gain approval and provides a roadmap for the work.</p>
                    <a className='btn btn-info' href="/Docs/proposal" target="_blank" rel="noopener noreferrer">
                        Click Here 
                    </a>
                </div>


                <div className="box2">
                    <img src="/images/teach.gif" alt="" /> 
                    <h3>Progress Presentation 1</h3>
                    <p>This is typically an early presentation to showcase the progress made in the project. It allows to receive feedback, make adjustments, and ensure that we are  on the right track.</p>
                    <a className='btn btn-info' href="/Docs/pp1.pdf" target="_blank" rel="noopener noreferrer">
                        Click Here 
                    </a>
                </div>


                <div className="box2">
                    <img src="/images/teach.gif" alt="" /> 
                    <h3>Progress Presentation 2</h3>
                    <p> Similar to the first progress presentation, the second presentation provides an update on the project's status as 90% completion, addressing any changes or developments since the first presentation.</p>
                    <a className='btn btn-info' href="/Docs/pp2.pdf" target="_blank" rel="noopener noreferrer">
                        Click Here 
                    </a>
                </div>

           

                <div className="box2">
                    <img src="/images/teach.gif" alt="" /> 
                    <h3>Final Presentation and Viva</h3>
                    <p> This is the culminating presentation of the project, where ,present the completed work and defend the findings before a panel or audience, often followed by a viva or oral examination to assess understanding of the project.</p>
                    <a className='btn btn-info' href="/Docs/Final.pptx" target="_blank" rel="noopener noreferrer">
                        Click Here 
                    </a>
                </div>



                </div>
                </center>

            </section>

{/* <!-- activities section ends --> */}


{/* <!-- contact section starts --> */}

<section className="contact" id="contact">

    <h1 className="heading">
        <span className="skin-rash-text">CONTACT</span>
        <span className="predictions-text"> US</span>
    </h1>

    <div className="icons-container">

        <div className="icons">
            <i className="fas fa-clock" ></i>
            <h3>opening hours :</h3>
            <p>mon - friday</p>
            <p>weekend</p>
            <p>24/7</p>
            
        </div>

        <div className="icons">
            <i className="fas fa-envelope"></i>
            <h3>email</h3>
            <p>ramona123@gmail.com</p>
            <p>udara321@gmail.com</p>
        </div>

        <div className="icons">
            <i className="fas fa-phone"></i>
            <h3>phone number</h3>
            <p>+94-76-100-6754</p>
            <p>+94-76-100-6755</p>
        </div>

    </div>

    <div className="row">

        <div className="image">

        <img src="/images/logo.png" alt=""  style={{width:'390px', height:'490px'}}/>
        </div>

        <form action="">
            <h3>get in touch</h3>
            <div className="inputBox">
                <input type="text" placeholder="your name"/>
                <input type="email" placeholder="your email"/>
            </div>
            <div className="inputBox">
                <input type="number" placeholder="your number"/>
                <input type="text" placeholder="your subject"/>
            </div>
            <textarea placeholder="your message" cols="30" rows="10"></textarea>
            <input type="submit" value="send message" className="btn"/>
        </form>

    </div>

</section>

{/* <!-- contact section ends --> */}



{/* <!-- footer section starts --> */}

<section className="footer">


    <div className="credit"> &copy; copyright @ 2023 by <span>Team 103</span></div>

</section>

{/* <!-- footer section ends --> */}



        



        </div>
    );
}

export default HomeMain;
