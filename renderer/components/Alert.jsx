import Swal from 'sweetalert2'

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