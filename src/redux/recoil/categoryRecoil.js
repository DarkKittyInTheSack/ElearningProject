import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist({
    key: 'recoil-persist-category-recoil',
    storage: localStorage,
    converter: JSON
})

export const categoryRecoil = atom({
    key: 'categoryRecoil',
    default: [],
    effects_UNSTABLE: [persistAtom]
})

export const fetchCategoryRecoil = selector({
    key: 'fetchCategoryRecoil',
    get: ({get}) =>{
        const dataRecoil = get(categoryRecoil)
        return dataRecoil
    }
})