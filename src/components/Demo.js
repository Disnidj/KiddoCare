import React, { useState } from 'react';

function Demo() {
  const [activeButton, setActiveButton] = useState(null);

  const contentData = [
    'This study addresses the deficiency in Sri Lanka\'s infant health system by proposing a comprehensive approach. This approach consists of a decentralized patient information system for secure access to patient data, a chatbot for parental guidance, an image-based skin disease identifier, a growth predictor, and a module for early sickness detection. These components collectively enhance infant healthcare by improving data accessibility, enabling remote guidance, predicting growth levels, and identifying unusual behaviors. This integrated solution aims to mitigate existing data and accessibility challenges, fostering timely and informed actions for better baby healthcare in Sri Lanka.',
    'A service-providing web application to make the remote consulting of infnts health care easy',
    'React, a popular JavaScript library for dynamic and interactive web apps is utilized for the chatbot front end, ensuring a responsive user experience. OpenCV, an open- source computer vision and machine learning package, aids in image and video processing, object identification, and integration with tools like TensorFlow. Python, renowned for its simplicity and vast machine learning ecosystem, is chosen for its clear syntax and rich libraries like NumPy, pytorch, pandas, TensorFlow, and Keras, enabling efficient algorithm implementation and data manipulation. This tech stack combines React, OpenCV, and Python to create a robust and user-friendly chatbot system with advanced image processing and machine learning capabilities. ',
    'Sri Lanka still does not have modernized things for such important matters when itcomes to the health industry. A lot of things are still being remodeled, so this immunization program is still not working properly. Waiting in a queue with a newborn baby to get injections and get necessary medicines has become a lot of trouble these days. According to the latest reports, the malnourished condition of children in Sri Lanka was used to come up with the idea to produce this system. And remote consulting has become a key concept for many solutions, but locals still have failed of getting used to it. So, a proper systematic solution to register infants for immunization with essential vaccinations and drugs via remote consultation is proposed.',
    'The particular infant healthcare issues in Sri Lanka are intended to be addressed by this integrated healthcare system. It improves data accessibility, facilitates early problem diagnosis, gives parents more control, and leads to better outcomes for baby healthcare in general. Particularly at government clinics, traditional methods, characterized by lengthy wait periods and restricted accessibility, can impede prompt intervention. Healthcare practitioners can access the proposed system securely from a distance thanks to a decentralized patient information system. A chatbot application provides accurate information and speedy evaluations, including the identification of skin disorders. Early impairment detection is aided by the illness identification module, and active child development monitoring is made possible by the growth level predictor. This approach makes the best use of available medical resources, lessens long-term problems, and incorporates parents in their childs medical treatment. Future research will validate its efficacy, benefiting Sri Lankan newborns and collaborating on healthcare challenges.'

  ];

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div>
        <center>
      <div className="gradient-custom" style={{backgroundColor:'#0f3961', height:'50px', width:'1150px'}}>

        <button onClick={() => handleButtonClick(0) } className="buttonRL">Abstract</button>

        <button onClick={() => handleButtonClick(1)} className="buttonRL">Objectives</button>

        <button onClick={() => handleButtonClick(2)} className="buttonRL">Technology</button>

        <button onClick={() => handleButtonClick(3)} className="buttonRL">Research Problem</button>

        <button onClick={() => handleButtonClick(4)} className="buttonRL">Methodologies</button>

      </div>
      <br/>
      
      <div className="content-container3">
        {activeButton !== null && (
          <p className="content-paragraph" style={{fontSize:'15px'}}>{contentData[activeButton]}</p>
        )}
      </div>
      </center>
    </div>
  );
}

export default Demo;
