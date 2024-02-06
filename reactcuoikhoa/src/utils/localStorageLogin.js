export const addLoginUserData = (data) =>{
    localStorage.setItem('loginData',JSON.stringify(data))
}

export const getLoginUserData = () =>{
    return JSON.parse(localStorage.getItem('loginData'))
}

export const removeLoginUserData = () =>{
    localStorage.removeItem('loginData')
}