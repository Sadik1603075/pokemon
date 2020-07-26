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
        let text="Wining Hand";
        let classes="Pokedex-text";
        if(!this.props.res) 
        {
            text="Lossing Hand";
            classes="Pokedex-text1";
        }
       


        return(
            <div className="Pokedex">
                <p className={classes}> <h3>{text}</h3> Total Experience : {this.props.scr}</p>
               <div className="Pokedex-card">{pokedex}</div> 
            </div>
        );
    }
}

export default Pokedex;