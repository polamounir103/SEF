// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     coursesdata: [],
//     filteredcourses: [],
// }
// export const getCourses = createAsyncThunk('courses/getCourses', async () => {
//     return fetch('../DB/courses.json')
//         .then((respons) => { return respons.json() })
// });

// const coursesSlice = createSlice({
//     name: "courses",
//     initialState,
//     reducers: {
//         filterCoursesBySearch(state, action) {
//             const { courses, search } = action.payload;
//             let temp = []
//             courses.filter((course) => {
//                 if (course.title.toLowerCase().includes(search.toLowerCase())) {
//                     temp.push(course)
//                 }
//             })

//             state.filteredcourses = temp;
//         }
//     },
//     extraReducers: (builder) => {
//         builder.addCase(getCourses.pending, () => { })
//         builder.addCase(getCourses.fulfilled, (state, action) => {
//             state.coursesdata = []
//             for (const key in action.payload) {
//                 state.coursesdata.push({
//                     id: action.payload[key].id,
//                     title: action.payload[key].title,
//                     instructor: action.payload[key].instructor,
//                     status: action.payload[key].phone,
//                     level: action.payload[key].image,
//                     startDate: action.payload[key].startDate,
//                     publishedOn: action.payload[key].publishedOn,

//                 })
//             }
//         })
//         builder.addCase(getCourses.rejected, () => { })
//     }
// });
// export const { filtercoursesBySearch } = coursesSlice.actions;
// export const coursesdata = (state) => state.courses.coursesdata;
// export const filtercourses = (state) => state.courses.filteredcourses;
// export default coursesSlice;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch courses data
export const fetchCourses = createAsyncThunk("courses/fetchCourses", async () => {
  const response = await axios.get("../DB/courses.json");
  return response.data;
});

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default coursesSlice.reducer;
