import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobsdata: [],
  filteredjobs: [],
};
// export const getJobs = createAsyncThunk('jobs/getJobs', async () => {
//     return fetch('')
//         .then((respons) => { return respons.json() })
//     // return fetch(`${process.env.BASE_API_URL_HOST}/auth/getAlljobs-no-admin`)
// });
const jobslice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    filterByLocation(state, action) {
      const { jobs, location } = action.payload;
      let temp = [];
      if (location === "All") {
        temp = jobs;
      } else {
        temp = jobs.filter((pro) => pro.location === location);
      }
      state.filteredjobs = temp;
    },
    filterByJobType(state, action) {
      const { jobs, jobType } = action.payload;
      let temp = [];
      if (jobType.length === 0 || jobType === "") {
        temp = jobs;
      } else if (jobType === "Full Time") {
        temp = jobs.filter((pro) => pro.jobType === jobType);
      } else if (jobType === "Part Time") {
        temp = jobs.filter((pro) => pro.jobType === jobType);
      } else if (jobType === "Remote") {
        temp = jobs.filter((pro) => pro.jobType === jobType);
      }
      state.filteredjobs = temp;
      // console.log('filteredjobs', state.filteredjobs);
    },
    filterByLevel(state, action) {
      const { jobs, level } = action.payload;
      let temp = [];
      if (level === "") {
        temp = jobs;
      } else if (level === "Entry Level") {
        temp = jobs.filter((pro) => pro.level === level);
      } else if (level === "Intermediate") {
        temp = jobs.filter((pro) => pro.level === level);
      } else if (level === "Expert") {
        temp = jobs.filter((pro) => pro.level === level);
      }
      state.filteredjobs = temp;
    },
    filterBySalaryRange(state, action) {
      const { jobs, salaryRange } = action.payload;
      let temp = [];
      if (salaryRange === 0) {
        temp = jobs;
      } else if (salaryRange === 4000) {
        temp = jobs.filter((pro) => pro.minPrice <= salaryRange);
      } else if (salaryRange > 4000 && salaryRange < 10000) {
        temp = jobs.filter((pro) => pro.minPrice <= salaryRange);
      } else if (salaryRange === 10000) {
        temp = jobs.filter((pro) => pro.minPrice >= salaryRange);
      }
      // 1
      state.filteredjobs = temp;
    },
    filterBySearch(state, action) {
      const { jobs, search } = action.payload;
      let temp = [];
      jobs.filter((pro) => {
        if (pro.jobName.toLowerCase().includes(search.toLowerCase())) {
          temp.push(pro);
        }
      });

      state.filteredjobs = temp;
    },
    clear(state) {
      state.filteredjobs = [];
    },
  },
  // extraReducers: (builder) => {
  //     builder.addCase(getJobs.pending, () => { })
  //     builder.addCase(getJobs.fulfilled, (state, action) => {
  //         state.jobsdata = []
  //         for (const key in action.payload) {
  //             state.jobsdata.push({
  //                 id: action.payload[key]._id,
  //                 jobName: action.payload[key].jobName,
  //                 description: action.payload[key].description,
  //                 tools: action.payload[key].tools,
  //                 location: action.payload[key].location,
  //                 minPrice: action.payload[key].minPrice,
  //                 maxPrice: action.payload[key].maxPrice,
  //                 time: action.payload[key].time,
  //                 jobType: action.payload[key].jobType,
  //                 level: action.payload[key].level,
  //                 itemquantity: action.payload[key].itemquantity,
  //                 favourit: action.payload[key].favourit,
  //             })
  //         }
  //     })
  //     builder.addCase(getJobs.rejected, () => { })
  // }
});
export const {
  filterByLocation,
  filterByJobType,
  filterByLevel,
  filterBySearch,
  filterBySalaryRange,
  clear,
} = jobslice.actions;
export const jobsdata = (state) => state.jobs.jobsdata;
export const filterejobs = (state) => state.jobs.filteredjobs;
export default jobslice;
