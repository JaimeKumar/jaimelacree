import './App.css';
import Music from './Music';
import $ from 'jquery';
import fl from './fl-white.png'
import protools from './pt-white.png'
import cubase from './cubase-white.png'
import { useState } from 'react';
import dlcv from './dlcv.png'
import studioPic from './IMG_4569.JPG'


const music = [
  {
    link: "https://open.spotify.com/track/1tBNOaEglfvRysXxnoEHii?si=fc25140a5fbd4277",
    role: ["Producer"]
  },
  {
    link: "https://open.spotify.com/album/44SXGx2vXit6ToxfwsxPa7?si=A6YIV9GST8ukRus0DCxO0w",
    role: ["Producer", "Mixing Engineer", "Recording Engineer"]
  },
  {
    link: "https://open.spotify.com/track/2Jx7s0MUNZfAsErQXnW5Te?si=ed5d18f98e114524",
    role: ["Mixing Engineer", "Mastering Engineer"]
  },
  {
    link: "https://open.spotify.com/track/1D9BrhWEZLbNSLAqmnoOtb?si=72ffecc75d084fe0",
    role: ["Producer", "Mixing Engineer", "Mastering Engineer"]
  },
  {
    link: "https://open.spotify.com/track/4YIBcsOtrCFQ6ohW3TaNSA?si=59b6b632c7024b44",
    role: ["Mixing Engineer", "Mastering Engineer"]
  },
  {
    link: "https://open.spotify.com/track/2ctAsSoKBoHdcP1tzKTT8f?si=2a1a1d28ea034360",
    role: ["Mixing Engineer", "Mastering Engineer"]
  },
  {
    link: "https://open.spotify.com/track/6e40VGmlR2S8yhmBNkISlP?si=d0f313adff394591",
    role: ["Mixing Engineer", "Recording Engineer", "Mastering Engineer"]
  },
  {
    link: "https://open.spotify.com/track/7kUDVLWuiEjQuFLAkPKDs8?si=b2ecbccd75da40ca",
    role: ["Mixing Engineer", "Mastering Engineer"]
  },
  {
    link: "https://open.spotify.com/track/1JdKbdtF1hgLhgo95vDs0E?si=23af40d84199418a",
    role: ["Mixing Engineer", "Mastering Engineer"]
  },
  {
    link: "https://open.spotify.com/track/7tiTOD3aGwrufKs2sUoy07?si=5a24b450e4214af0",
    role: ["Producer"]
  },
  {
    link: "https://open.spotify.com/track/6k3JgEm6gWw4tzPCqzRZfS?si=ce212794c89546d1",
    role: ["Producer"]
  },
  {
    link: "https://open.spotify.com/track/6erLItplQeq6Awk0zw7gEX?si=a5d3b7a7da104b39",
    role: ["Mixing Engineer", "Mastering Engineer"]
  },
  {
    link: "https://open.spotify.com/track/3hIS72jLEiMUWza0r9YsQX?si=4336196689414a8c",
    role: ["Mixing Engineer", "Mastering Engineer"]
  },
  {
    link: "https://open.spotify.com/track/54xMeBIt26EAch5R9GrbhW?si=f11631e02f824187",
    role: ["Producer", "Mixing Engineer", "Mastering Engineer"]
  },
  {
    link: "https://open.spotify.com/album/2Xb3vlag1ijGRORIedSyvE?si=kAe6flhrQAa_WWJy1OzgEA",
    role: ["Mixing Engineer", "Mastering Engineer"]
  }
]

export default function App() {

  const [sideOpen, setSide] = useState(false)
  const [tags, setTags] = useState([])

  function link(where) {
    let y = $(`#${where}`)[0].getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({top: y, behavior: "smooth"});
  }

  function showSideMenu() {
    $('.App').css('transform', `translateX(${sideOpen?120:0}px)`)
    setSide(p => !p)
  }

  function addTag(role) {
    setTags(prevTags => {
      const updatedTags = new Set(prevTags);
      updatedTags.add(role);
      return Array.from(updatedTags);
    })  
  }

  function removeTag(role) {
    setTags(prevTags => {
      const updatedTags = new Set(prevTags);
      updatedTags.delete(role);
      return Array.from(updatedTags);
    });
  }

  return (
    <div className="App">
      <div className="sideMenu">
        <div className="menuSticky">
          <ul>
            <li onClick={() => {link('home'); showSideMenu();}}>
              Home
            </li>
            <li onClick={() => {link('music'); showSideMenu();}}>
              Portfolio
            </li>
            <li onClick={() => {link('about'); showSideMenu();}}>
              About
            </li>
            <li onClick={() => {link('contact'); showSideMenu();}}>
              Contact
            </li>
          </ul>
        </div>
      </div>

      <div id="nav">
        <div className="menu" onClick={showSideMenu}>
          <div className="menuLine"></div>
          <div className="menuLine"></div>
          <div className="menuLine"></div>
        </div>
        <h1 onClick={() => {link('home')}}>jaimelacree</h1>
        <ul>
          <li onClick={() => {link('home')}}>Home</li>
          <li onClick={() => {link('music')}}>
            Portfolio
          </li>
          <li onClick={() => {link('about')}}>
            About
          </li>
          <li onClick={() => {link('contact')}}>
            Contact
          </li>
        </ul>
      </div>

      <div  id="home">
        <div className="home">
          <img className='bkImg' src={studioPic} alt="" />
          <div className="text">
            <h1>Sound Engineer</h1>
            <br />
            <p>Hi, I'm Jaime, PKA Jaime LaCree. I have 7+ years of experience as a producer, sound engineer, and mixing & mastering engineer.</p>
            <p>You can listen to my <u style={{cursor: 'pointer'}} onClick={() => {link('music')}}>portfolio</u> below.</p>
            <div className="ratings">
              <div className="rating">
                <img src={fl} alt="" />
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <span id='flSpan'>FL Studio</span>
              </div>
              <div className="rating">
                <img src={protools} alt="" />
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <span id='ptSpan'>Pro Tools</span>
              </div>
              <div className="rating">
                <img src={cubase} alt="" />
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star empty"></div>
                <div className="star empty"></div>
                <span id='cbSpan'>Cubase</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page" id="music">
        <h1>Portfolio</h1>
        <br /><br />
        <div className="tags">
        <b style={{marginTop: '4px', marginRight: '8px'}}>Filter:</b>
          {Array.from(music.reduce((roles, track) => {
            track.role.forEach(role => roles.add(role));
            return roles;
          }, new Set())).map(role => {
            return <div className={`tag${tags.includes(role)? ' selected':''}`} onClick={() => {tags.includes(role)?removeTag(role):addTag(role)}}>{role}</div>
          })}
        </div>
        <div className='musicProjs'>
          {music.map(item => {
            if (tags.length > 0 && !tags.some(tag => item.role.includes(tag))) return null;
            return <Music item={item} />
          })}
        </div>
      </div>

      <div className="page" id="about">
        <h1>About Me</h1>
        <br />
        <p>With seven years of experience in the music industry as a producer and sound engineer, I have had the opportunity to gain insight on the music industry at the top level. Having worked with leading A&R representatives from two of the largest record labels in the world, I have learned how the music industry operates and I am eager to learn more. I am ambitious, hardworking, and unwaveringly passionate about music. </p>
        <br />
        <p>Throughout my seven-year tenure as a freelance sound engineer, I honed my abilities in proactive client acquisition, meticulous administrative tasks, and effective multitasking. These skills have equipped me with the ability to maintain excellent working relationships with clients, understand their vision for their work, and ensure seamless communication. </p>
        <br />
        <p>I have a variety of skills including web-development (HTML, CSS, JavaScript, Python), graphic design, Microsoft Office, sound production and client communication. I am currently working part-time at a travel agency which involves a strong mind for logistics and time-management to balance this role with freelance work.</p>
      </div>

      <div className="page" id="contact">
        <h1>Contact Me</h1>
        <br />

        <div className="contactBlock">
          <p>
            <a href="Jaime Kumar CV.pdf" download={'Jaime Kumar CV.pdf'}>
              <img src={dlcv} alt="download cv" className='dlcv'/>
              Download CV
            </a>
          </p>
          <p>
            <a href = "mailto: jaime.kumar@hotmail.com">
              <i class="fa fa-envelope"></i>
              jaime.kumar@hotmail.com
            </a>
          </p>
          
          <p>
            <a href="tel:+447824539722">
              <i class="fa fa-phone"></i>
              +44 7824 539 722
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
