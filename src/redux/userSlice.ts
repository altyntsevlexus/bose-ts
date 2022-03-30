/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../api';
import { CredentialsType, UserResponseType, UserType } from '../types';

const initialState = <UserType>{
  data: {},
  error: null,
  loading: false,
};

interface ValidationErrors {
  error: {
    message: string;
    name: string;
    status: number;
  };
}

export const userLogin = createAsyncThunk<
  UserResponseType,
  CredentialsType,
  {
    rejectValue: ValidationErrors;
  }
>('user/login', async (credentials, { rejectWithValue }) => {
  try {
    const res = await loginUser(credentials);
    return res;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.data = {
        jwt: payload.jwt,
        id: payload.user.id,
        email: payload.user.email,
        username: payload.user.username,
        blocked: payload.user.blocked,
        confirmed: payload.user.confirmed,
      };
      state.loading = false;
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;

      if (payload) {
        state.error = payload.error.message;
      }
    });
  },
});

export const { userLogout } = userSlice.actions;

export default userSlice.reducer;
