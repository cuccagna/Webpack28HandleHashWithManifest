import '../sass/_base.scss';
import { HelloWorldButton } from '../components/hello-world-button/hello-world-button'
import { MainHeader } from '../components/main-header/main-header';
import { Logo } from '../components/logo/logo.js';

import { addImage } from "./add-image.js";
import Natura from '../../assets/img/natura.jpg'
import angular from '../../assets/img/logo-angular.svg'


//Percorso sopra dal file js

let logoImg = new Logo("logo-angular");

const mainHeaderPage = new MainHeader(logoImg);
mainHeaderPage.render();

const helleWorldButton = new HelloWorldButton();
helleWorldButton.render();

//console.log(Natura)
addImage(Natura, "asset-resource", "Natura");
addImage(angular, "logo-angular", "Angular");

if (process.env.NODE_ENV === 'production')
   console.log('Production mode');
else if (process.env.NODE_ENV === 'development')
   console.log('Development mode');
