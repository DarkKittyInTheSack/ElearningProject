import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist({
    key: 'recoil-persist-subscription-list',
    storage: localStorage,
    converter: JSON
})

export const subscriptionListRecoil = atom({
    key: 'subscriptionListRecoil',
    default: [],
    effects_UNSTABLE: [persistAtom]
})

export const fetchSubcriptionRecoil = selector({
    key: "fetchSubscriptionRecoil",
    get: ({get}) =>{
        const subscriptionData = get(subscriptionListRecoil)
        return subscriptionData
    }
})