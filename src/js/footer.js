export async function loadFooter() {
    const footerContainer = document.getElementById("footer");
    try {
        const resp = await fetch("./partials/footer.html");
        const html = await resp.text();
        footerContainer.innerHTML = html;
    } catch (err) {
        console.error("Error cargando footer:", err);
    }
}
