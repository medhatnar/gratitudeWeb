//reducer action constants
export const SET_MEDITATIONS = 'SET_MEDITATIONS';

// application data reducer
export const reducer = (state, { action, payload }) => {
	switch (action) {
		case SET_MEDITATIONS:
			return {
				...state,
				meditations: payload,
			};
		default:
			return {
				...state,
			};
	}
};
