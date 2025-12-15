import { Sales } from "./Sales.js"
import { entreeList } from "./Entrees.js"
import { vegetableList } from "./Vegetables.js"
import { sideList } from "./SideDishes.js"

export const FoodTruck = async () => {
    const salesHTML = Sales()
    const entreesHTML = await entreeList()
    const vegetablesHTML = await vegetableList()
    const sidesHTML = await sideList()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article>
            <section class="choices">
            ${entreesHTML}
            ${vegetablesHTML}
            ${sidesHTML}
            </section>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
