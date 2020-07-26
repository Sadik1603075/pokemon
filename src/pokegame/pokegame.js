import React,{Component} from 'react';
import Pokedex from '../pokedex/pokedex';

class Pokegame extends Component{

    state={
        pokemon : 
        [
            {id : 4, name:'Charmander', type:'fire' , exp:62},
            {id : 7, name:'Squirtle', type:'water' , exp:63},
            {id : 11, name:'Metapod', type:'bug' , exp:72},
            {id : 12, name:'Butterfree', type:'flying' , exp:178},
            {id : 25, name:'Pikachu', type:'electric' , exp:112},
            {id : 39, name:'Jigglypuff', type:'normal' , exp:95},
            {id : 94, name:'Gengar', type:'poison' , exp:225},
            {id : 133, name:'Eevee', type:'normal' , exp:65},
        ]
    }

    render()
    {
        let hand1 =[];
        let hand2 = [...this.state.pokemon];
        while(hand1.length<hand2.length)
        {
            let ranId = Math.floor(Math.random()*hand2.length);
            let randomPoke = hand2.splice(ranId,1)[0];
            hand1.push(randomPoke);
        }
        let hand1Scr= 0;
        for(let i=0;i<hand1.length;i++) hand1Scr+=hand1[i].exp;
        let hand2Scr = hand2.reduce((exp,pokemon)=> exp+pokemon.exp,0);

        

        return(
            <div>  
                <Pokedex pokemon={hand1} scr={hand1Scr} res = {hand1Scr>hand2Scr}/>
                <Pokedex pokemon={hand2} scr={hand2Scr} res = {hand2Scr>hand1Scr}/>
            </div>
        );
    }
}

export default Pokegame;