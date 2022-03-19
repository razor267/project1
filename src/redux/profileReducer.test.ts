import profileReducer, {actions} from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 23},
        {id: 2, message: 'It\'s my first post', likesCount: 31},
        {id: 3, message: 'ITK', likesCount: 11}
    ],
    myAvatar: 'http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg',
    profile: null,
    status: "",
    newPostText: ""
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = actions.addPostActionCreator(3, 'ITK_test');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

it('message of new post should be correct', () => {
    // 1. test data
    let action = actions.addPostActionCreator(3,'ITK_test');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[3].message).toBe('ITK_test');
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = actions.deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(2);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = actions.deletePost(10);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});
