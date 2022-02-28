import isitaman from "../img/Isitaman.png";
import checkgizi from "../img/Checkgizi.png";
import pansaka from "../img/Pansaka.png";
import Portofolio from "../img/Portofolio.png";
import "./ProjectList.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectList = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const [project, setProject] = useState([
    {
      id: 1,
      title: "Isitaman",
      img: isitaman,
      Details:
        "Sebuah project bernama Isitaman berbasis Web Skripsi dari PT JAVINA, yang berfungsi untuk melakukan pengelolaan barang beserta transaksi pada E-Commerce toko bunga anggrek online yaitu isitaman. Project ini dikerjakan oleh 4 orang dalam satu tim project skripsi dengan tugasnya masing - masing. Untuk pembagian tugasnya 1 orang mengerjakan bagian backend, 1 orang untuk Frontend web di sisi pembeli, 1 orang untuk Mobile di sisi pembeli, dan ada saya bagian frontend di sisi penjual. Framework yang dipakai oleh frontend web maupun backend adalah Laravel dengan bantuan bootstrap untuk frontendnya, sedangkan untuk mobile full bahasa kotlin. Project ini akan memasuki tahap deployment setelah tahap pencarian dan perbaikan bug telah selesai.",
    },
    {
      id: 2,
      title: "Portofolio Web",
      date: "28 Februari 2022",
      img: Portofolio,
      Details: "Sebuah project portofolio mengenai diri saya sendiri, yang dibangun menggunakan framework ReactJS dan juga Bootstrap tanpa database. Berisikan Resume mengenai diri saya.",
    },
    {
      id: 3,
      title: "Pansaka",
      img: pansaka,
      Details:
        "Sebuah project bernama Backoffice PANSAKA berbasis Mobile ditugaskan dari internship di CV. Technobit Indonesia, yang berfungsi untuk mengontrol dan memonitor transaksi juga penjualan E-Commerce. Didalam pengerjaan project ini terdapat 2 bagian yang harus dikerjakan yaitu API dengan framework lumen dan juga Aplikasi Mobile Backoffice PANSAKA ini sendiri menggunakan bahasa pemrograman Kotlin. Untuk mengerjakan project ini saya melakukannya dengan seorang teman saya dan berbagi tugas.",
    },
    {
      id: 4,
      title: "Checkgizi",
      img: checkgizi,
      Details:
        "Sebuah project bernama Check Gizi berbasis Mobile dari seorang teman untuk Program Kreativitas Mahasiswa (PKM), yang berfungsi sebagai sistem informasi akan kebutuhan gizi pada anak. Project ini dikerjakan menggunakan bahasa kotlin dan dengan database dari firebase milik google.",
    },
  ]);

  return (
    <div class="bg-info">
      <div class="container pt-4" data-aos="fade-up">
        <div class="row text-center">
          <div class="col-md">
            <h2 className="text-white mb-5">My Projects</h2>
          </div>
        </div>
        <div class="row">
          {project.map((val) => (
            <div class="col-md-4 mb-3">
              <div class="card" key={val.id}>
                <img src={val.img} class="card-img-top" alt="Project Pansaka" height="300" />
                <div class="card-body">
                  <p class="card-text text-justify overflow-3">{val.Details}</p>
                  <Link className="btn btn-warning" to={`/ProjectDetail/${val.id}`} project={project}>
                    Detail Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
