// ボタンの要素を取得
const button = document.getElementById("btn");

// h2の要素を取得
const text = document.getElementById("text");

// クリックイベントを追加
button.addEventListener("click", function () {
  text.textContent = "ボタンをクリックしました";
});
