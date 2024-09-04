import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    articlesdata: [],
    filteredarticles: []
}
export const getArticles = createAsyncThunk('articles/getArticles', async () => {
    return fetch('http://localhost:3000/src/DB/articles.json')
        .then((respons) => { return respons.json() })
});
const articlesSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {
        filterArticlesBySearch(state, action) {
            const { articles, search } = action.payload;
            let temp = []
            articles.filter((article) => {
                if (article.title.toLowerCase().includes(search.toLowerCase())) {
                    temp.push(article)
                }
            })
            state.filteredarticles = temp;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getArticles.pending, () => { })
        builder.addCase(getArticles.fulfilled, (state, action) => {
            state.articlesdata = []
            for (const key in action.payload) {
                state.articlesdata.push({
                    id: action.payload[key]._id,
                    title: action.payload[key].title,
                    category: action.payload[key].category,
                    content: action.payload[key].content,
                    date: action.payload[key].date,
                    time: action.payload[key].time,
                    image: action.payload[key].photoimage,
                })
            }
        })
        builder.addCase(getArticles.rejected, () => { })
    }
});
export const { filterArticlesBySearch } = articlesSlice.actions
export const articlesdata = (state) => state.articles.articlesdata;
export const filterarticles = (state) => state.articles.filteredarticles;
export default articlesSlice;
