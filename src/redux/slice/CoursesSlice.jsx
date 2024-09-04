import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    coursesdata: [],
    filteredcourses: [],
}
export const getCourses = createAsyncThunk('courses/getCourses', async () => {
    return fetch('http://localhost:3000/src/DB/courses.json')
        .then((respons) => { return respons.json() })
});
const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        filterCoursesBySearch(state, action) {
            const { courses, search } = action.payload;
            let temp = []
            courses.filter((course) => {
                if (course.title.toLowerCase().includes(search.toLowerCase())) {
                    temp.push(course)
                }
            })

            state.filteredcourses = temp;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCourses.pending, () => { })
        builder.addCase(getCourses.fulfilled, (state, action) => {
            state.coursesdata = []
            for (const key in action.payload) {
                state.coursesdata.push({
                    id: action.payload[key].id,
                    title: action.payload[key].title,
                    instructor: action.payload[key].instructor,
                    status: action.payload[key].phone,
                    level: action.payload[key].image,
                    startDate: action.payload[key].startDate,
                    publishedOn: action.payload[key].publishedOn,

                })
            }
        })
        builder.addCase(getCourses.rejected, () => { })
    }
});
export const { filtercoursesBySearch } = coursesSlice.actions;
export const coursesdata = (state) => state.courses.coursesdata;
export const filtercourses = (state) => state.courses.filteredcourses;
export default coursesSlice;
