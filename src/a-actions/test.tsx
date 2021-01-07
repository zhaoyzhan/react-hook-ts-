

export const Test = v => dispatch => {
    console.log(v)
    dispatch({
        type: 'test',
        products: v
    })
}
