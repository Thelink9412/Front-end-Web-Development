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

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (initialPost: Omit<PostType, "id">) => {
    const response = await api.post("http://localhost:3001/posts", initialPost);
    return response.data as PostType;
  },
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (updatedPost: PostType) => {
    const { id } = updatedPost;
    const response = await api.patch(
      `http://localhost:3001/posts/${id}`,
      updatedPost,
    );
    return response.data as PostType;
  },
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id: string) => {
    await api.delete(`http://localhost:3001/posts/${id}`);
    return id;
  },
);

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
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchPosts.fulfilled,
        (state, action: PayloadAction<PostType[]>) => {
          state.status = "succeeded";
          state.items = action.payload;
        },
      )
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch posts";
      })
      .addCase(
        addNewPost.fulfilled,
        (state, action: PayloadAction<PostType>) => {
          state.items.push(action.payload);
        },
      )
      .addCase(
        updatePost.fulfilled,
        (state, action: PayloadAction<PostType>) => {
          const index = state.items.findIndex(
            (post) => post.id === action.payload.id,
          );
          if (index !== -1) state.items[index] = action.payload;
        },
      )
      .addCase(deletePost.fulfilled, (state, action: PayloadAction<string>) => {
        state.items = state.items.filter((post) => post.id !== action.payload);
      });
  },
});

export default postsSlice.reducer;
