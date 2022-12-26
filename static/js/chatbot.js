var showChatbox = false;
const chatbox = document.querySelector('.chatSupport');
document.querySelector('.chatButton').addEventListener('click', () => {
	showChatbox = !showChatbox;
	(showChatbox) ? chatbox.classList.add('chatActive') : chatbox.classList.remove('chatActive');
})
function inputSubmit() {
	document.querySelector('.chatbox__send--footer').addEventListener('click', (() => {
		document.getElementById('chatInput').value = ''
	})())

}
document.querySelector('#chatInput').addEventListener('keypress', function (e) {
	console.log(e.key)
	if (e.key === 'Enter') {
		inputSubmit()
	}
})