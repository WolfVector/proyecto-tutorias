import Swal from 'sweetalert2'

/**
 * 
 * @param {string} title - El mensaje que se mostrará
 * @param {string} icon - El tipo de ícono ("error" o "success", para más íconos checa la documentación de sweetalert2)
 * @param {number} timer - El tiempo que durará el mensaje (opcional, el default es 2000)
 */
function alertTimerMessage(title, icon, timer = 2000) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer,
        timerProgressBar: true,
    })

    Toast.fire({
        title,
        icon,
    })
}

/**
 * 
 * @param {string} messages - Un array de mensajes a mostrar
 * @param {string} icon - El tipo de ícono ("error" o "success", para más íconos checa la documentación de sweetalert2)
 * @param {number} width - El ancho del elemento (opcional)
 */
function alertMessage(messages, icon, width = 500) {
    let html = "<ul>"
    messages.forEach(msg => {
        html += "<li style='list-style-type: circle;'>" + msg + "</li>"
    })
    html += "</ul>"

    Swal.fire({
        icon,
        html,
        showCloseButton: true,
        toast: true,
        width: 500,
        position: 'top-right'
    })
}

/**
 * 
 * @param {string} text - El texto a mostrar
 * @returns {Swal}
 */
function alertConfirm(text) {
    return (Swal.mixin({
        title: '¿Estás seguro?',
        text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok'
      })
    )
}

export { alertMessage, alertTimerMessage, alertConfirm }