import { useEffect, useState } from 'react'
import { Themeprovider } from './Contexts/themes'
import ThemeBtn from './Components/butn'
import Card from './Components/Cards'

function App() {
  const [thememode, setthememode] = useState('light') //default state
  const darktheme = () => {
    setthememode('dark')
  }
  const lighttheme = () => {
    setthememode('light')
  }
  //actual change in the theme
  useEffect(() => {
    const htmlelement=document.querySelector('html')
    htmlelement.classList.remove('light', 'dark')
    htmlelement.classList.add(thememode)
    
  } ,[thememode])

  return (
    <Themeprovider value={{ thememode, darktheme, lighttheme }}>
      <div className="flex flex-wrap min-h-screen items-center ">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>

          </div>

          <div className="w-full max-w-sm mx-auto">
          <Card/>
          </div>
        </div>
      </div>

    </Themeprovider>

  )
}

export default App
