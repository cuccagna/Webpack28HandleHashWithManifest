export class Logo{
   constructor(idLogo) {
      this.idLogo = idLogo;
   }
   render(container) {
      const logoImg = document.createElement("img");
      logoImg.id = this.idLogo;
      container.insertBefore(logoImg, container.firstChild);
   }
}