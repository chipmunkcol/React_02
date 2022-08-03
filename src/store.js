import { configureStore, createSlice,  } from "@reduxjs/toolkit";

const input = createSlice({
    name: 'input',
    initialState: '',
    reducers: {
        addInput(state, action){
            state = action.payload
            console.log(state)
        }
    }
})

export let { addInput } = input.actions

export const bucket = createSlice({
    name: 'bucket',
    initialState: [],
    reducers: {
        addBucket(state, action){
            state.push(action.payload)
        },
        delBucket(state, action){
            const a = state.findIndex((val)=> val.id === action.payload)
            state.splice(a,1)
        },
        doneBucket(state, action){
            const a = state.findIndex((val)=> val.id === action.payload)
            state[a].done = true
        },
        cancelBucket(state, action){
            const a = state.findIndex((val)=> val.id === action.payload)
            state[a].done = false
        }
    }
})

export let { addBucket, delBucket, doneBucket, cancelBucket } = bucket.actions




export const store = configureStore({
    reducer: {
        input : input.reducer,
        bucket : bucket.reducer,
    }
});