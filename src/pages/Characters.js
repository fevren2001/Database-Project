import React from 'react'
import {CharacterList} from "../helpers/CharacterList";
import CharacterItem from '../components/CharacterItem';
import '../styles/Characters.css';

function Characters() {
  return (
    <div className='characters'>
        <h1 className='character-title'>Game Heros</h1>
        <div className='character-list'>
            {CharacterList.map((character_item, key) => {
                return (
                    <CharacterItem
                        key = {key}
                        image = {character_item.image}
                        name = {character_item.name}
                        power = {character_item.power}
                    />
                );
            })}
        </div>
    </div>
  );
}

export default Characters