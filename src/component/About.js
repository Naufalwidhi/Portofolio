import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div class="container mt-4" data-aos="fade-up">
      <div class="row text-center mb-3">
        <div class="col-md">
          <h2>About Me</h2>
        </div>
      </div>
      <div class="row justify-content-center fs-5 text-center mt-2">
        <div class="col-md-10">
          <p class="fs-3 text-justify">
            Saya adalah orang yang sangat antusias dengan segala hal berbau teknologi jugapemrograman dan selalu merasa tertantang untuk mengerjakan projek-projek barupembuatan aplikasi berbasis web ataupun mobile dengan kerja sama tim yang
            baik, mudahmempelajari hal baru, jujur dan tepat waktu. Saya berminat untuk lebih mengembangkan danmengasah skill saya di bidang front-end developer baik itu aplikasi web maupun mobile,sehingga waktu senggang saya manfaatkan
            untuk belajar membuat sebuah aplikasi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
