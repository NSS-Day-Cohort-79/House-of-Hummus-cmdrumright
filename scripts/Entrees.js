export const entreeList = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const options = await response.json()

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
