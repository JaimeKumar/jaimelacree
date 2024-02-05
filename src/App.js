import './App.css';
import Music from './Music';
import $ from 'jquery';
import fl from './fl-white.png'
import protools from './pt-white.png'
import cubase from './cubase-white.png'
import { useState } from 'react';
import dlcv from './dlcv.png'
import Beat from './Beat';
import studioPic from './IMG_4569.JPG'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Buy from './Buy';


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
  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
  }, []);
  
  const [beats, setBeats] = useState(
    [
      {
        id: 0,
        title: 'Liquid',
        tempo: 90,
        link: './beats/liquid 90.mp3',
        tags: ['Guitar'],
        trigger: -1
      },
      {
        id: 1,
        title: 'Velo',
        tempo: 160,
        link: './beats/velo 160.mp3',
        tags: ['Synth'],
        trigger: -1
      },
      {
        id: 2,
        title: 'Berry',
        tempo: 140,
        link: './beats/berry 140.mp3',
        tags: ['Hard'],
        trigger: -1
      },
      {
        id: 3,
        title: 'City',
        tempo: 162,
        link: './beats/city 162.mp3',
        tags: ['Plug Type'],
        trigger: -1
      },
      {
        id: 4,
        title: 'Dither',
        tempo: 160,
        link: './beats/dither 160.mp3',
        tags: ['East Asian'],
        trigger: -1
      },
      {
        id: 5,
        title: 'Dunnottar',
        tempo: 120,
        link: './beats/dunnottar 120.mp3',
        tags: ['Strange', 'Bounce'],
        trigger: -1
      },
      {
        id: 6,
        title: 'Space',
        tempo: 164,
        link: './beats/space 164.mp3',
        tags: ['Sad'],
        trigger: -1
      },
      {
        id: 7,
        title: 'Sky',
        tempo: 165,
        link: './beats/sky 165.mp3',
        tags: ['Dark'],
        trigger: -1
      },
    ]
  )
  const [sideOpen, setSide] = useState(false)
  const [tags, setTags] = useState([])

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

  function stopPlays(id) {
    let temp = [...beats];
    temp.filter(b=>b.id!==id).forEach(b => {
      b.trigger*= -1;
    })
    setBeats(temp)
  }

  function purchaseBeat(id) {
    window.location.href = `/purchase/${id}`;
  }

  return (
    <Router>
      <div className="App">
        <div className="sideMenu">
          <div className="menuSticky">
            <ul>
              <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
                <li>
                  Home
                </li>
              </Link>
              <Link to='/music' style={{textDecoration: 'none', color: 'black'}}>
                <li>
                  Portfolio
                </li>
              </Link>
              {/* <Link to='/beats' style={{textDecoration: 'none', color: 'black'}}>
                <li>
                  Beat Store
                </li>
              </Link> */}
              <Link to='/contact' style={{textDecoration: 'none', color: 'black'}}>
                <li>
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div id="nav">
          <div className="menu" onClick={showSideMenu}>
            <div className="menuLine"></div>
            <div className="menuLine"></div>
            <div className="menuLine"></div>
          </div>
          <h1>jaimelacree</h1>
          <ul>
            <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
              <li>
                Home
              </li>
            </Link>
            <Link to='/music' style={{textDecoration: 'none', color: 'black'}}>
              <li>
                Portfolio
              </li>
            </Link>
            {/* <Link to='/beats' style={{textDecoration: 'none', color: 'black'}}>
              <li>
                Beat Store
              </li>
            </Link> */}
            <Link to='/contact' style={{textDecoration: 'none', color: 'black'}}>
              <li>
                Contact
              </li>
            </Link>
          </ul>
        </div>

        <Routes>
          <Route path='/' element={
            <div id="home">
              <div className="home">
              <img className='bkImg' src={studioPic} alt="" />
              <div className="text">
                  {/* <h1>Sound Engineer</h1> */}
                  {/* <br /> */}
                  <p>Hi, I'm Jaime, PKA Jaime LaCree. I have 7+ years of experience as a producer and mixing & mastering engineer.</p>
                  <br />
                  <p>You can hear some of my favourite releases I've produced, mixed, or mastered <Link to='/music' style={{color: 'white'}}>here</Link>.</p>
                  {/* <p>You can hear some of my favourite releases I've produced, mixed, or mastered <Link to='/music' style={{color: 'white'}}>here</Link>, or purchase beats from the <Link to='/music' style={{color: 'white'}}>Beat Store.</Link></p> */}
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
                      <div className="star"></div>
                      <div className="star empty"></div>
                      <span id='cbSpan'>Cubase</span>
                  </div>
                  </div>
              </div>
              </div>
            </div>
          }></Route>

          {/* <Route path='/beats' element={
            <div className="page" id="beats">
              <h1 style={{marginBottom: '20px'}}>Beat Store</h1>
              {beats.map(b => {
                return <Beat beat={b} triggerStop={stopPlays} buyBeat={purchaseBeat} />
              })}
            </div>
          }></Route> */}

          <Route path='/music' element={
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
          }></Route>

          <Route path='/contact' element={
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
                  <a href = "mailto: jaimelacree@gmail.com">
                    <i className="fa fa-envelope"></i>
                    jaimelacree@gmail.com
                  </a>
                </p>
                
                <p>
                  <a href="tel:+447824539722">
                    <i className="fa fa-phone"></i>
                    +44 7824 539 722
                  </a>
                </p>
              </div>
            </div>
          }></Route>

          {/* <Route path='/purchase/:beatID' element={<Buy beats={beats}/>}></Route> */}
        </Routes>

      </div>
    </Router>
  );
};
