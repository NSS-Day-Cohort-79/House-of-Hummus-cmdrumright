import { setVegetable } from "./transientState.js"

const handleChange = (e) => {
    if (e.target.name === "vegetable") {
        setVegetable(parseInt(e.target.value))
    }
}

export const vegetableList = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const options = await response.json()

    document.addEventListener("change", handleChange)

    let html = `
        <div class="options">
            <h2>Vegetable</h2>
    `

    html += options.map((option) => {
        return `
            <input type="radio" name="vegetable" id="vegetable--${option.id}" value="${option.id}">
            <label for="vegetable--${option.id}">${option.name}</label><br>
        `
    }).join("")

    html += `
        </div>
    `
    return html
}

