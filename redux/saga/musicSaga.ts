import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { musicApi } from '../../apis/musicApi';
import { musicActions } from '../slice/musicSlice';

function* getAllMusicSaga({payload} : PayloadAction<string>): any {
  try {
    const res = yield call(() => musicApi.getAll(payload));
    const { data, status } = res;
    console.log(data)
    if (status === 201) {
      yield put(musicActions.getAllSuccess(data));
    }
  } catch (err) {
    yield put(musicActions.getAllFailed());
    console.log(err);
  }
}



function* musicSaga() {
  yield takeEvery('music/getAll', getAllMusicSaga);
}

export default musicSaga;
