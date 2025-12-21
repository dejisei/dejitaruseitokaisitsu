(() => {
  const canvas = document.getElementById("clockCanvas");
  if (!canvas) return; // 管理画面などでcanvasが無い場合の保険

  const ctx = canvas.getContext("2d");
  const radius = canvas.width / 2;

  ctx.translate(radius, radius);

  setInterval(drawClock, 1000);
  drawClock();

  function drawClock() {
    ctx.clearRect(-radius, -radius, canvas.width, canvas.height);
    drawFace();
    drawNumbers();
    drawTime();
  }

  function drawFace() {
    ctx.beginPath();
    ctx.arc(0, 0, radius - 4, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  function drawNumbers() {
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (let i = 1; i <= 12; i++) {
      const ang = i * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius + 22);
      ctx.rotate(-ang);
      ctx.fillText(i.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius - 22);
      ctx.rotate(-ang);
    }
  }

  function drawTime() {
    const now = new Date();
    drawHand((now.getHours() % 12 + now.getMinutes() / 60) * Math.PI / 6, radius * 0.5, 5);
    drawHand((now.getMinutes() + now.getSeconds() / 60) * Math.PI / 30, radius * 0.7, 3);
    drawHand(now.getSeconds() * Math.PI / 30, radius * 0.8, 2, "red");
  }

  function drawHand(pos, length, width, color = "#333") {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.rotate(pos);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }
})();
