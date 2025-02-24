import che from "../images/che.png";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <Title />
      <ul className="bullet-list">
        <li style={{ marginLeft: "90px" }}>
          <span>SELF CREATED PROJECTS</span>
          <div className="flip-card" style={{ marginLeft: "20px" }}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={che} alt="che.png" />
              </div>
              <div className="flip-card-back">
                <p className="text">
                  As a Full Stack Web Developer, I specialize in building robust web applications 
                  using modern technologies. My expertise spans both front-end development with 
                  React, JavaScript, HTML5, and CSS3, as well as back-end development using 
                  Node.js, Express, and MongoDB. I take pride in writing clean, maintainable 
                  code and implementing responsive design principles.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li style={{ marginLeft: "90px" }}>
          <span>INTERACTIVE WEBSITES</span>
          <div className="flip-card" style={{ marginLeft: "20px" }}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={che} alt="che.png" />
              </div>
              <div className="flip-card-back">
                <p className="text">
                  I focus on creating engaging, user-friendly web experiences that combine 
                  smooth animations, intuitive interfaces, and optimal performance. My projects 
                  feature modern UI/UX principles, responsive layouts, and seamless integration 
                  between front-end and back-end components. I'm passionate about creating 
                  websites that not only look great but also provide real value to users.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li style={{ marginLeft: "90px" }}>
          <span>COLLABORATIVE PROJECTS</span>
          <div className="flip-card" style={{ marginLeft: "20px" }}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={che} alt="che.png" />
              </div>
              <div className="flip-card-back">
                <p className="text">
                  I thrive in collaborative environments where I can contribute my technical 
                  skills while learning from others. My experience includes working with diverse 
                  teams using agile methodologies, version control systems, and modern development 
                  workflows. I'm known for my strong communication skills, ability to meet deadlines, 
                  and dedication to delivering high-quality solutions.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default About;
