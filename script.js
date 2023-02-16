let char = document.getElementById('name')


// 키를 눌렀을때 어떠한 키가 눌렸는지 콘솔 로그를 통해
// 개발자 도구 (콘솔) 항목에 출력.
char.addEventListener('keydown', function(kd) {
  console.log(kd.key);
})