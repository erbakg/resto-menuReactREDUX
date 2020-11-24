const reducer = (stete, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                menu: action.payload
            }
    }
}