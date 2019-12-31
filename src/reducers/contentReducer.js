import { SUPPLIER, BUYER, HOME } from '../actions/types';

const initialState = {
	home: '',
	buyer: '',
	supplier: '',
};

export default function(state = initialState, action) {
	switch (action.type) {
		case HOME:
			return {
				...state,
				home: action.payload,
			};
		case BUYER:
			return {
				...state,
				buyer: action.payload,
			};
		case SUPPLIER:
			return {
				...state,
				supplier: action.payload,
			};
		default:
			return state;
	}
}
