(() => {
  const container = document.getElementById("newsTickerInner");
  if (!container) return;

  const newsData = [
    "意見箱を公開しました",
    "ご意見は生徒会の議題にとりあげられます",
    "不適切な内容は削除（もしくは開示を検討）する場合があります"
    "ご意見の送信ありがとうございます"
    "6月14日時点で何らかのエラーにより、意見の送信ができないことが判明しました。しばらくお待ちください。"
  ];

  // ニュースを「｜」で連結
  container.textContent = " 📢 " + newsData.join(" ｜ ");
})();

