import React,{Component} from 'react';
import Pokecard from '../pokecard/pokecard';
import './pokedex.css';


class Pokedex extends Component{

    render()
    {

        const pokedex = this.props.pokemon.map(p=>{
           return  <Pokecard
             id = {p.id}
             name ={p.name}
             type = {p.type}
             exp = {p.exp}
            />
        });

        return(
            <div className="Pokedex">
                <p> Total Experience : {this.props.scr} <br/> {this.props.res?"Winner" : "Looser"}</p>
               <div className="Pokedex-card">{pokedex}</div> 
            </div>
        );
    }
}

export default Pokedex;