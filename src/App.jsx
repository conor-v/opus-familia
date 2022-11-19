import { useEffect, useRef, useState } from 'react'
import './App.css'
import exportAsImage from './hooks/exportAsImage'

function App() {
  const exportRef = useRef()
  const [frontFoto, setFrontFoto] = useState()
  const [frontDisplay, setFrontDisplay] = useState()
  const [backFoto, setBackFoto] = useState()
  const [backDisplay, setBackDisplay] = useState()

  useEffect(() => {
    if (frontFoto) {
      
      setFrontDisplay(URL.createObjectURL(frontFoto[0]))
    }
    if (backFoto) {
      setBackDisplay(URL.createObjectURL(backFoto[0]))
    }
  }, [frontFoto, backFoto])

  const handleImg = (e, place) => {
    if (place === "front") {
      setFrontFoto(e.target.files)
    } else {
      setBackFoto(e.target.files)
    }
  }

  return (
    <div className='content'>
      <nav className='navigation'>
        <img src="/logo.svg" alt="logo" width={40}/>
 
      </nav>
      <div className='upload_imgs'>
        <div className='upload_ing_container'>
          <div className='img_border' style={{backgroundImage: `url(${frontDisplay})`}}></div>
          <input style={{width: "50%"}} type="file" accept="image/png" name="frontimg" id="frontimg" onChange={(e) => handleImg(e, "front")}/>
          <h2>Front img (PNG)</h2>
        </div>
        <p>+</p>
        <div className='upload_ing_container'>
          <div className='img_border' style={{backgroundImage: `url(${backDisplay})`}}></div>
          <input style={{width: "50%"}} type="file" accept="image/png, image/jpg, image/jpeg" name="backimg" id="backimg" onChange={(e) => handleImg(e, "back")}/>
          <h2>Back img (PNG/JPG)</h2>
        </div>
      </div>
      <div>
        <div className='img_border_result' ref={exportRef}>
         
          <img src={backDisplay} alt="" />
          <img src={frontDisplay} alt="" />
          
        </div>
        <button className='download' disabled={frontFoto && backFoto ? false : true} onClick={() => exportAsImage(exportRef.current, "profile")}>downloaden</button>
      </div>
    </div>
  )
}

export default App



