export const settablenumber =(value) => async dispatch =>{
    dispatch({
        type: "SETTABLENUMBER",
        payload:value
    })
}
export const resettablenumber = () => async dispatch =>{
    dispatch({
        type :"RESETTABLENUMBER",

    })
}

export const setfilter = (value) => async  dispatch =>{
    dispatch({
        type:"SETFILTER",
        payload:value
    })
}

export const resetfilter = () => async dispatch  => {
    dispatch({
        type:"RESETFILTER"
    })
}

export const addorder = (id,title,price,table_number,image) => async dispatch =>{
    dispatch ({
        type:"ADDORDER",
        payload:{
                id:id,
                title:title,
                price:price,
                table_number:table_number,
                image:image
        }
    })
}