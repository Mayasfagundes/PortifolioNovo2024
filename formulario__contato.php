<?php
$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$telefone = addslashes($_POST['telefone']);
$mensagem = addslashes($_POST['mensagem']);

$para = "mayarasfagundes@gmail.com";
$assunto = "Contato Portifolio";

$corpo_email = "Nome: $nome\n";
$corpo_email .= "Email: $email\n";
$corpo_email .= "Telefone: $telefone\n\n";
$corpo_email .= "Mensagem:\n$mensagem";

if (mail($para, $assunto, $corpo_email)) {
    echo "Mensagem enviada com sucesso!";
    header('refresh:3;url=index.html#contatos');
    exit;
} else {
    echo "Erro ao enviar o email. Por favor, tente novamente mais tarde.";
}

header('Location: index.html#contatos');
exit;
?>
