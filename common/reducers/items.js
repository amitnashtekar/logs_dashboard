/**
 * Created by amita on 3/18/2016.
 */
//import { ADD_TO_CART,CHECKOUT_REQUEST,CHECKOUT_SUCCESS,CHECKOUT_FAILURE,RECEIVE_PRODUCTS,RECEIVE_PRODUCTSFAIL,GET_ADDED_CART_ITEMS,REMOVE_FROM_CART} from '../../constants/loginConstants.js'
import {createConstants} from '../util';
const InitialState={
    items:[],
    addedItems:{
        item:[]
    }
}
export function Items(state = InitialState.items, action) {
    switch (action.type) {
        case "RECEIVE_PRODUCTS":
            return[
                ...state.slice(state.length),
                action.products
            ]
        case "RECEIVE_FILTERED_LOGS":
            return[
                ...state.slice(state.length),
                action.products
            ]
        case "RECEIVE_LOGS_LIVE":
            return[
                ...state,
                action.products
            ]
        default:

            return[
                ...state
            ]
    }
}
export function liveLogHandler(state = {}, action) {
    switch (action.type) {
        case "RECEIVE_LIVELOG_HANDLER":
             return Object.assign({},state,{
                 LiveLogHandler: action.LiveLogHandler
        })

        default:
            return state;
    }
}

export function AddedItemsCount(state = InitialState.addedItems.item, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return[
                ...state,
                action.itemid
                 ]
        case "REMOVE_FROM_CART":
            let filteredItemIndex=   state.indexOf(action.itemid)
            return[
                ...state.slice(0,filteredItemIndex),
                ...state.slice(filteredItemIndex+1)
            ]
        default:

            return[
                ...state
                 ]
    }
}
export function GetCartAddedItems(state = InitialState.items, action) {
    switch (action.type) {
        case "GET_ADDED_CART_ITEMS":
       let filteredItems=     action.items.filter((todo,index)=>{
                if(action.itemArr.indexOf(todo.id)!==-1){
            return todo
        }
    }


)

    return  state.concat(filteredItems)

    case "REMOVE_FROM_CART":
        return     state.filter((todo,index)=>{
                if(todo.id !==action.itemid){
        return todo
    }
    })

        default:

            return state
    }
}

