
const addSearchKey = (data) =>{
    localStorage.setItem('searchKey',JSON.stringify(data))
}

const getSearchKey = () =>{
    return JSON.parse(localStorage.getItem('searchKey'))
}

const removeSearchList = () =>{
    localStorage.removeItem('searchKey')
}