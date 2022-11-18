import { useState } from 'react'
import './App.css'

function App() {
  const [frontFoto, setFrontFoto] = useState()
  const [backFoto, setBackFoto] = useState()

  return (
    <div className='content'>
      <div className='upload_imgs'>
        <div>
          <div className='img_border'></div>
          <h2>Front img (PNG)</h2>
        </div>
        <p>+</p>
        <div>
          <div className='img_border'></div>
          <h2>Back img</h2>
        </div>
      </div>
      <div>
        <div className='img_border'></div>
        <button className='download'>downloaden</button>
      </div>
    </div>
  )
}

export default App
