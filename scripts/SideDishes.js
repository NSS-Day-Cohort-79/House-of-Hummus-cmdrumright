import { setSide } from "./transientState.js"

const handleChange = (e) => {
    if (e.target.name === "side") {
        setSide(parseInt(e.target.value))
    }
}

export const sideList = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const options = await response.json()

    document.addEventListener("change", handleChange)

    let html = `
        <div class="options">
            <h2>Sides</h2>
    `

    html += options.map((option) => {
        return `
            <input type="radio" name="side" id="side--${option.id}" value="${option.id}">
            <label for="side--${option.id}">${option.name}</label><br>
        `
    }).join("")

    html += `
        </div>
    `
    return html
}


