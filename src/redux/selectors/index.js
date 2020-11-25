/* export const selectLowestPrice = state => {
    const newState = state.sort((a,b) => {
        return a.cost-b.cost
    });
    console.log(newState, 'selectooooorr');
    return newState;
}
export const selectHighestPrice = state => {
    const newState = state.sort((a,b) => {
        return b.cost-a.cost
    });
    console.log(newState, 'selectooooorr');
    return newState;
} */

export const selectHighestPrice = state => state.sort((a,b) => b.cost - a.cost)

export const selectLowestPrice = state => state.sort((a,b) => a.cost-b.cost);