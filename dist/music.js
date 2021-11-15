const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	  {
		name: 'imagine'
		artist: 'John Lennon'
		url: 'http://music.163.com/song/media/outer/url?id=1476431.mp3'
	  }
    ]
});