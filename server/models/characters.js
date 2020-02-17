import { characters } from '../database/swapi-data/characters.js';
import {
  getTotalHeightFeet,
  getTotalHeightRemainder
} from '../helpers/helpers.js';

class Characters {
  static getAll(callback) {
    try {
      const all_characters = characters.results.map(res => {
        return {
          name: res.name,
          height: res.height,
          gender: res.gender
        };
      });
      all_characters.sort((a, b) => {
        return a.height - b.height;
      });
      return callback(all_characters);
    } catch (error) {
      return error;
    }
  }

  static getAllFemaleCharacters(callback) {
    try {
      const femaleCharacters = characters.results.map(res => {
        return {
          name: res.name,
          height: res.height,
          gender: res.gender
        };
      });

      const female_characters = femaleCharacters.filter(
        character => character.gender === 'female'
      );
      female_characters.sort((a, b) => {
        return a.height - b.height;
      });

      let initialHeight = 0;
      let totalHeight = female_characters.reduce(
        (accumulator, currentValue) => {
          return accumulator + parseInt(currentValue.height);
        },
        initialHeight
      );

      const result = {
        female_characters: female_characters,
        total_number: female_characters.length,
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
      const maleCharacters = characters.results.map(res => {
        return {
          name: res.name,
          height: res.height,
          gender: res.gender
        };
      });

      const male_characters = maleCharacters.filter(
        character => character.gender === 'male'
      );
      maleCharacters.sort((a, b) => {
        return a.height - b.height;
      });
      let initialHeight = 0;
      let totalHeight = male_characters.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.height);
      }, initialHeight);

      const result = {
        male_characters: male_characters,
        total_number: male_characters.length,
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
