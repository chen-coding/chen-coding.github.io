const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    lrcType: 3,
    audio: [
      {
        name: "Miracles",
        artist: 'Coldplay',
        url: 'http://music.163.com/song/media/outer/url?id=29802587.mp3',
        cover: 'http://p3.music.126.net/JpsUkt18Cc4JFWDZCEaAQw==/6672936070254338.jpg?param=300x300',
        lrc: 'Miracles-Coldplay.lrc'
      },
	  {
		name: 'imagine',
		artist: 'John Lennon',
		url: 'http://music.163.com/song/media/outer/url?id=1476431.mp3',
		cover: 'http://p3.music.126.net/bNfLt8ezFqjYySr0erO73Q==/799344953443960.jpg?param=300x300',
	  }
    ]
});