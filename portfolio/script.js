function copyEmail() {
    navigator.clipboard.writeText(document.querySelector(".content .contact p.white-text .white-text").innerText)
       .then(() => {
         console.log("Email copied to clipboard");
       })
       .catch((error) => {
         console.error("Failed to copy email: ", error);
       });
   }
   
   function copyPhone() {
    navigator.clipboard.writeText(document.querySelector(".content .contact p.white-text .white-text").innerText.replace("Email: ", ""))
       .then(() => {
         console.log("Phone number copied to clipboard");
       })
       .catch((error) => {
         console.error("Failed to copy phone number: ", error);
       });
   }
   