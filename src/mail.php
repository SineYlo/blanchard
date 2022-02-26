<?php

$name = $_POST['callbackFormFieldName'];
$phone = $_POST['callbackFormFieldPhone'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);

$name = urldecode($name);
$phone = urldecode($email);

$name = trim($name);
$phone = trim($phone);

if (mail("vavshhik01@mail.ru", "Обратный звонок", "Имя:".$name.". Телефон: ".$phone ,"From: contact@sineylo-dev.ru \r\n")) {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}

?>
