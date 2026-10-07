const modeButtons = document.querySelectorAll(".button-mode");

let mode = localStorage.getItem("mode") || "dark";

function applyMode() {
    document.documentElement.setAttribute("data-theme", mode);

    const icon = mode === "dark" ? "fa-moon" : "fa-sun";
    const text = mode === "dark" ? "Modo Oscuro" : "Modo Claro";

    modeButtons.forEach((btn) => {
        const isIconOnly = btn.classList.contains("button-mode-mobile") ||
            btn.classList.contains("button-mode-compact");

        btn.innerHTML = isIconOnly
            ? `<i class="fa-solid ${icon}"></i>`
            : `<i class="fa-solid ${icon}"></i>
               <span class="desktop-text-aside">${text}</span>`;

    });
}

applyMode();

modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        mode = mode === "dark" ? "light" : "dark";
        localStorage.setItem("mode", mode);
        applyMode();
    });
});