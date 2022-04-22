const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    lrcType: 3,
    audio: [
      {
        name: "再唱一次这首歌好吗？",
        artist: '鹿先森乐队',
        url: 'http://music.163.com/song/media/outer/url?id=1474654265.mp3',
        cover: 'http://p3.music.126.net/J64E-TC6Pp9j8-98cwgReg==/109951165277202576.jpg?param=300x300',
        lrc: 'https://photos.tfchen.cn/lrc/Miracles-Coldplay.lrc'
      }
    ]
});