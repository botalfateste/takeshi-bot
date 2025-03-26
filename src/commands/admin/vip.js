const { PREFIX } = require(`${BASE_DIR}/config`);

module.exports = {
  name: "vip",
  description: "Marca todos os membros do grupo quando o comando é invocado.",
  commands: ["vip", "tag"],
  usage: `${PREFIX}vip @userId`,
  handle: async ({ fullArgs, sendText, socket, remoteJid, sendReact }) => {
    if (fullArgs.length < 1) {
      return sendText("Por favor, forneça o @ do usuário.");
    }
    
    const targetUserId = fullArgs[0]; // Expecting the @userId to be passed as the first argument
    const { participants } = await socket.groupMetadata(remoteJid);
    const mentions = participants.map(({ id }) => id);
    
    // Listen for messages from the target user
    socket.on('chat-update', async (chat) => {
      if (chat.key.remoteJid === remoteJid && chat.messages && chat.messages[0].key.fromMe === false) {
        const senderId = chat.messages[0].key.participant;
        if (senderId === targetUserId) {
          await sendReact("📢");
          await sendText(`📢 Marcando todos!\n\n`, mentions);
        }
      }
    });
  },
};
