const { PREFIX } = require(`${BASE_DIR}/config`);
const { InvalidParameterError } = require(`${BASE_DIR}/errors/InvalidParameterError`);
const { google } = require('googleapis'); // Importing googleapis

const youtube = google.youtube({
  version: 'v3',
  auth: '705644997179-qc2gpugobhsbo3em4p3ieid0hsqprh6d.apps.googleusercontent.com' // Replace with your actual YouTube API key
});

module.exports = {
  name: "play-video",
  description: "Faço o download de vídeos",
  commands: ["play-video", "pv"],
  usage: `${PREFIX}play-video <YouTube link>`, // Updated usage

  handle: async ({
    sendVideoFromURL,
    args,
    sendWaitReact,
    sendSuccessReact,
    sendErrorReply,
  }) => {
    if (!args.length || !args[0].includes('youtube.com/watch')) {
      throw new InvalidParameterError(
        "Você precisa fornecer um link válido do YouTube!"
      );
    }

    await sendWaitReact();

    try {
      const videoId = args[0].split('v=')[1].split('&')[0]; // Extract video ID from the URL
      const response = await youtube.videos.list({
        part: 'snippet',
        id: videoId,
      });

      const video = response.data.items[0];
      if (!video) {
        await sendErrorReply("Nenhum vídeo encontrado!");
        return;
      }

      await sendSuccessReact();
      await sendVideoFromURL(`https://www.youtube.com/watch?v=${videoId}`);
    } catch (error) {
      console.log(error);
      await sendErrorReply(JSON.stringify(error.message));
    }
  },
};
