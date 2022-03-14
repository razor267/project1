type ProfileType = {
    name: string
    avatar: string
}

let initialState = [
    {name: 'Evgen', avatar: 'https://www.blast.hk/attachments/64805/'},
    {name: 'Maksim', avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'},
    {name: 'Aleksandr', avatar: 'https://avatarko.ru/img/avatar/11/multfilm_volk_10382.jpg'}
] as Array<ProfileType>;

export type InitialStateType = typeof initialState;

const navBarReducer = (state = initialState, action: any): InitialStateType => {
    return state;
}

export default navBarReducer;