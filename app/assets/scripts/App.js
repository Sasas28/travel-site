import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu' //accessing to this file.

let mobileMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept()
}