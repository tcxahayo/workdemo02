import { combineReducers } from 'redux';
import { marketingAdInfoReducer } from "mapp_common/marketing/reducer";
import { refundListReducer } from "pcPages/refundManagement/reducer";

export default combineReducers({
    marketingAdInfoReducer,
    refundListReducer,
});

