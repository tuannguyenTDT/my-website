const openWishButton = document.getElementById("openWish");
const wish = document.getElementById("wish");
const fireworks = document.getElementById("fireworks");

openWishButton.addEventListener("click", () => {

    wish.classList.remove("hidden");

    openWishButton.textContent = "🎉 Chúc mừng sinh nhật!";

    createFireworks();

});


function createFireworks() {

    for (let i = 0; i < 15; i++) {

        setTimeout(() => {

            const firework = document.createElement("div");

            firework.className = "firework";

            firework.style.left =
                `${Math.random() * 100}%`;

            firework.style.top =
                `${Math.random() * 70}%`;

            fireworks.appendChild(firework);

            setTimeout(() => {
                firework.remove();
            }, 1000);

        }, i * 120);
    }
}