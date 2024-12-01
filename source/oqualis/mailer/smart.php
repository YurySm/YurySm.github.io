<?php 

$name = $_POST['name'];
$namep = $_POST['name-p'];
$mass = $_POST['text'];
$massp = $_POST['text-p'];
$tel  = $_POST['tel'];
$telp  = $_POST['tel-p'];
$email = $_POST['email'];
$emailp = $_POST['email-p'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = '@gmail.com';                 // Наш логин
$mail->Password = '';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('@gmail.com', 'OQUALYS');   // От кого письмо 
$mail->addAddress('@yandex.ru');     // Add a recipient
$mail->addAddress('@websitecoder.ru');
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . $namep . ' <br>
	Тел: ' . $tel .$telp . ' <br>
	E-mail: ' . $email .$emailp . '<br>
	собщение: '. $mass. $massp ;

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>