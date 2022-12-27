/* import può importare js di default ma non css.Per le immagini e i font e i file c'erano 
i Module Asset.Puoi importare un file css direttamente da dentro js usando un
CSS LOADER mettendo una nuova rules in webpack.config.js*/
import './hello-world-button.scss';

export class HelloWorldButton{
   render() {
      const button = document.createElement("button");
      button.textContent = "Hello world";
      button.classList.add("hello-world-button")
      button.onclick = this.#clickEvent;
      document.body.appendChild(button);
   }

   #clickEvent() {
      const p = document.createElement("p");
      p.textContent = "Hello world";
      p.classList.add("hello-world-text");
      document.body.appendChild(p);
   }
}

