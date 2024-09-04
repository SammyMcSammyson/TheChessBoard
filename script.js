const loadVideo = (iframe) => {
  /* CODE IN HERE */
};
const channelID = "UCQHX6ViZmPsWiYSFAyS0a3Q";

const channelURL = encodeURIComponent(
  `https://www.youtube.com/feeds/videos.xml?channel_id=${channelID}`
);

const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;

fetch(reqURL)
  .then((response) => response.json())
  .then((result) => {});

const videoNumber = iframe.getAttribute("vnum");
const link = result.items[videoNumber].link;
const id = link.substring(link.indexOf("=") + 1);
iframe.setAttribute(
  "src",
  `https://youtube.com/embed/${id}?controls=0&autoplay=1`
);

const iframes = document.getElementsByClassName("latestVideoEmbed");
for (let i = 0, len = iframes.length; i < len; i++) {
  loadVideo(iframes[i]);
}
