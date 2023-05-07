// import $ from "jquery"; 

// console.log("content script boop");
// document.body.style.backgroundColor = "red";
// $("#title") 
var container = document.querySelectorAll('#primary-inner');
// console.log("contrainer", container[0].childNodes);//[0].querySelector("ytd-live-chat-frame"));
console.log("chrome.runtime.getURL('box.html')", chrome.runtime.getURL('box.html'));
console.log("contrainer", container[0].children);
var iframe = '<iframe src='+ chrome.runtime.getURL('box.html') + ' title="Iframe Example"></iframe>'
container[0].insertAdjacentHTML('beforeEnd', iframe);//'<p text = "#ffffff"> TEXT ELEMENT </p>');
console.log("current_link", document.location.href);
// var iframe_container = container[0].querySelectorAll('iframe');
// for (let i = 0; i < iframe_container.length; i += 1) {
//     iframe_container[i].querySelector
// }
// container.innerHTML = 
// console.log("container_child", iframe_container[0]);
// container_child.innerHTML = '<p>chatbox_new</p>'
// container[0].innerHTML = '<p text="#ffffff"> chatbox-new</p>' + iframe_container[0].innerHTML;
// var container = document.querySelectorAll('ytd-live-chat-frame');

// container[0].insertBefore('<p>chatbox_new</p>', iframe_container[0]);
// for(let i = 0; i < container.length; i += 1) {
//     if (container[i].querySelector('h1')) {
//         container[i].querySelector('h1').innerHTML = 'sup maddawg';
//     }
//     // console.log("CONTAINER", container[i]);
// }
// console.log("CONTAINER", container.querySelectorAll("div.style-scope .ytd-watch-metadata > h1"));
// container.innerHTML = '<p>ChromeExtention</p>';
// injectElement.className = 'rusty-zone-element';
// injectElement.innerHTML = 'hello from the rusty zone element';
// document.body.appendChild(injectElement);
// if(typeof init == 'undefined'){
//     const init = function() {
//         console.log("content script boop");
//         const injectElement = document.createElement('div');
//         injectElement.className = 'rusty-zone-element';
//         injectElement.innerHTML = 'hello from the rusty zone element';
//         document.body.appendChild(injectElement);
//     }
// }