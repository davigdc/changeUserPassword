/*
 * Created by Davi Gonçalves
 * GitHub: github.com/davigdc
 */

const netUser = require('net-user');

const randomPassword = require('./randomPassword');
const { registerLog, registerNewUserPassword } = require('./exportScript.js');

// Define usuários que serão ignorados, colocar em minusculo para tratativa de case sensitive
const usersToIgnore = ['administrador', 'administrator', 'tsdc'];

// Define o tamanho/numero de caracteres da senha
const passwordLenght = 8;

netUser.list((error, data) => {
  if (error) {
    console.log(error);
  } else {
    // Percorre vetor de usuarios
    data.forEach(async (user, index) => {
      //Esta condição remove o cabeçalhos e rodapé do requerimento
      if (index > 4 && index < data.length - 4) {
        // Remove os usuários ignorados, trata case sensitive
        if (!usersToIgnore.includes(user.toLowerCase())) {
          // Cria uma senha aleatoria
          let newPassword = randomPassword(passwordLenght);

          // Cria o comando net user com usuario e senha
          let command = `net user ${user} ${newPassword}`;

          // Registra no arquivo "script.txt" o comando criado
          await registerLog(command);

          // Registra no arquivo "usersPasswords.txt" o usuario e sua nova senha
          await registerNewUserPassword(user, newPassword);
        } else {
          // Mostra usuarios que não serão alterados, basta descomentar
          // console.log(user, 'ignorar');
        }
      }
    });
  }
});
