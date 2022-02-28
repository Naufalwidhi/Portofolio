import profile from "../img/profile.jpeg";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import ProjectList from "./ProjectList";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Experience from "./Experience";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div>
      <section class="bg-info text-center pt-5 text-white">
        <img src={profile} alt="Naufal Widhi" class="w-25 mt-5 rounded-circle center-cropped img-thumbnail" data-aos="fade-up" />
        <h1 class="display-4" data-aos="fade-up">
          Naufal Widhi
        </h1>
        <p class="lead" data-aos="fade-up">
          Web Developer | Mobile Developer
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,64L48,74.7C96,85,192,107,288,138.7C384,171,480,213,576,202.7C672,192,768,128,864,117.3C960,107,1056,149,1152,181.3C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section>
        <About />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#17a2b8"
            fill-opacity="1"
            d="M0,64L34.3,64C68.6,64,137,64,206,96C274.3,128,343,192,411,218.7C480,245,549,235,617,218.7C685.7,203,754,181,823,186.7C891.4,192,960,224,1029,208C1097.1,192,1166,128,1234,96C1302.9,64,1371,64,1406,64L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section>
        <ProjectList />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,96L40,90.7C80,85,160,75,240,80C320,85,400,107,480,138.7C560,171,640,213,720,197.3C800,181,880,107,960,85.3C1040,64,1120,96,1200,122.7C1280,149,1360,171,1400,181.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section>
        <Experience />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#17a2b8"
            fill-opacity="1"
            d="M0,96L48,90.7C96,85,192,75,288,96C384,117,480,171,576,186.7C672,203,768,181,864,154.7C960,128,1056,96,1152,80C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section className="bg-info">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
