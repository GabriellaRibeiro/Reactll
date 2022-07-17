import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from '../pages/Sobre/Sobre'
import Portfolio from '../pages/Portfolio/Portfolio'
import Comentarios from '../pages/Comentario/Comentarios'
import Menu from '../components/Menu/Menu'
import Contato from '../pages/Contato/Contato'
import Diario from '../pages/Diario/Diario'


function ApplicationRoutes() {
    return(
        <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/" element={<Sobre />}/>
            <Route path="portfolio" element={<Portfolio/>}/>
            <Route path="comentarios" element={<Comentarios/>}/>
            <Route path="contato" element={<Contato/>}/>
            <Route path="diario" element={<Diario/>}/>
        </Routes>
        </BrowserRouter>
        
    )

}

export default ApplicationRoutes
