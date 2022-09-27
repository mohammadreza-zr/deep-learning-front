import Cookies from 'js-cookie';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type RoleType = 'USER' | 'ADMIN' | 'SUPER_ADMIN';

const token = Cookies.get('token');
const last = Cookies.get('last');
const role: RoleType | string = localStorage.getItem('role') || '';
const fullName = localStorage.getItem('fullName') || '';

interface AuthState {
  isLogin: boolean;
  token: string | null;
  refToken: boolean;
  role: RoleType | string;
  fullName: string;
}

const initialState: AuthState = {
  isLogin: token ? true : false,
  token: token ? token : null,
  refToken: last ? true : false,
  role: role,
  fullName: fullName,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
      state.isLogin = true;
      state.role = action.payload.role;
      state.fullName = action.payload.fullName;
      localStorage.setItem('role', action?.payload?.role || '');
      localStorage.setItem('fullName', action?.payload?.fullName || '');
      Cookies.set('token', action.payload.token || '', {
        expires: 2,
      });
      Cookies.set('last', 'true', {
        expires: 0.041666666666666664,
      });
    },
    removeToken: (state: AuthState) => {
      state.token = null;
      state.isLogin = false;
      state.role = '';
      state.fullName = '';
      Cookies.remove('token');
      Cookies.remove('last');
      localStorage.removeItem('role');
      localStorage.removeItem('fullName');
    },
  },
});

export const { setToken, removeToken } = authSlice.actions;
export const selectCount = (state: RootState) => state.auth.isLogin;

export default authSlice.reducer;
