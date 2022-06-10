import { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className='About-Section'>
        <h1 className='About-Title'>Sobre Mim</h1>
        <article>
          <h2 className='Sub-Title-About blue'>Um pouco sobre mim</h2>
          <p className='about-text'>Eu sou um desenvolvedor Front-End, Tenho um sonho desde criança por programação, Graças a Trybe isso está deixando de ser um sonho para ser realidade. Atualmente estou aprendendo sobre Front-End e tenho interesse também em Back-End. Sempre tentando inovar e aprendendo novas tecnologias.</p>
        </article>
        <div>
          <h2 className='Sub-Title-About blue'>Ferramentas e Skills</h2>
        </div>
      </section>
    )
  }
}

export default About;