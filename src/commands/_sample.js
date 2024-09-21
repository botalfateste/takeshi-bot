/**
 * Este é um modelo de comando.
 * Copie e cole este arquivo para criar um novo comando em uma das pastas: admin, member ou owner
 * Você deve renomeá-lo para ficar de fácil identificação na pasta destino.
 *
 * Pasta owner: Comandos que só podem ser executados pelo dono do bot
 * Pasta admin: Comandos que só podem ser executados por administradores do grupo
 * Pasta member: Comandos que podem ser executados por qualquer membro do grupo
 *
 * Funções e variáveis que podem ser extraídas do handle em "handle: async ({ aqui })"
 *
 * Variáveis:
 *
 * args           => Argumentos passados junto com o comando
 * commandName    => Nome do comando
 * isImage        => Se a mensagem é uma imagem
 * isReply        => Se a mensagem é uma resposta
 * isSticker      => Se a mensagem é um sticker
 * isVideo        => Se a mensagem é um vídeo
 * prefix         => Prefixo do bot
 * remoteJid      => ID do grupo/usuário que está recebendo a msg
 * replyJid       => ID da mensagem que está sendo respondida
 * socket         => socket do baileys
 * userJid        => ID do usuário que está mandando a msg
 * webMessageInfo => Informações da mensagem
 *
 * Funções:
 *
 * downloadImage       => download de imagem
 * downloadSticker     => download de sticker
 * downloadVideo       => download de vídeo
 * sendAudioFromURL    => Enviar áudio de uma URL
 * sendErrorReact      => Enviar reação de erro
 * sendErrorReply      => Enviar mensagem de erro como resposta
 * sendImageFromFile   => Enviar imagem de um arquivo
 * sendReact           => Enviar reação
 * sendReply           => Enviar mensagem de resposta
 * sendStickerFromFile => Enviar sticker de um arquivo
 * sendStickerFromURL  => Enviar sticker de uma URL
 * sendSuccessReact    => Enviar reação de sucesso
 * sendSuccessReply    => Enviar mensagem de sucesso como resposta
 * sendText            => Enviar mensagem de texto
 * sendWaitReact       => Enviar reação de espera
 * sendWaitReply       => Enviar mensagem de espera como resposta
 * sendWarningReact    => Enviar reação de aviso
 * sendWarningReply    => Enviar mensagem de aviso como resposta
 */
const { PREFIX } = require("../../config");

module.exports = {
  name: "comando",
  description: "Descrição do comando",
  commands: ["comando1", "comando2"],
  usage: `${PREFIX}comando`,
  handle: async ({}) => {
    // código do comando
  },
};
