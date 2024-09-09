import { ImageSource } from 'excalibur';
import hex from './images/hex.png';

/**
 * Default global resource dictionary. This gets loaded immediately
 * and holds available assets for the game.
 */
const Resources = {
    Hex: new ImageSource(hex)
}

export { Resources }
