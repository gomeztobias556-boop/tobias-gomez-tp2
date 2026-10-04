export const mostrarError = (mensaje) => {
    Swal.fire({ icon: "error", title: "Error", text: mensaje, confirmButtonText: "Aceptar"});
};