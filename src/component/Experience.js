import { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const [exp, setExp] = useState([
    {
      id: 1,
      title: "ASISTEN PRAKTIKUM PEMROGRAMAN INTEGRATIF",
      desc: "Membantu dosen mata kuliah Pemrograman Integratif dalam pemahaman materi mata kuliah dengan cara mempraktikan apa yang telah disampaikan oleh dosen penanggung jawab matakuliah tersebut",
      date: "31 Agustus 2021 - 22 November 2021",
    },
    {
      id: 2,
      title: "ASISTEN PRAKTIKUM PEMROGRAMAN MOBILE",
      desc: "Membantu dosen mata kuliah Pemrograman Mobile dalam pemahaman materi mata kuliah dengan cara mempraktikan apa yang telah disampaikan oleh dosen penanggung jawabmata kuliah tersebut. Membuat modul praktikum Pemrograman Mobile yang mendukung materi yangdisampaikan oleh dosen agar bisa langsung diterapkan.",
      date: "10 Juni 2020 - 10 Februari 2021",
    },
    {
      id: 3,
      title: "KEPENGURUSAN UKM RENANG UB - ORGANISASI",
      desc: "Sebagai Ketua Divisi Publikasi UKM Renang Universitas Brawijaya. Divisi publikasibertanggung jawab atas seluruh media sosial dan juga desain untuk laporan kegiatan yangakan dipublikasikan di sosial media UKM Renang Universitas Brawijaya.",
      date: "10 Januari 2019 - 10 Januari 2020",
    },
    {
      id: 4,
      title: "EKSEKUTIF MAHASISWA TEKNOLOGI INFORMASI - ORGANISASI",
      desc: "Sebagai staff divisi Social Environment Eksekutif Mahasiswa Teknologi Informasi. DivisiSocial Environment bertugas untuk menghubungkan antara mahasiswa dengan masyarakatluas di bidang sosial maupun lingkungan.",
      date: "10 Januari 2019 - 10 Januari 2020",
    },
  ]);
  return (
    <div className="Experience">
      <div className="container pt-4 mb-4" data-aos="fade-right">
        <div className="row text-center">
          <div className="col-md">
            <h2 className="mb-5">My Experience</h2>
          </div>
        </div>
        <div className="row text-left">
          {exp.map((val) => (
            <div className="col-md-12 my-3">
              <div className="card" key={val.id}>
                <div className="card-body">
                  <h5 className="card-title">{val.title}</h5>
                  <span>{val.date}</span>
                  <p className="card-text">{val.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
