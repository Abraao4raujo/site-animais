import outsideClick from "./outsideclick.js";
export default class MenuMobile {
  constructor(button, list, eventos) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(list);
    this.active = "active";

    if (eventos === undefined) this.eventos = ["click", "touchstart"];
    else this.eventos = eventos;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.active);
    this.menuButton.classList.add(this.active);
    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.active);
      this.menuButton.classList.remove(this.active);
    });
  }

  addMenuMobileEvents() {
    this.eventos.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
