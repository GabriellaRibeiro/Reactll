import Header from  '../../components/Header/Header'
import image from '../../assets/contato.svg'
import Cards from '../../components/Cards/Cards'
import Github from '../../images/github.webp'
import Linkedin from '../../images/linkedin.webp'
import Email from '../../images/email.webp'
import './contato.css'
import Footer from '../../components/Footer/Footer'

function Contato() {
    return(
        <>  
        <Header image={image}
        description="Ilustração de uma mulher">Meus Contatos</Header>
        <div className='container-cards'>        
        <Cards image={Linkedin} title="LinkedIn" link="https://www.linkedin.com/in/gabriella--ribeiro/"/>
        <Cards image={Github} title="Github" link='https://github.com/GabriellaRibeiro'/>
        <Cards image={Email} text ="gabriellaribeiro_lupita@hotmail.com" />
        </div>

        <Footer />  
        
        </>
    )
    
   }
   
   
  export default Contato