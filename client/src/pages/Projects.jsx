import here from "../images/here.png";
import chi from "../images/chi.png";
import mid from "../images/mid.png";
import web2 from "../images/web2.png";
import web6 from "../images/web6.png";
import code1 from "../images/code1.png";
import code3 from "../images/code3.png";
import go from "../images/go.png";
import be from "../images/be.png";
import che from "../images/che.png";
// import Title from "../components/Title";

import "../App.css";

const Projects = () => {
  return (
    <div>
      {/* <h1>{title}</h1> */}

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={here}
              alt="here.png"
              style={{ width: "500px", height: "300px" }}
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={chi}
              alt="chi."
              style={{ width: "500px", height: "300px" }}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={che}
              alt="che.png"
              style={{ width: "500px", height: "300px" }}
            />
          </div>
          <div></div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={be}
              alt="be.png"
              style={{ width: "500px", height: "300px" }}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={mid}
              alt="mid.png"
              style={{ width: "500px", height: "300px" }}
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={web2}
              alt="web2.png"
              style={{ width: "500px", height: "500px" }}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={code3}
              alt="code3.png"
              style={{ width: "500px", height: "300px" }}
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={web6}
              alt="web6.png"
              style={{ width: "500px", height: "300px" }}
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={code1}
              alt="code1.png"
              style={{ width: "500px", height: "300px" }}
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={go}
              alt="go.png"
              style={{ width: "500px", height: "300px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
