import React, {Component} from "react";

const POKE_API="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

class Pokecard extends Component{
    static defaultProps ={
        pokemon:[

        ]
    }
    render(){
        let imgSrc=`${POKE_API}${this.props.id}.png`
        return(
           <div className="Pokecard">
            <h3 className="Pokecard-title">Pokemon</h3>
            <div className="Pokecard-img">
                <img src={imgSrc} alt={this.props.name}/>
            </div>
            <div className="Pokecard-data">Type:{this.props.type}</div>
            <div className="Pokecard-data"> Exp: {this.props.exp}</div>
           </div> 
        )
    }
}

export default Pokecard