//reducer action constants
export const SET_MEDITATIONS = 'SET_MEDITATIONS';
export const CHOOSE_MEDITATION = 'CHOOSE_MEDITATION';

// application data reducer
export const reducer = (state, { action, payload }) => {
	switch (action) {
		case SET_MEDITATIONS:
			return {
				...state,
				meditations: payload,
			};
		case CHOOSE_MEDITATION:
			return {
				...state,
				chosenMeditation: payload,
			}
		default:
			return {
				...state,
			};
	}
};
