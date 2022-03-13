import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router,} from "react-router-dom";
import Navbar from './components/1.navbar';
import ScheletroStoria from './components/4.scheletroStoria';
import MenuLista from './components/7.menu';
import GalleriaImmagini from './components/8.galleriaImm';
import Contatti from './components/9.contatti';
import Footer from './components/12.footer';
import Titoli from './components/2.titoli';
import Titoli1 from './components/3.titoli1';

import menu from './img/menu1.avif';
import pane from './img/pane.avif';
import carbonara from './img/carbonara.avif';
import carne from './img/carne.avif';
import patate from './img/patate.avif';
import dolci from './img/dolci.avif';
import frutta from './img/frutta.avif';
import acqua from './img/acqua.avif';
import vino from './img/vino.avif';

import PDF from "./pdf/MenuAngoloDabruzzo.pdf";

import Loading from './components/Loading';
import $ from "jquery";

import AOS from 'aos';
import 'aos/dist/aos.css';




const menus = [
  { id: 0, megatitolo: "ANTIPASTI", titolo: "Capocollo all'Abruzzese :", prezzo: "8", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 1, titolo: "Polpettine d'Agnello all'Abruzzese", prezzo: "7", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 2, titolo: "Soppressata Abruzzese", prezzo: "8", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 3, titolo: "Frittata alla Campagnola", prezzo: "7", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 4, titolo: "Salame Nostrano", prezzo: "8", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 5, titolo: "Prosciutto Crudo", prezzo: "9", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 6, titolo: "Bresaola Carpacciata", prezzo: "11", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 7, titolo: "Antipasti Misti della Casa", prezzo: "9", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 8, titolo: "Olive Ascolane", prezzo: "10", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 9, titolo: "Antipasto Sott'olio", prezzo: "9", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 10, titolo: "Crudo al Coltello", prezzo: "10", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 11, titolo: "Burrata", prezzo: "10", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 12, titolo: "Bufala", prezzo: "10", sezione: "antipasto", numero: "00", dollaro: "€" },
  {},

  { id: 13, megatitolo: "PRIMI", titolo: "Tris di chitarra, schiaffoni e gnocchi", prezzo: "10", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 14, titolo: "Zuppa di cardi all’Abruzzese", prezzo: "9", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 15, titolo: "Paccheri alla Giannino", prezzo: "11", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 16, titolo: "Chitarra alla Mugnaia", prezzo: "11", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 17, titolo: "Anelli alla pecorara", prezzo: "11", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 18, titolo: "Maccheroni alla chitarra", prezzo: "9", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 19, titolo: "Schiaffoni della cuoca", prezzo: "10", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 20, titolo: "Caratelle rosa", prezzo: "9", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 21, titolo: "Sagne e fagioli all’Abruzzese", prezzo: "9", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 22, titolo: "Spaghetti alla d’anunzio", prezzo: "9", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 23, titolo: "Gnocchetti verdi alla casalinga", prezzo: "9", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 24, titolo: "Tagliatelle al ragù di cinghiale/anatra", prezzo: "11", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 25, titolo: "Tortellini in brodo", prezzo: "9", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 26, titolo: "Tortellini pasticciati", prezzo: "9", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 27, titolo: "Misto di gnocchi e tortellini", prezzo: "9", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 28, titolo: "Tagliatelle alla casalinga", prezzo: "9", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 29, titolo: "Gnocchi ai quattro formaggi", prezzo: "9", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 30, titolo: "Pallote Cace ova", prezzo: "9", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 31, titolo: "Minestrone di verdura", prezzo: "9", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 32, titolo: "Chitarra alla carbonara", prezzo: "10", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 33, titolo: "Maccheroni alla matriciana", prezzo: "9", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 34, titolo: "Spaghetti aglio, olio e peperoncino", prezzo: "9", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 35, titolo: "Maccheroni e melanzane e ricotta", prezzo: "9", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 36, titolo: "Tagliatelle al pesto", prezzo: "9", sezione: "primo", numero: "00", dollaro: "€" },

  { id: 37, megatitolo: "SECONDI", titolo: "Agnello e scamorza alla griglia", prezzo: "14", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 38, titolo: "Grigliata mista all’Abruzzese", prezzo: "15", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 39, titolo: "Porchetta di Campli al forno", prezzo: "17", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 40, titolo: "Maialino Abruzzese al forno", prezzo: "17", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 41, titolo: "Peperoni e zucchine ripiene al forno", prezzo: "13", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 42, titolo: "Costolette d’agnello alla scottadito", prezzo: "14", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 43, titolo: "Scamorza Abruzzese alla griglia", prezzo: "12", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 44, titolo: "Zucchine,scamorza e olive ascolane", prezzo: "13", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 45, titolo: "Polpettone all’Abruzzese con funghi", prezzo: "12", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 46, titolo: "Polpettine d’agnello con patate", prezzo: "11", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 47, titolo: "Vitello tonnato con capperi", prezzo: "12", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 48, titolo: "Carpaccio con grana e rucola", prezzo: "13", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 49, titolo: "Mozzarelline dorate", prezzo: "10", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 50, titolo: "Arrosto di vitello all forno con patate", prezzo: "14", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 51, titolo: "Coniglio al forno.", prezzo: "13", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 52, titolo: "Scaloppine al limone.", prezzo: "14", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 53, titolo: "Nodino di vitello alla griglia", prezzo: "15", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 54, titolo: "Galletto alla diavola", prezzo: "16", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 55, titolo: "Agnello al forno all’Abruzzese con patate", prezzo: "16", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 56, titolo: "Arrosticini", prezzo: "11", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 57, titolo: "Paillard di vitello alla griglia", prezzo: "19", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 58, titolo: "Tagliata", prezzo: "16/18", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 59, titolo: "Fiorentina per due con verdure e patate (1 Kg)", prezzo: "48", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 60, titolo: "Filetto di maialino Abruzzese", prezzo: "17", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 61, titolo: "Pecora alla callara", prezzo: "17", sezione: "secondo", numero: "00", dollaro: "€" },
  {},

  { id: 62, megatitolo: "CONTORNI", titolo: "Patate Fritte", prezzo: "4", sezione: "contorno", numero: "00", dollaro: "€" },
  { id: 63, titolo: "Insalata mista", prezzo: "4", sezione: "contorno", numero: "00", dollaro: "€" },
  { id: 64, titolo: "Insalata di pomodori, finocchi.", prezzo: "4", sezione: "contorno", numero: "00", dollaro: "€" },
  { id: 65, titolo: "Verdura cotta all’olio", prezzo: "4", sezione: "contorno", numero: "00", dollaro: "€" },
  { id: 66, titolo: "Antipasti/verdura al carello", prezzo: "4", sezione: "contorno", numero: "00", dollaro: "€" },
  {},

  { id: 67, megatitolo: "DOLCI", titolo: "Dolcetti caratteristici Abruzzesi", prezzo: "4", sezione: "dolci", numero: "00", dollaro: "€" },
  { id: 68, titolo: "Dolcetti caratteristici Abruzzesi con Vin Santo", prezzo: "6", sezione: "dolci", numero: "00", dollaro: "€" },
  { id: 69, titolo: "Tiramisù", prezzo: "5", sezione: "dolci", numero: "00", dollaro: "€" },
  { id: 70, titolo: "Millefoglie", prezzo: "6", sezione: "dolci", numero: "00", dollaro: "€" },
  { id: 71, titolo: "Gelato alla crema affogato all’amaro Abruzzese", prezzo: "6", sezione: "dolci", numero: "00", dollaro: "€" },
  { id: 72, titolo: "Semifreddo affogato al caffè", prezzo: "6", sezione: "dolci", numero: "00", dollaro: "€" },
  { id: 73, titolo: "Sorbetto al Limone", prezzo: "6", sezione: "dolci", numero: "00", dollaro: "€" },
  { id: 74, titolo: "Sorbetto mela verde", prezzo: "6", sezione: "dolci", numero: "00", dollaro: "€" },
  { id: 75, titolo: "Tartufo", prezzo: "5", sezione: "dolci", numero: "00", dollaro: "€" },
  { id: 76, titolo: "Pannacotta", prezzo: "5", sezione: "dolci", numero: "00", dollaro: "€" },
  { id: 77, titolo: "Dolci del giorno con gelato", prezzo: "6", sezione: "dolci", numero: "00", dollaro: "€" },
  {},

  { id: 78, megatitolo: "FRUTTA", titolo: "Frutta di stagione", prezzo: "5,50/6,50", sezione: "frutta", numero: "00", dollaro: "€" },
  { id: 79, titolo: "Ananas al Maraschino", prezzo: "6", sezione: "frutta", numero: "00", dollaro: "€" },

  { id: 80, megatitolo: "BEVANDE", titolo: "Acqua minerale (75 cl) ", prezzo: "6", sezione: "bevande", numero: "00", dollaro: "€" },
  { id: 81, titolo: "Bibita in lattina", prezzo: "6", sezione: "bevande", numero: "00", dollaro: "€" },
  { id: 82, titolo: "Birra (66 cl)", prezzo: "6", sezione: "bevande", numero: "00", dollaro: "€" },
  {},

  { id: 83, megatitolo: "VINI", titolo: "VINI DELLA CASA IN CARAFFA:1/4 Litro", prezzo: "3", sezione: "vino", numero: "00", dollaro: "€" },
  { id: 84, titolo: "Montepulciano d’Abruzzo", prezzo: "17", sezione: "vino", numero: "00", dollaro: "€" },

  { id: 85, titolo: "VINI DELLA CASA IN CARAFFA:1/2 Litro", prezzo: "6", sezione: "vino", numero: "00", dollaro: "€" },
  { id: 86, titolo: "Contea Bordino", prezzo: "17", sezione: "vino", numero: "00", dollaro: "€" },

  { id: 87, titolo: "VINI DELLA CASA IN CARAFFA:1 Litro", prezzo: "10", sezione: "vino", numero: "00", dollaro: "€" },

  { id: 88, titolo: "Cerasuolo Rosato d’Abruzzo", prezzo: "17", sezione: "vino", numero: "00", dollaro: "€" },
  { id: 89, titolo: "Trebbiano d’Abruzzo", prezzo: "17", sezione: "vino", numero: "00", dollaro: "€" },
  { id: 90, titolo: "Montepulciano Jorio", prezzo: "25", sezione: "vino", numero: "00", dollaro: "€" },
  { id: 91, titolo: "Marina Cvetic’", prezzo: "30", sezione: "vino", numero: "00", dollaro: "€" },
  { id: 92, titolo: "Montepulciano Zaccagnini ", prezzo: "17", sezione: "vino", numero: "00", dollaro: "€" },
  { id: 93, titolo: "Montepulciano Masciarelli", prezzo: "17", sezione: "vino", numero: "00", dollaro: "€" },
  { id: 94, titolo: "Montepulciano illuminati", prezzo: "17", sezione: "vino", numero: "00", dollaro: "€" },
  { id: 95, titolo: "Vin Santo", prezzo: "15", sezione: "vino", numero: "00", dollaro: "€" },
];

function App() {

  const [state, setState] = useState(menus);
  const ref = useRef(null);



  const filtra = (e) => {
    let word = e.target.value;

    if (word === 'All') {
      setState(menus);
    }
    else if (word === 'antipasto') {
      const filtered = menus.filter(menu => menu.sezione === 'antipasto');
      setState(filtered);
    }
    else if (word === 'primo') {
      const filtered = menus.filter(menu => menu.sezione === 'primo');
      setState(filtered);
    }
    else if (word === 'secondo') {
      const filtered = menus.filter(menu => menu.sezione === 'secondo');
      setState(filtered);
    }
    else if (word === 'contorno') {
      const filtered = menus.filter(menu => menu.sezione === 'contorno');
      setState(filtered);
    }
    else if (word === 'dolci') {
      const filtered = menus.filter(menu => menu.sezione === 'dolci');
      setState(filtered);
    }
    else if (word === 'frutta') {
      const filtered = menus.filter(menu => menu.sezione === 'frutta');
      setState(filtered);
    }
    else if (word === 'bevande') {
      const filtered = menus.filter(menu => menu.sezione === 'bevande');
      setState(filtered);
    }
    else if (word === 'vino') {
      const filtered = menus.filter(menu => menu.sezione === 'vino');
      setState(filtered);
    }
  }






  const[loading, setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[]);



  useEffect(() => {
    setTimeout(() => {
      ref.current.click();
    }, 1000);
  }, []);



  $(function() {
    AOS.init();
});


  return (


    <Router basename={window.location.pathname || ''}>

      <section id="home"></section>
      
      <div>
        <Navbar />
        <section id="chisiamo"> </section>
        <Titoli title="CHI SIAMO" />
        <ScheletroStoria />
        <section id="menu"></section>
        <Titoli1 title="MENU" />
        {/*BOTTONI MENU*/}
        <div className="container-fluid" data-aos="fade-up" data-aos-mirror='false' data-aos-once='true'>

          <div className="row photo-grid card1-tall card1-wide">
            <div data-filter="menu" className="card1 imgSize" style={{ backgroundImage: `url(${menu})` }}><a type="button" className="button" href={PDF} download="MenuAngoloDabruzzo.pdf">SCARICA IL MENU COMPLETO</a></div>
          </div>

          <div className="row photo-grid card1-tall card1-wide">
            <div data-filter="menu" className="card1 imgSize" style={{ backgroundImage: `url(${pane})` }}><button ref={ref} className="button" onClick={filtra} value="antipasto">ANTIPASTO</button></div>
            <div data-filter="menu" className="card1 imgSize" style={{ backgroundImage: `url(${carbonara})` }}><button className="button" onClick={filtra} value="primo">PRIMO</button></div>
            <div data-filter="menu" className="card1 imgSize" style={{ backgroundImage: `url(${carne})` }}><button className="button" onClick={filtra} value="secondo">SECONDO</button></div>
            <div data-filter="menu" className="card1 imgSize" style={{ backgroundImage: `url(${patate})` }}><button className="button" onClick={filtra} value="contorno">CONTORNO</button></div>

          </div>
          <div className="row photo-grid card1-tall card1-wide">
            <div data-filter="menu" className="card1 imgSize" style={{ backgroundImage: `url(${dolci})` }}><button className="button" onClick={filtra} value="dolci">DOLCI</button></div>
            <div data-filter="menu" className="card1 imgSize" style={{ backgroundImage: `url(${frutta})` }}><button className="button" onClick={filtra} value="frutta">FRUTTA</button></div>
            <div data-filter="menu" className="card1 imgSize" style={{ backgroundImage: `url(${acqua})` }}><button className="button" onClick={filtra} value="bevande">BEVANDE</button></div>
            <div data-filter="menu" className="card1 imgSize" style={{ backgroundImage: `url(${vino})` }}><button className="button" onClick={filtra} value="vino">VINO</button></div>
          </div>
        </div>

        {/*MENU*/}
        <div className='clearfix sfondoMenu'>
          <div className="container-fluid">
            {state.map((menu,index) => (
              <MenuLista key={index} menu={menu} sezione={menu.sezione} />
            ))}
          </div>
        </div>
        <section id="galleria"></section>
        <Titoli title="GALLERIA" />
        <GalleriaImmagini />
        <section id="contatti"></section>
        <Titoli1 title="CONTATTI" />
        <Contatti />
        <div className="container-fluid footer"><Footer /></div>
      </div>
      
    </Router>
  );
}

export default App;
