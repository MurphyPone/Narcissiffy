//scraper

let imgs = document.getElementsByTagName("img");
let urls = [];

for(i of imgs) {
  urls.push(i.src);
}

for(u of urls) {
  chrome.downloads.download({
    url : u,
    saveAs: false
  });
}
