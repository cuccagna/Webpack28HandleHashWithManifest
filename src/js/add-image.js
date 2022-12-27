
export function addImage(pathImage, idImage, titleMessage) {
   console.log("Ciao");
   const arrayTokens = pathImage.split(/\./)
   const estensione = arrayTokens[arrayTokens.length - 1];

   const img = document.getElementById(idImage);
   img.src = pathImage;
   img.title = titleMessage;
   img.alt = `${titleMessage}.${estensione}`;

   
   
   //console.log(typeof pathImage)
   
}