
const CONFIG = {
  introDesc: `你好呀 我親愛的語紳
  MunHing Alric 還是說....
  
  我的小王子 嘿嘿
  
  其實一開始認識你我沒有太多的想法 覺得只是個junior罷了
  直到了你對我表白心意 我拒絕了
  然後我還拉黑了你斷了聯繫
  
  我覺得這件事我現在想起 我都還是會覺得很難受
  因為以前的我做了一件讓我現在很喜歡很喜歡的男孩很難過傷心的事情
  
  可能是緣分吧 讓你再次在我生命中出現
  但你這次的出現我漸漸地發現原來你對我好有吸引力
  讓我很想要接近你 認識你多一些
  我就試探地試探地敲你
  
  但無語的事情發生在我們開始聊天的那個晚上
  我那時候發覺后 我覺得很自責 很對不起你 很沒臉再繼續找你
  但是你突然發了段話 說或許能重新認識
  那時的我在賭最後一把 猜想可能你是對我說的 所以我就打算試一下

  我不知道在我發現以前做了那麼無語，傷了你心的事情，再接近你這回事對不對
  
  但是我想著說以前你那麽勇敢追著我跑了
  現在的我想試一把向你的方向跑

  雖然我表達能力很差 但是你會說我講得很詳細  
  雖然我對我自己有不滿意的地方 可是你會覺得那很可愛  
  雖然我們認識很久了 但沒相處很長時間
  可是和你在一起的時候 我覺得很安心 很可靠 很舒服
  不自覺的很想往你懷裏鑽

  我會一直想要和你待在一起
  一起去做很多事情
  一起體驗很多事物
  一起探索這個世界

  我知道我想很多 我擔心很多
  我每做一件件事前都會害怕很多事情
  想和你講些什麼都會吞吞吐吐很久

  但是我想讓你知道 我不想失去你 我不想在你那得到任何一次的負分
  你說要是不行動，連看見結果的機會也沒有

  可是我是不想賭上失去和你一起的機會
  因為賭輸了踩到了你的雷點可能連朋友也沒得做了🥺

  但我不想再次錯過你
  
  你願意給我機會 讓我當你的男朋友嗎？

  當你的依靠 當你的後盾幫你兜底 
  你放心往前沖 我會等你的 我一直都會等你💕

  在我這你不用一直撐著當大哥
  你不用一直自己一個承受 我會和你一起
  
  我想 我們永遠不要停止努力
  就算在艱難的日子裡 也選擇一起面對 一起撐過
  我一定不把彼此視為理所當然 去珍惜那些微小的美好
  
  我會把「我愛你」掛在嘴邊 逮到機會就說的
  我們一起成長吧❤️
  無論發生什麼事 都記得彼此
  就讓我們今年以幸福結尾 我想把2026和往後的時間交給你了❤️
  
  你願意給我機會 讓我當你的男朋友嗎？❤️
  `,
}




/* ----------------------
   TYPEWRITER EFFECT
---------------------- */



// Leave text empty for now
const text = CONFIG.introDesc;
let index = 0;
const speed = 80;
const target = document.getElementById("typewriter");

// function typeWriter() {
//   if (index < text.length) {
//     target.innerHTML += text.charAt(index);
//     index++;
//     setTimeout(typeWriter, speed);
//   }
// }

function typeWriter() {
  if (index < text.length) {
    const char = text.charAt(index);

    target.innerHTML += char === "\n" ? "<br>" : char;

    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

/* ----------------------
   SLIDESHOW
---------------------- */

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 4000);

/* ----------------------
   MUSIC (MP3)
---------------------- */

const audio = document.getElementById("bgm");
const btn = document.getElementById("bodyyy");
checkPlay = false;
audio.currentTime = 1.5;

btn.addEventListener("click", () => {
  if (checkPlay) {
    checkPlay = false;
    audio.pause();
  }
  else {
    checkPlay = true;
    audio.play();
  }
});



