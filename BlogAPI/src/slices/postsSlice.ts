import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { PostType } from "../lib/types";
import api from "../api/posts";
interface PostState {
  items: PostType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await api.get("http://localhost:3001/posts");
  return response.data as PostType[];
});

const initialState: PostState = {
  items: [],
  status: "idle",
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      fetchPosts.fulfilled,
      (state, action: PayloadAction<PostType[]>) => {
        state.status = "succeeded";
        state.items = action.payload;
      },
    );
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Failed to fetch posts";
    });
  },
});

export default postsSlice.reducer;