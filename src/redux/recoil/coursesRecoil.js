import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist({
  key: 'recoil-persist-courses-data-recoil',
  storage: localStorage,
  converter: JSON
})

export const coursesRecoilInit = atom({
  key: "coursesRecoilInit",
  default: {},
  effects_UNSTABLE: [persistAtom]
});

export const fetchCoursesRecoil = selector({
  key: "fetchCoursesRecoil",
  get: ({ get }) => {
    const courseData = get(coursesRecoilInit);
    return courseData;
  },
});
