import GitHubIcon from './github-icon.png'
import JavaScriptIcon from './javascript-icon.png'
import NodeJsIcon from './nodejs-icon.png'
import NpmIcon from './npm-icon.png'
import ReactIcon from './react-icon.png'
import ReduxIcon from './redux-icon.png'
import HtmlIcon from './html-icon.png'
import CssIcon from './css-icon.png'
import PhpIcon from './php-icon.png'
import BootstrapIcon from './bootstrap-icon.png'
import CypressIcon from './cypress-icon.png'
import DockerIcon from './docker-icon.png'
import JestIcon from './jest-icon.png'
import MaterialIcon from './material-icon.png'
import MysqlIcon from './mysql-icon.png'
import SqlIcon from './sql-icon.png'
import YarnIcon from './yarn-icon.png'


export const findIcon = icon => {

    switch (icon) {
        case 'github':
            return GitHubIcon;
        case 'javascript':
            return JavaScriptIcon;
        case 'nodejs':
            return NodeJsIcon;
        case 'npm':
            return NpmIcon;
        case 'react':
            return ReactIcon;
        case 'redux':
            return ReduxIcon;
        case 'html':
            return HtmlIcon;
        case 'css':
            return CssIcon;
        case 'php':
            return PhpIcon;
        case 'bootstrap':
            return BootstrapIcon;
        case 'cypress':
            return CypressIcon;
        case 'docker':
            return DockerIcon;
        case 'jest':
            return JestIcon;
        case 'material':
            return MaterialIcon;
        case 'mysql':
            return MysqlIcon;
        case 'sql':
            return SqlIcon;
        case 'yarn':
            return YarnIcon;
        default:
            break;
    }
}