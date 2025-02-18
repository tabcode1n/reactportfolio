
import self from "../images/self.jpg";
import "./home.css";

const Home = () => {
  return (
    <div>
      <navbar />
      <div className="container"></div>
      <h1 className="title1">TABITHA</h1>
      <h1 className="title2">ROOST</h1>
      <div></div>
      
  <img className="h-auto max-w-lg ml-auto img1 " src= {self} alt="self.jpg" />

      
    </div>
  );
};

export default Home;
