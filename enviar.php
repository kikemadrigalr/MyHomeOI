<?php
//Recibimos los campos del formulario
$nombres= $_POST['nombres'];
$apellidos= $_POST['apellidos'];
$dni= $_POST['dni'];
$correo= $_POST['correo'];
$telefono= $_POST['telefono'];
$proyecto= $_POST['proyecto'];
$asunto= $_POST['asunto'];
$mensaje= $_POST['mensaje'];
$asuntocorreo = $asunto." sobre el proyecto: ".$proyecto;
//Acomodamos todo para darle orden al cuerpo del mensaje
$texto_mensaje="El usuario ".$nombres." ".$apellidos." dijo: \n".$mensaje." \n
Puedes contactarlo a su correo: ".$correo. " o al telefono: ".$telefono;
mail("amorales@myhomeoi.com , bgarcia@myhomeoi.com , acaillaux@myhomeoi.com ",$asuntocorreo,$texto_mensaje);
echo "Su mensaje se ha enviado! Nos pondremos en contacto con usted a la brevedad.";
?>