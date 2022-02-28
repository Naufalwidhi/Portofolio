import { useState } from "react";
import { useParams } from "react-router-dom";
import isitaman from "../img/Isitaman.png";
import pansaka from "../img/Pansaka.png";
import checkgizi from "../img/Checkgizi.png";
import Portofolio from "../img/Portofolio.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectDetails = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const { id } = useParams();
  const [project, setProject] = useState([
    {
      id: 1,
      title: "Isitaman",
      img: isitaman,
      date: "01 November 2021 ~ Sekarang",
      tech: "PHP, Bootstrap, Laravel, MYSQL",
      Details:
        "Sebuah project bernama Isitaman berbasis Web Skripsi dari PT JAVINA, yang berfungsi untuk melakukan pengelolaan barang beserta transaksi pada E-Commerce toko bunga anggrek online yaitu isitaman. Project ini dikerjakan oleh 4 orang dalam satu tim project skripsi dengan tugasnya masing - masing. Untuk pembagian tugasnya 1 orang mengerjakan bagian backend, 1 orang untuk Frontend web di sisi pembeli, 1 orang untuk Mobile di sisi pembeli, dan ada saya bagian frontend di sisi penjual. Framework yang dipakai oleh frontend web maupun backend adalah Laravel dengan bantuan bootstrap untuk frontendnya, sedangkan untuk mobile full bahasa kotlin. Project ini akan memasuki tahap deployment setelah tahap pencarian dan perbaikan bug telah selesai.",
    },
    {
      id: 2,
      title: "Portofolio Web",
      date: "28 Februari 2022",
      img: Portofolio,
      tech: "React JS, Bootstrap",
      Details: "Sebuah project portofolio mengenai diri saya sendiri, yang dibangun menggunakan framework ReactJS dan juga Bootstrap tanpa database. Berisikan Resume mengenai diri saya.",
    },
    {
      id: 3,
      title: "Pansaka",
      date: "14 Juni 2021 ~ 14 Agustus 2021",
      img: pansaka,
      tech: "PHP, Lumen, Kotlin, MYSQL",
      Details:
        "Sebuah project bernama Backoffice PANSAKA berbasis Mobile ditugaskan dari internship di CV. Technobit Indonesia, yang berfungsi untuk mengontrol dan memonitor transaksi juga penjualan E-Commerce. Didalam pengerjaan project ini terdapat 2 bagian yang harus dikerjakan yaitu API dengan framework lumen dan juga Aplikasi Mobile Backoffice PANSAKA ini sendiri menggunakan bahasa pemrograman Kotlin. Untuk mengerjakan project ini saya melakukannya dengan seorang teman saya dan berbagi tugas.",
    },
    {
      id: 4,
      title: "Checkgizi",
      img: checkgizi,
      date: "24 Agustus 2020 ~ 07 September 2020",
      tech: "Firebase, No SQL, Kotlin",
      Details:
        "Sebuah project bernama Check Gizi berbasis Mobile dari seorang teman untuk Program Kreativitas Mahasiswa (PKM), yang berfungsi sebagai sistem informasi akan kebutuhan gizi pada anak. Project ini dikerjakan menggunakan bahasa kotlin dan dengan database dari firebase milik google.",
    },
  ]);

  return (
    <div className="ProjectDetails">
      <div className="container" data-aos="fade-right">
        {project
          .filter((projects) => projects.id == id)
          .map((val) => (
            <div className="row mt-5">
              <div className="col-md-4">
                <img src={val.img} alt="Project Profile" height="300" width="350" />
              </div>
              <div className="col-md-7 text-left ml-3 mt-5  ">
                <h1>{val.title}</h1>
                <p className="fs-2 fw-bold">{val.date}</p>
                <p className="text-justify">{val.Details}</p>
                <button disabled className="btn btn-warning">
                  {val.tech}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
