import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { authApi } from '../../apis/authApi';
import { typeLogin, typeRegister } from '../../types/auth';
import { authActions } from '../slice/authSlice';

function* registerSaga({ payload }: PayloadAction<typeRegister>): any {
  try {
    const res = yield call(() => authApi.register(payload));
    const { data, status } = res;
    if (status === 201) {
      yield put(authActions.registerSuccess(data));
    }
  } catch (err) {
    yield put(authActions.registerFailed());
    console.log(err);
  }
}

function* loginSaga({ payload }: PayloadAction<typeLogin>): any {
  try {
    const res = yield call(() => {
      return authApi.login(payload);
    });
    const { data, status } = res;
    if (status === 201) {
      yield put(authActions.loginSuccess(data));
    }
  } catch (err) {
    yield put(authActions.loginFailed());
    console.log(err);
  }
}

function* forgotpasswordSaga({ payload }: PayloadAction<any>): any {
  try {
    const res = yield call(() => {
      return authApi.forgotPassword(payload);
    });
    if (res.data.code === 1) {
      yield put(authActions.forgotPasswordSuccess(payload));
    }
  } catch (err) {
    yield put(authActions.forgotPasswordFailed());
  }
}


function* otpConfirmSaga({ payload }: PayloadAction<string>): any {
  try {
    const res = yield call(() => {
      return authApi.otpConfirm(payload)
    })
   if(res.data.code === 1) {
    yield put(authActions.otpConfirmSuccess(res.data))
   }
  } catch (err) {
    yield put(authActions.otpConfirmFailed())
  }
}

function* authSaga() {
  yield takeEvery('auth/register', registerSaga);
  yield takeEvery('auth/login', loginSaga);
  yield takeEvery('auth/forgotPassword', forgotpasswordSaga);
  yield takeEvery('auth/otpConfirm', otpConfirmSaga);
}

export default authSaga;
