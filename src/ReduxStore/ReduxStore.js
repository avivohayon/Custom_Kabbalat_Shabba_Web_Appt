import {configureStore, createSlice} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {value: {titleName: "", imgUrls: [], body:"", tamplateConfig: 1}};

const persistConfig = {
    key: 'root',
    storage,
  };


const userSlice = createSlice({
    name: "userInfo",
    initialState :initialState,
    reducers: {
        savePDFTitle : (state, action) => {
            state.value = action.payload;
        },
        saveImageUrl: (state,action) => {
            console.log('saveImageUrl from ReducStore is:')

            const imageUrls = action.payload;
            // console.log(imageUrls)
            // state.value.imgUrls = state.value.imgUrls.concat(imageUrls);
            state.value.imgUrls = imageUrls;
            console.log(state.value.imgUrls)


        },
        saveTampelateConfig: (state, action) => {
            console.log("from ReduxStore: prevTampelateID: ",state.value.tamplateConfig )
            console.log("from ReduxStore: payload: ",action.payload )
            if(state.value.tamplateConfig === action.payload) {
                state.value.tamplateConfig = 1;

            }else {
                state.value.tamplateConfig = action.payload;

            }
            console.log("LATEST ReduxStore: tampletaID: ",state.value.tamplateConfig )

        },
        removeFromCart : (state, action) => {
            const url = action.payload;
            state.value.imgUrls = state.value.imgUrls.filter((item) => item !== url);

        }
    }

})

export const {savePDFTitle, saveImageUrl, saveTampelateConfig} = userSlice.actions;
const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

export const store = configureStore({
    reducer: {
        userInfo : persistedReducer,
    },
}); 

export const persistor = persistStore(store);

