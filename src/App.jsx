import { useEffect, useState } from 'react'
import './App.css'

function App() {
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
        <button>buy me a coffee</button>
      </nav>
      <div className='upload_imgs'>
        <div>
          <div className='img_border' style={{backgroundImage: `url(${frontDisplay})`}}>
            <input type="file" accept="image/png" name="frontimg" id="frontimg" onChange={(e) => handleImg(e, "front")}/>
          </div>
          <h2>Front img (PNG)</h2>
        </div>
        <p>+</p>
        <div>
          <div className='img_border' style={{backgroundImage: `url(${backDisplay})`}}>
            <input type="file" accept="image/png, image/jpg, image/jpeg" name="backimg" id="backimg" onChange={(e) => handleImg(e, "back")}/>
          </div>
          <h2>Back img (PNG/JPG)</h2>
        </div>
      </div>
      <div>
        <div className='img_border_result'>
          <div style={{backgroundImage: `url(${backDisplay})`}}></div>
          <div style={{backgroundImage: `url(${frontDisplay})`}}></div>
        </div>
        <button className='download'>downloaden</button>
      </div>
    </div>
  )
}

export default App



