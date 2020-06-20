import Bucks from './bucks.png'
import Bulls from './bulls.png'
import Houston from './houston.png'
import Lakers from './lakers.png'
import Nola from './nola.png'
import Philadelphia from './philadelphia.png'
import SaoPaulo from './sao_paulo.png'
import Barcelona from './barcelona.png'
import Juventus from './juventus.png'
import Liverpool from './liverpool.png'
import Psg from './psg.png'

export const findTeam = icon => {

    switch (icon) {
        case 'bucks':
            return Bucks;
        case 'bulls':
            return Bulls;
        case 'houston':
            return Houston;
        case 'lakers':
            return Lakers;
        case 'nola':
            return Nola;
        case 'philadelphia':
            return Philadelphia;
        case 'sao_paulo':
            return SaoPaulo;
        case 'barcelona':
            return Barcelona;
        case 'juventus':
            return Juventus;
        case 'liverpool':
            return Liverpool;
        case 'psg':
            return Psg;
        default:
            break;
    }
}