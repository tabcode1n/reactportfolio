
// import Title from "../components/Title";
import self from "../images/self.jpg";
import "./home.css";
import "../App.css";
import "../index.css";  

const Home = () => {
  return (
    <div>
      <navbar />
      <div className="container"></div>
      {/* LIKE THIS? */}
      {/* <Title title="TABITHA ROOST" /> */}
      {/* OR LIKE THIS? */}
      {/* <h1>{title}</h1> */}
      <div></div>

      {/* GRID */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/> */}
        </div>
        <div>
            {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/> */}
        </div>
        <div>
            {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/> */}
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/> */}
        </div>
        <div>
            {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/> */}
        </div>
        <div>
            {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/> */}
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/> */}
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg " src= {self} alt="self.jpg" style={{ width: "300px", height: "300px" }} />
            {/* <img className="h-auto max-w-full rounded-lg " src= {self} alt="self.jpg" /> */}
        </div>
        <div>
            {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/> */}
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/> */}
        </div>
        <div>
            {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/> */}
        </div>
        <div>
            {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" /> */}
        </div>
    </div>
</div>

      
  {/* <img className="h-auto max-w-lg ml-auto img1 " src= {self} alt="self.jpg" /> */}

      
    </div>
  );
};

export default Home;
