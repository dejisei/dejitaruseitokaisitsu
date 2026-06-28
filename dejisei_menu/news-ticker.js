(() => {
  const container = document.getElementById("newsTickerInner");
  if (!container) return;

  // ニュース一覧
  const newsData = [
    {
      text: "6月30日　復旧しました！！！",
      deleted: false
    },
    {
      text: "6月14日時点で何らかのエラーにより、意見の送信ができないことが判明しました。しばらくお待ちください。",
      deleted: true
    },
    {
      text: "6月30日　復旧しました！！！",
      deleted: false
    },
    {
      text: "意見箱を公開しました",
      deleted: false
    },
    {
      text: "ご意見は生徒会の議題にとりあげられます",
      deleted: false
    },
    {
      text: "不適切な内容は削除（もしくは開示を検討）する場合があります",
      deleted: false
    },
    {
      text: "ご意見の送信ありがとうございます",
      deleted: false
    }
  ];

  // ニュースを表示
  container.innerHTML =
    "📢 " +
    newsData
      .map(item =>
        item.deleted
          ? `<del>${item.text}</del>`
          : item.text
      )
      .join(" ｜ ");
})();
