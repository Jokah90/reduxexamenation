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

