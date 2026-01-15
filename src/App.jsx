//use browserrouter for routing
import { BrowserRouter } from 'react-router-dom'

//import * as Layout from './layout'
import Header from './layout/Header'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Main from './layout/Main'






function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
