const { PREFIX } = require(`${BASE_DIR}/config`);
const axios = require('axios');
const { WarningError } = require(`${BASE_DIR}/errors/WarningError`);

module.exports = {
  name: "gpt",
  description: "Obtém uma resposta do ChatGPT a partir da mensagem fornecida",
  commands: ["gpt"],
  usage: `${PREFIX}gpt <pergunta>`,
  handle: async ({
    fullArgs,
    sendWaitReact,
    sendSuccessReact,
    sendText,
  }) => {
    if (!fullArgs.length) {
      throw new WarningError("Por favor, forneça uma pergunta para o ChatGPT.");
    }

    await sendWaitReact();

    const apiKey = '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'; // Substitua pela sua chave da API do ChatGPT
    const url = 'https://api.openai.com/v1/chat/completions';

    try {
      const response = await axios.post(url, {
        model: 'gpt-4.5',
        messages: [{ role: 'user', content: fullArgs.join(' ') }]
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      const gptResponse = response.data.choices[0].message.content;

      await sendSuccessReact();
      await sendText(gptResponse);
    } catch (error) {
      console.error('Erro ao chamar a API do ChatGPT:', error);
      await sendText('Desculpe, não consegui obter uma resposta.');
    }
  },
};
