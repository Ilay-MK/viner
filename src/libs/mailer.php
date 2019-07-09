<?php
function sendMail($mes)
{
	// example on using PHPMailer with GMAIL
	include("PHPMailer/class.phpmailer.php");
	include("PHPMailer/class.smtp.php"); // note, this is optional - gets called from main class if not already loaded

	$err			  = NULL;
	$mail             = new PHPMailer();

	$mail->IsSMTP();
    $mail->SMTPAuth   = true;                                                      // enable SMTP authentication
    $mail->SMTPSecure = "";                                                        // sets the prefix to the servier
	$mail->Host       = "mail.xn--b1aggu5a6f.com";                                 // sets GMAIL as the SMTP server
	$mail->Port       = 25;                                                        // set the SMTP port; For mail.hoster.by [465secur][25/2525/587]
	$mail->Username   = "hello@xn--b1aggu5a6f.com";                                // username
	$mail->Password   = "EgorSedov+375(29)322-16-50";
	$mail->From       = "hello@увезём.com";                                        // $mes["email"];
    $mail->CharSet	  = "utf-8";
	$mail->FromName   = "Сообщение с сайта | увезём.com";                          // $mes["name"]."| domain | ".$type;
	$mail->Subject    = "Поступила новая заявка!";                                 // "Поступил новый ".$type;
	$mail->AltBody    = "This is the body when user views in plain text format";                              // Text Body
	$mail->WordWrap   = 50;                                                        // set word wrap
    $mail->Body	      = '
						<div style="font-size: 2em; margin: 5px 0px"">Телефон: '.$mes["phone"].'</div>
						';
    $titleReplyTo = "Ответ на Вашу заявку с сайта [увезём.com]";

	/*$mail->AddReplyTo($mes["email"], $mes["name"]);*/ // "mail@domain","Webmaster"
	//$mail->AddAddress("mail@","О Величайший Мастер");
	$mail->AddAddress("uvezem.com@yandex.ru", "Отдел продаж");
	$mail->IsHTML(true); // send as HTML

	if(!$mail->Send()) {
		$tmp =  " - Mailer Error: " . $mail->ErrorInfo;
		echo "<p class='bg-danger text-danger'>Произошла ошибка!</p>"; //.$tmp;
	}
	else{
		echo "<p class='text-success bg-success'>Ваше сообщение принято. Хорошего дня!!</p>"; //Message has been sent
	}
}
?>
