const p = document.querySelector('#solanaPrice');
const btn = document.querySelector('#button')
const API_KEY = "7c3d242f-a10c-4db8-a005-db6131a72adb";
const SOL_TOKEN = "So11111111111111111111111111111111111111112";

async function getSolana() {
        const response = await fetch(`https://data.solanatracker.io/price?token=${SOL_TOKEN}`, {
            method: "GET",
            headers: {
                "x-api-key": API_KEY
            }
});
const data = await response.json()
return data.price
}

btn.addEventListener('click', async function() {
    const price = await getSolana()
    p.textContent = price
})
