import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist({
    key: 'recoil-persist-wishlist-recoil',
    storage: localStorage,
    converter: JSON
})

export const wishlistCoursesRecoil = atom({
    key: 'wishlistCoursesRecoil',
    default: [],
    effects_UNSTABLE: [persistAtom]
})

export const fetchWishlistRecoil = selector({
    key: 'fetchWishlistRecoil',
    get: ({get}) =>{
        const wishListRecoil = get(wishlistCoursesRecoil)
        return wishListRecoil
    }
})