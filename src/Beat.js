import React, { useEffect, useState } from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";

export default function Beat({beat, triggerStop, buyBeat}) {
    const [audio, setAudio] = useState(new Audio(beat.link))
    const [playing, setPlaying] = useState(false)
    const [prog, setProg] = useState(0)

    function playClick() {
        if (playing) {
            audio.pause();
        } else {
            audio.play();
            triggerStop(beat.id)
        }
        setPlaying(p=>!p)
    }

    function setProgress(e) {
        if (e.target.id !== `beat${beat.id}`) return;
        let pos = ((e.clientX - document.getElementById(`beat${beat.id}`).offsetLeft) / document.getElementById(`beat${beat.id}`).offsetWidth);
        audio.currentTime = pos * audio.duration;
    }

    function buy() {
        buyBeat(beat.id)
    }

    useEffect(() => {
        setInterval(() => {
            setProg((audio.currentTime/audio.duration) * 100)
        }, 500)
    }, [])

    useEffect(() => {
        audio.pause()
        setPlaying(false)
    }, [beat.trigger])

    useEffect(() => {
        // Cleanup function
        return () => {
          audio.pause();
          audio.currentTime = 0;
        }
      }, [])

  return (
    <div className='beat' onClick={setProgress} id={`beat${beat.id}`}>
      <div style={{cursor: 'pointer', display: 'flex', alignItems: 'center', marginLeft: '10px'}} onClick={playClick}>{!playing?<FaCirclePlay size={20} />:<FaPauseCircle size={20} />}</div>
      <span>{beat.title}</span>&#x2022;
      <span style={{color: 'grey', fontSize: '0.9rem'}}>{beat.tempo}BPM</span>
      <div style={{position: 'absolute', right: '20px', cursor: 'pointer'}} onClick={buy}><FaCartArrowDown size={20} /></div>
      <div className="progress" style={{width: prog + '%'}}></div>
    </div>
  )
}
