import React, { useContext } from "react";
import './Portfolio.css';
import Gambar1 from "../../img/gambar1.png";
import Gambar2 from "../../img/gambar2.png";
import Gambar3 from "../../img/gambar3.png";
import Gambar4 from "../../img/gambar4.png";
import Gambar5 from "../../img/gambar5.png";
import Gambar6 from "../../img/gambar6.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="photo-gallery" id="portfolio">
      <h2>
        <span style={{color: darkMode ? 'white' : ''}}>Recent Projects</span>
        <span>Portfolio</span>
      </h2>
      {images.map((image) => (
        <div className="photo-wrapper" key={image.alt}>
          <img src={image.src} alt={image.alt} className="photo" />
          <p style={{fontSize: '1.5rem', opacity: 0.5, color: 'blue'}}>{image.name}</p> {/* menambahkan keterangan nama */}
        </div>
      ))}
    </div>
  );  
};

const images = [
  {
    src: Gambar1,
    alt: 'image 1',
    name: 'website kelas',
  },
  {
    src: Gambar2,
    alt: 'image 2',
    name: 'aplikasi toko',
  },
  {
    src: Gambar3,
    alt: 'image 3',
    name: 'portfolio menggunakan bootstrap 4',
  },
  {
    src: Gambar4,
    alt: 'image 4',
    name: 'aplikasi absensi berbasis web dengan fitur scan barcode',
  },
  {
    src: Gambar5,
    alt: 'image 5',
    name: 'project company profil PT.Tiarindo Devisi Transportasi',
  },
  {
    src: Gambar6,
    alt: 'image 6',
    name: 'website smk',
  },
];

export default Portfolio;
