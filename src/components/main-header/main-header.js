import { Logo } from '../logo/logo.js';
import './main-header.scss';

export class MainHeader{
   constructor(logo = false) {
      if (logo === false) {
         this.isLogoPresent = false;
         return;
      }

      
         if (logo instanceof Logo) {
            this.logo = logo;
            this.isLogoPresent = true;
         }
         else
            throw new TypeError("Componente MainHeader requires a Logo Component");
         
      
   }
   render(){
      const mainHeader = document.createElement("header");
      mainHeader.id = "main-header";
      if (this.isLogoPresent) {
         this.logo.render(mainHeader);
      }
      document.body.insertBefore(mainHeader, document.body.firstChild);
   }
}