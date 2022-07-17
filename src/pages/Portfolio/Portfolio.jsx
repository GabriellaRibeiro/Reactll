import { useState, useEffect} from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import axios from 'axios'

import Header from  '../../components/Header/Header'
import image from '../../assets/portfolio.svg'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'

const list = [
    {
      id: 1,
      nome: 'M de Maravilhosa',
      descricao: 'Um site sobre a história  dada Luisa mell.',
      conteudo: 'Feito com html e css.',
      imagem: 'https://media.giphy.com/media/nHnbaOsRbanuNPFhaA/giphy.gif',
      link: 'https://m-de-maravilhosa-gabriella-ribeiro.netlify.app/'
    },
    {
      id: 2,
      nome: 'TO do list',
      descricao: 'Uma aplicação em JavaScript para fazer um todo list ',
      conteudo: 'JavaScript.',
      imagem: 'https://media.giphy.com/media/rkcLYAY4dKOLYfZ4wn/giphy.gif',
      link: 'https://todolist-gabriella.netlify.app/'
    },
    {
      id: 3,
      nome: 'Reproflix',
      descricao: 'Um site em JavaSriprit que mostra informações de series',
      conteudo: 'JavaScript.',
      imagem: 'https://media.giphy.com/media/3n1vNmG335ZuOQkDmM/giphy.gif',
      link: 'https://reproflix.netlify.app/'
    },
    {
      id: 4,
      nome: 'API Studio Ghibli',
      descricao: 'Um site em JavaScript para mostrar Api do Studio Ghibli',
      conteudo: 'React: fundamentos, components, rotas, hooks, eventos e consumos de API.',
      imagem: 'https://media.giphy.com/media/q1VYnny07buzYio3e6/giphy.gif',
      link: 'https://api-studio-ghibli-js.netlify.app/'
    }
  ]
  
  function Portfolio() {
    const [repos, setRepos] = useState([])
    const baseURL = 'https://api.github.com/users/GabriellaRibeiro/repos'
  
    useEffect(()=> {
      axios
        .get(baseURL)
        .then((response) => setRepos(response.data))
    }, [])
  
    return(
     <>
      <Header 
        image={image} 
        description="ilustracao mulher com site"
      >
        Meus Projetos
      </Header>
  
      <div className="cartao-container">
        {
          list.map(projeto => {
            return(
              <div className="cartao" key={projeto.id}>
                <h1>{projeto.nome}</h1>
                <img src={projeto.imagem} alt={"gif do projeto "+ projeto.nome}/>
                <p>{projeto.descricao}</p>
                <a href={projeto.link} className="enter-repo" target="_blank">
                  <BsArrowReturnRight siz={16} color="#111"/>
                </a>
              </div>
            )
          })
        }
      </div>
      <h2 className="titulo">Outros Projetos no meu Github</h2>  
      <div className="card-container">
        {
          repos.map(repo => {
            return(
              <div className="card" key={repo.id}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <a href={repo.html_url} className="enter-repo" target="_blank">
                  <BsArrowReturnRight siz={16} color="#fff"/>
                </a>
              </div>
            )
          })
        }
      </div>
     

     <Button />     
    <Footer />    
    </>
    )
   }
   
   export default Portfolio
  