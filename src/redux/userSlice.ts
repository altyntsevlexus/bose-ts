/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../api';
import { CredentialsType, UserType } from '../types';

const initialState = <UserType>{
  data: {},
  loading: false,
};

export const userLogin = createAsyncThunk(
  'user/login',
  async (credentials: CredentialsType) => {
    const res = await loginUser(credentials);
    return res;
  },
);

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
    builder.addCase(userLogin.rejected, () => {
      // eslint-disable-next-line no-param-reassign
      console.log('error');
      return initialState;
    });
  },
});

export const { userLogout } = userSlice.actions;

export default userSlice.reducer;
