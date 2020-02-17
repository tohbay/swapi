import characters_db from '../database/swapi-data/characters.json';
import {
  getTotalHeightFeet,
  getTotalHeightRemainder
} from '../helpers/helpers';

class Characters {
  static getAll(callback) {
    try {
      const characters = characters_db.results.map(res => {
        return {
          name: res.name,
          height: res.height,
          gender: res.gender
        };
      });
      characters.sort((a, b) => {
        return a.height - b.height;
      });
      return callback(characters);
    } catch (error) {
      return error;
    }
  }

  static getAllFemaleCharacters(callback) {
    try {
      const characters = characters_db.results.map(res => {
        return {
          name: res.name,
          height: res.height,
          gender: res.gender
        };
      });

      const femaleCharacters = characters.filter(
        character => character.gender === 'female'
      );
      femaleCharacters.sort((a, b) => {
        return a.height - b.height;
      });

      let initialHeight = 0;
      let totalHeight = femaleCharacters.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.height);
      }, initialHeight);

      const result = {
        female_characters: femaleCharacters,
        total_number: femaleCharacters.length,
        total_height: `${totalHeight}cm i.e ${getTotalHeightFeet(
          totalHeight
        )}ft ${getTotalHeightRemainder(totalHeight)}inches `
      };
      return callback(result);
    } catch (error) {
      return error;
    }
  }

  static getAllMaleCharacters(callback) {
    try {
      const characters = characters_db.results.map(res => {
        return {
          name: res.name,
          height: res.height,
          gender: res.gender
        };
      });

      const maleCharacters = characters.filter(
        character => character.gender === 'male'
      );
      maleCharacters.sort((a, b) => {
        return a.height - b.height;
      });
      let initialHeight = 0;
      let totalHeight = maleCharacters.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.height);
      }, initialHeight);

      const result = {
        male_characters: maleCharacters,
        total_number: maleCharacters.length,
        total_height: `${totalHeight}cm i.e ${getTotalHeightFeet(
          totalHeight
        )}ft ${getTotalHeightRemainder(totalHeight)}inches `
      };

      return callback(result);
    } catch (error) {
      return error;
    }
  }
}

export default Characters;
