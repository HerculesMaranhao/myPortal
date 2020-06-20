import Baixo from './baixo.png'
import BigBang from './bigbang.jpg'
import BorraoBranco from './borrao_branco.png'
import Eu from './eu.jpg'
import FundoCampNou from './fundo_campnou.png'
import FundoNBA from './fundo_nba.png'
import Fundo1 from './fundo1.jpeg'
import Fundo2 from './fundo2.png'
import Fundo3 from './fundo3.png'
import Fundo4 from './fundo4.png'
import Fundo5 from './fundo5.jpg'
import Laptop from './laptop.png'
import Naruto from './naruto.png'
import OnePiece from './onepiece.png'
import Programming from './programming.png'
import PlayStation from './ps.png'
import PerfectWorld from './pw.jpg'
import Shingeki from './shingeki.png'
import TwoAndAHalfMen from './thm.png'
import Violao from './violao.png'


export const findImage = icon => {

    switch (icon) {
        case 'baixo':
            return Baixo;
        case 'bigbang':
            return BigBang;
        case 'borrao-branco':
            return BorraoBranco;
        case 'eu':
            return Eu;
        case 'fundo_campnou':
            return FundoCampNou;
        case 'fundo_nba':
            return FundoNBA;
        case 'fundo1':
            return Fundo1;
        case 'fundo2':
            return Fundo2;
        case 'fundo3':
            return Fundo3;
        case 'fundo4':
            return Fundo4;
        case 'fundo5':
            return Fundo5;
        case 'laptop':
            return Laptop;
        case 'naruto':
            return Naruto;
        case 'onepiece':
            return OnePiece;
        case 'programming':
            return Programming;
        case 'ps':
            return PlayStation;
        case 'pw':
            return PerfectWorld;
        case 'shingeki':
            return Shingeki;
        case 'thm':
            return TwoAndAHalfMen;
        case 'violao':
            return Violao;
        default:
            break;
    }
}