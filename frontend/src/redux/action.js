export const removeCoffee = (coffee) => {
    return {
        type: 'REMOVE_COFFEE',
        payload: coffee
    }
}


// Öka / sänka antal i varukorg
export const DECREASE = 'DECREASE'
export const INCREASE = 'INCREASE'
// Ta bort vara
export const REMOVE = 'REMOVE'
// Ta bort alla varor
export const CLEAR = 'CLEAR'
// Totalsumma
export const GET_TOTAL = 'GET_TOTAL'
// Totala antalet varor i korg
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT'
// Lägg till vara till varukorg
export const ADD_ITEM = 'ADD_ITEM'





