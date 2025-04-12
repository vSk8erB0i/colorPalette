function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generatePalette() {
  const palette = document.getElementById("palette");
  palette.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;

    const code = document.createElement("div");
    code.className = "color-code";
    code.innerText = color;

    box.appendChild(code);
    box.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
      alert(`${color} copied to clipboard!`);
    });

    palette.appendChild(box);
  }
}

document.getElementById("generate").addEventListener("click", generatePalette);
window.onload = generatePalette;
