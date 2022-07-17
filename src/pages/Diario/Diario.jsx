import Header from  '../../components/Header/Header'
import image from '../../assets/diario.svg'
import Footer from '../../components/Footer/Footer'
import './diario.css'

function Diario() {
    return (
        <>
            <Header
                image={image}
                descrption="Ilustração de uma mulher">
                Diário da Reprograma
            </Header>
            <main>
                <section className='sections'>
                    <div className='Github'>
                        <h2>Github</h2>
                        <img className="gif" src="https://media.giphy.com/media/WRQBXSCnEFJIuxktnw/giphy.gif" alt="Gif Nazare" />
                        <p>Meu primeiro contato com o <b>Git </b> foi na segunda semana de aula do curso, de inicio achei que fosse um bicho de sete cabeças, mas com as semanas colocando em pratica, fui me familiarizando mais e hoje consigo usar normalmente.</p>
                    </div>

                    <div className='HTML'>
                        <h2>HTML</h2>
                        <img className="gif" src="https://media.giphy.com/media/kQxf9vdbSg6DS/giphy.gif" alt="Gif Justin" />
                        <p>
                        <b>HTML</b> é uma linguagem de marcação utilizada na construção de páginas na Web.
      Achei bem empolgante mexer com o HTML, Ja me sentia uma programadora quando mexi pela primeira vez rs.
                        </p>
                    </div>

                    <div className='CSS'>
                        <h2>CSS</h2>
                        <img className="gif" src="https://media.giphy.com/media/ZP11h5WlnR0eFWHk53/giphy.gif" alt="Gif Beleza" />
                        <p><b>CSS</b> é um mecanismo de dar, estilo, cores, fontes, espaçamento, para uma página Web. Adoro decoração, então quando vi o CSS pela primeira vez, amei na hora, super me identifiquei.</p>
                    </div>

                    <div className='JavaScript'>
                        <h2>JavaScript</h2>
                        <img className="gif" src="https://media.giphy.com/media/ICfEwJthOkWpGCbaTI/giphy.gif" alt="Gif Nazare" />
                        <p>Meu primeiro contato com o <b>JavaScript</b> eu simplesmente não entedi nada, fiquei bem assustada, mas limpei as lagrimas e respirei fundo e comecei navamente com calma, ainda não sei mexer muito bem, mas com muita dedicação e estudo, sei que chegarei lá.</p>
                    </div>

                    <div className='React'>
                        <h2>React</h2>
                        <img className="gif" src="https://media.giphy.com/media/h85NkRhu3Sgdq/giphy.gif" alt="Gif Justin Bieber" />
                        <p>Meu primeiro contato com o framework <b>React</b> eu até voltei acreditar que conseguiria mandar bem na programação, comecei a me achar novamente haha.</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Diario