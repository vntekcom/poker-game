import { combineReducers }  from 'redux';
import user from './user';
import players from './player';
import deck from './card';
import status from './user';

//Tong hop tat ca reducer
const rootReducer = combineReducers ({
    //nơi chưa toàn bộ dữ liệu state
    user,
    players,
    deck,
    status
})

export default rootReducer;