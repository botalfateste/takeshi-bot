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
const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=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&part=snippet`);

      const videoData = await response.json();
      const video = videoData.items[0];

      if (!video) {
        await sendErrorReply("Nenhum vídeo encontrado!");
        return;
      }

      await sendSuccessReact();
      await sendVideoFromURL(video.snippet.thumbnails.default.url); // Using thumbnail URL for video

    } catch (error) {
      console.log(error);
      await sendErrorReply(JSON.stringify(error.message));
    }
  },
};
