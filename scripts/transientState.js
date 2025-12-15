const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
}

export const setEntree = (id) => transientState.entreeId = id
export const setVegetable = (id) => transientState.vegetableId = id
export const setSide = (id) => transientState.sideId = id

const handleSubmit = async (e) => {
    if (e.target.id === "purchase") {
        if (transientState.entreeId > 0 && transientState.vegetableId > 0 && transientState.sideId > 0) {
            const response = await fetch("http://localhost:8088/purchases", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(transientState)
            })
            const submitEvent = new CustomEvent("purchaseSubmitted")
            document.dispatchEvent(submitEvent)
        } else {
            window.alert("Please select one of each")
        }
    }
}

document.addEventListener("click", handleSubmit)
