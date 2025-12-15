import { setEntree } from "./transientState.js"

const handleChange = (e) => {
    if (e.target.name === "entree") {
        setEntree(parseInt(e.target.value))
    }
}

export const entreeList = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const options = await response.json()

    document.addEventListener("change", handleChange)

    let html = `
        <div class="options">
            <h2>Base Dish</h2>
    `

    html += options.map((option) => {
        return `
            <input type="radio" name="entree" id="entree--${option.id}" value="${option.id}">
            <label for="entree--${option.id}">${option.name}</label><br>
        `
    }).join("")

    html += `
        </div>
    `
    return html
}
