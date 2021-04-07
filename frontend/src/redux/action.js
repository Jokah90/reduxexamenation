export const addCoffee = (coffee) => {
    return {
        type: 'ADD_COFFEE',
        payload: coffee
    }
}

export const removeCoffee = (coffee) => {
    return {
        type: 'REMOVE_COFFEE',
        payload: coffee
    }
}

export const addInc = (coffee) => {
    return {
        type: 'INC_COFFEE',
        payload: coffee
    }
}

export const addDec = (coffee) => {
    return {
        type: 'DEC_COFFEE',
        payload: coffee
    }
}

