export const reducer = (state, action) => {
    switch (action.type) {
        case "DISABLE_SIDEBAR":
            return {
                ...state,
                sidebarEnabled: false,
            };
        case "ENABLE_SIDEBAR":
            return {
                ...state,
                sidebarEnabled: true,
            };
        case "TOGGLE_SIDEBAR":
            return {
                ...state,
                sidebarEnabled: !state.sidebarEnabled,
            };
        default:
            return state;
    }
};
