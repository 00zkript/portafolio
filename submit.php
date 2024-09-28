<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Aquí puedes añadir la lógica para enviar un correo o guardar los datos en una base de datos
    echo "Gracias, $name. Hemos recibido tu mensaje.";
}
?>
