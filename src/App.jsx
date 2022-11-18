import { useState } from 'react'
import './App.css'

function App() {
  const [frontFoto, setFrontFoto] = useState()
  const [backFoto, setBackFoto] = useState()

  return (
    <div className='content'>
      <nav className='navigation'>
        <img src="/logo.svg" alt="logo" width={40}/>
        <button>buy me a coffee</button>
      </nav>
      <div className='upload_imgs'>
        <div>
          <div className='img_border'></div>
          <h2>Front img (PNG)</h2>
        </div>
        <p>+</p>
        <div>
          <div className='img_border'></div>
          <h2>Back img (PNG/JPG)</h2>
        </div>
      </div>
      <div>
        <div className='img_border_result'></div>
        <button className='download'>downloaden</button>
      </div>
    </div>
  )
}

export default App
