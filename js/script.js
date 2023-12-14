import ScrollSuave from "./modules/scroll-suave.js";
import ScrollAnima from "./modules/scroll-anima.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import InitModal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import FetchAnimais from "./modules/fetch-animais.js";
import FetchBitcoin from "./modules/fetch-bitcoin.js";
import MenuMobile from "./modules/menu-mobile.js";
import DropdownMenu from "./modules/dropdown-menu.js";

import initFuncionamento from "./modules/funcionamento.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const scrollAnima = new ScrollAnima();
scrollAnima.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new InitModal();
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const fetchAnimais = new FetchAnimais(".numeros-grid");
fetchAnimais.init();

const dropdown = new DropdownMenu("[data-dropdown]");
dropdown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

FetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

MenuMobile();
initFuncionamento();
