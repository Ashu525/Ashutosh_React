export const setUi = (data) => {
    return {
        type:"SET_UI",
        payload:data
    }
}

export const setData = (data) => {
    return {
        type:"SET_DATA",
        payload:data
    }
}

export const setUserName = (data) => {
    return {
        type:'SET_USERNAME',
        payload:data
    }
}