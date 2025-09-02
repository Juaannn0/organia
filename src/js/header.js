export async function loadHeader() {
    const headerContainer = document.getElementById("header");
    try {
        const resp = await fetch("./partials/header.html");
        const html = await resp.text();
        headerContainer.innerHTML = html;
    } catch (err) {
        console.error("Error cargando header:", err);
    }
}
