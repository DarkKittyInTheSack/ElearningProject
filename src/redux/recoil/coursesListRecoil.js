import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist({
    key: 'recoil-persist-courses-list-recoil',
    storage: localStorage,
    converter: JSON
})

export const coursesListRecoil = atom({
    key: 'coursesListRecoil',
    default: [],
    effects_UNSTABLE: [persistAtom]
})

export const fetchCoursesListRecoil = selector({
    key: 'fetchCoursesListRecoil',
    get: ({get}) =>{
        const courseList = get(coursesListRecoil)
        return courseList
    }
})