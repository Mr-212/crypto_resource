import React from "react";
import { WEB_SOCKET_AGGIGATE_INDEX } from "../constants/crypto";

const initialState = {
    aggrigate_data: [],
}


const websocket = (state = initialState, action: any) => {

    switch(action.type){
        case WEB_SOCKET_AGGIGATE_INDEX:
            return{
                ...state,
                aggrigate_data: action.payload,
            }
    }

}