const NEW_MESSAGE = 'NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case NEW_MESSAGE:
            let newMessage = {
                id: action.idMessage,
                message: state.newMessageText,
                iOrNot: true
            };
            state.dialogs[action.idDialog].dialog.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }

}

export const newMessageActionCreator = (idMessage, idDialog) => ({
    type: NEW_MESSAGE,
    idMessage: idMessage,
    idDialog: idDialog
});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;