const fs = require('fs');

// Arquivo de saida dos comandos
const outputScriptFile = 'script.txt';

// Arquivo de saida dos usuarios e senhas
const outputUsersPasswords = 'usersPasswords.txt';

const registerLog = async command => {
  await fs.writeFile(
    outputScriptFile,
    `${command}\r\n`,
    { flag: 'a' },
    function (err) {
      if (err) return console.log(err);
    },
  );
  // console.log('Arquivo Atualizado');
};

const registerNewUserPassword = async (user, password) => {
  // Formatação de saida do arquivo de usuarios e novas senhas
  const newUserPassword = `Usuário: ${user}\r\nsenha: ${password}\r\n`;

  await fs.writeFile(
    outputUsersPasswords,
    `${newUserPassword}\r\n`,
    { flag: 'a' },
    function (err) {
      if (err) return console.log(err);
    },
  );
  // console.log('Arquivo Atualizado');
};

module.exports = {
  registerLog,
  registerNewUserPassword,
};
