import Swal from 'sweetalert2'

export const Alert = (msg) => {
    Swal.fire({
        title: 'Perhatian',
        text: msg,
        showClass: {
            popup: '',
            icon: ''
        },
        hideClass: {
            popup: '',
        },
    })
}

export const Info = (html) => {
    Swal.fire({
        title: 'Informasi',
        html: html,
        showClass: {
            popup: '',
            icon: ''
        },
        hideClass: {
            popup: '',
        },
    })
}