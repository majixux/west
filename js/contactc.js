

/* No se muestra alert al enviar el formulario, 
nos redirecciona a la pagina de FormSpree. El form 
llega correctamente al email configurado*/

const $form = document.querySelector('#form')

$form.addEventListener('submit', handlesSubmit)

async function handlesSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept' : 'application/json'
        }
    })
    if (response.ok) {
        this.reset()
        alert('Gracias por contactarnos :)')
    }
}
