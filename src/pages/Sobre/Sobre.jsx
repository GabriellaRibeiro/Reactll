import Header from  '../../components/Header/Header'
import image from '../../assets/sobrefoto.svg'
import Imagem from '../../images/eu.jpg'
import Footer from '../../components/Footer/Footer'
import './sobre.css'

function Sobre() {
    return(
        <>
            <Header
                image={image}
                descrption="Ilustração de uma mulher"
            >
                Sobre mim
            </Header>
            <hr></hr>
            <div className="apresentacao">
            <img className='fotoPerfil' src={Imagem} />
            <div className="textos">
                <h2 className='title'>Oi, Me chamo Gabriella</h2>
                <p className='texto'>Desenvolvedora Front-End Júnior.</p>
                <p className='texto'>Possuo habilidades em HTML, CSS, JavaScript, Github, Git, e framework React.</p>
                <p className='texto'>Aluna da turma Front-End Todas Em Tech da Reprograma</p> 
                <p className='texto'>Formada em Design de Interiores pela Universidade Anhembi Morumbi</p>
            </div>
        </div>
            <Footer />
        </>
    )
    
   }
   
   
  export default Sobre
  