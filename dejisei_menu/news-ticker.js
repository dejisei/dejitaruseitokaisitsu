(() => {
  const container = document.getElementById("newsTickerInner");
  if (!container) return;

  const newsData = [
    "意見箱を公開しました",
    "ご意見は生徒会の議題にとりあげられます",
    "不適切な内容は削除（もしくは開示を検討）する場合があります"
    "ご意見の送信ありがとうございます"
  ];

  // ニュースを「｜」で連結
  container.textContent = " 📢 " + newsData.join(" ｜ ");
})();

