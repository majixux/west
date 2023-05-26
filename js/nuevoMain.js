





// Menu dentro del aside abrir y cerrar //
let listElements = document.querySelectorAll('.list__button--click');


listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=> {
        
        listElement.classList.toggle('arrow');
        

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;
    })
});

// menu hamburguesa (despliega aside) //

const $openClose = document.getElementById("open__close"),
      $aside = document.getElementById("aside");

$openClose.addEventListener("click", ()=>{
    $aside.classList.toggle("desplegar")
})



