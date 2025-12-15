const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
}

export const setEntree = (id) => transientState.entreeId = id
export const setVegetable = (id) => transientState.vegetableId = id
export const setSide = (id) => transientState.sideId = id
