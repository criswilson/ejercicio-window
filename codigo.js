let href = window.location.href;
let pathName = window.location.pathname;
let protocol = window.location.protocol;
let hostName = window.location.hostname;

let html = `Protocolo: <b>${protocol}</b><br>`;
html += `Hostname: <b>${hostName}</b><br>`;
html += `Pathname: <b>${pathName}</b><br>`;
html += `URL Completa: <b>${href}</b><br>`;

document.write(html);
