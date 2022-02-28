import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="bg-info">
      <div class="container pt-4 pb-5 text-white" data-aos="fade-up">
        <div class="row text-center mb-3">
          <div class="col">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td>
                    <i class="bi bi-globe"></i>
                  </td>
                  <th>Website</th>
                  <td>:</td>
                  <td>naufalwidhi-portofolio.herokuapp.com</td>
                </tr>
                <tr>
                  <td>
                    <i class="bi bi-envelope"></i>
                  </td>
                  <th>E-Mail</th>
                  <td>:</td>
                  <td>naufalwidhi1@gmail.com</td>
                </tr>
                <tr>
                  <td>
                    <i class="bi bi-github"></i>
                  </td>
                  <th>Github</th>
                  <td>:</td>
                  <td>github.com/Naufalwidhi</td>
                </tr>
                <tr>
                  <td>
                    <i class="bi bi-facebook"></i>
                  </td>
                  <th>Facebook</th>
                  <td>:</td>
                  <td>fb.me/InaufalwidhiI</td>
                </tr>
                <tr>
                  <td>
                    <i class="bi bi-linkedin"></i>
                  </td>
                  <th>Linked In</th>
                  <td>:</td>
                  <td>www.linkedin.com/in/naufal-widhi-3407441b3/</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
