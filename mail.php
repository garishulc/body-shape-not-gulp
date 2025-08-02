<?php
// Подключение библиотеки
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Получение данных
$json = file_get_contents('php://input'); // Получение json строки
$data = json_decode($json, true); // Преобразование json

// Данные
$name = $data['name'];
$email =$data['email'];
// $tel = $data['tel'];
$message = $data['message'];

// Контент письма
$title = 'Body Shape заявка'; // Название письма
$body = '<p>Имя: <strong>'.$name.'</strong></p>'.
        // '<p>Телефон: <strong>'.$tel.'</strong></p>'.
        '<p>Почта: <strong>'.$email.'</strong></p>'.
        '<p>Сообщение: <strong>'.$message.'</strong></p>';

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = 'UTF-8';
  $mail->SMTPAuth   = true;

// Настройки почты отправителя
//вариант с гугл почтой
// Настройки сервера Gmail
$mail->Host = 'smtp.gmail.com';
// логин к почте 
$mail->Username = 'garirazrabotchik@gmail.com'; 
// Пароль от почты или приложения 
$mail->Password = 'xhal cmql ipsz dmjp'; 
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

//либо другой способ шифрования 
//$mail->SMTPSecure = 'tls';
//$mail->Port = 587 ;




  //вариант с яндекс почтой
  // SMTP сервера вашей почты
  // $mail->Host       = 'smtp.yandex.com'; 
  // // Логин на почте
  // $mail->Username   = 'alexfrontenddudukalo@yandex.ru'; 
  // // Пароль на почте
  // $mail->Password   = 'iiwfrjyrnbfrbfrx'; 
  // $mail->SMTPSecure = 'ssl';
  // $mail->Port       = 465;

  // Адрес самой почты и имя отправителя
  $mail->setFrom('garirazrabotchik@gmail.com', 'Body Shape заявка'); 

  // Получатель письма, можно несколько указывать
  $mail->addAddress('garirazrabotchik@gmail.com');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send('d');

  // Сообщение об успешной отправке
  echo ('Сообщение отправлено успешно!');

} catch (Exception $e) {
  header('HTTP/1.1 400 Bad Request');
  echo('Сообщение не было отправлено! Причина ошибки: {$mail->ErrorInfo}');
}
