import { Component } from "react";
import placeholder from '../imgs/placeholder.png'

class PlaceHolderCard extends Component {
  render() {
    return (
      <div className='project-card'>
        <img src={placeholder} alt="imagem Placeholder" className="project-img mg-auto" />
        <h3 className="center-text text-center">Sou apenas um placeholder</h3>
        <p className="description-projects text-center mg-auto">Isso aqui vai ficar por um tempinho aqui, enquanto estou desenvolvendo projetos bacanas :)</p>
        <hr className="project-line mg-auto"/>
        <h3 className="skills-project text-center">Javascript • React</h3>
      </div>
    )
  }
}

export default PlaceHolderCard;