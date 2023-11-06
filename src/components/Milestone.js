import React from "react";
import {
  MDBBadge,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";

import './styles/milestone.css';

export default function App() {
  return (
    <MDBContainer className="py-5">
      <div className="main-timeline-4 text-white">
        <div className="timeline-4 left-4">
          <MDBCard className="gradient-custom">
            <MDBCardBody className="p-4">
              <MDBIcon fas icon="book" size="2x" className="mb-3" />
              <h4 style={{fontWeight:'bold'}}>PROJECT PROPOSAL</h4>
              <p className="small text-white-50 mb-4">23 MARCH 2023</p>
              <p style={{fontSize:'15px'}}>
              
              The first pitch to the panel focused on methodologies and technologies that would be 
              used in the creation of KiddoCare.


              </p>
           
            </MDBCardBody>
          </MDBCard>
        </div>


        <div className="timeline-4 right-4">
          <MDBCard className="gradient-custom-4">
            <MDBCardBody className="p-4">
              <MDBIcon fas icon="camera" size="2x" className="mb-3" />
              <h4 style={{fontWeight:'bold'}}>PROGRESS PRESENTATION 1</h4>
              <p className="small text-white-50 mb-4"> 23 MAY 2023</p>
              <p style={{fontSize:'15px'}}>
              
              This was where the 50% progress of the KiddoCare 
              application was presented to the panel.


              </p>
         
            </MDBCardBody>
          </MDBCard>
        </div>


        <div className="timeline-4 left-4">
          <MDBCard className="gradient-custom">
            <MDBCardBody className="p-4">
              <MDBIcon fas icon="campground" size="2x" className="mb-3" />
              <h4 style={{fontWeight:'bold'}} >PROGRESS PRESENTATION 2</h4>
              <p className="small text-white-50 mb-4">02 SEP 2023</p>
              <p style={{fontSize:'15px'}}>
               
              This is where we presented 90% completion of KiddoCare application to the panel.


              </p>
              
            </MDBCardBody>
          </MDBCard>
        </div>


        <div className="timeline-4 right-4">
          <MDBCard className="gradient-custom-4">
            <MDBCardBody className="p-4">
              <MDBIcon fas icon="sun" size="2x" className="mb-3" />
              <h4 style={{fontWeight:'bold'}}>POSTER</h4>
              <p className="small text-white-50 mb-4">09 SEP 2023</p>
              <p style={{fontSize:'15px'}}>
                
              This was where a comprehensive graphical view of KiddoCare was 
              shown to the audience to give a better view of our research.


              </p>
          
            </MDBCardBody>
          </MDBCard>
        </div>


        <div className="timeline-4 left-4">
          <MDBCard className="gradient-custom">
            <MDBCardBody className="p-4">
              <MDBIcon fas icon="palette" size="2x" className="mb-3" />
              <h4 style={{fontWeight:'bold'}}>FINAL ASSESSMENT</h4>
              <p className="small text-white-50 mb-4">30 OCT 2023</p>
              <p style={{fontSize:'15px'}}>
                
              The final presentation is the point at which the system is fully functional at 100%. 
              which means that the system must be a full product that can be commercialized.


              </p>
             
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-4 right-4">
          <MDBCard className="gradient-custom-4">
            <MDBCardBody className="p-4">
              <MDBIcon fas icon="laugh-beam" size="2x" className="mb-3" />
              <h4 style={{fontWeight:'bold'}}>VIVA</h4>
              <p className="small text-white-50 mb-4">30 OCT 2023</p>
              <p style={{fontSize:'15px'}}>
              
              Individual assessment of each member of the group to identify the level of 
              understanding of the system and the functions of the system.


              </p>
           
            </MDBCardBody>
          </MDBCard>
        </div>
        

      </div>
    </MDBContainer>
  );
}