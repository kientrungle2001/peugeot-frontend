var testReducer = function(state, action) {
    switch(state) {
        case 'NEW':
            switch(action.type) {
                case 'pay':
                    return 'PAID';
                default:
                    return null;
            }
    }
    return null;
}

export default testReducer;