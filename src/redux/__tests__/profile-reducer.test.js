import profileReducer, { addPostActionCreator, deletePost, setStatus } from "../profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'Hi', likes_count: 12 },
        { id: 2, message: 'blabla', likes_count: 11 },
        { id: 3, message: "it's my first post", likes_count: 13 }
    ],
    profile: null,
    status: ''
};

it('length of posts should be incremented', () => {
    let action = addPostActionCreator('it-kamasutra.com');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});

it('message of new post should be correct', () => {
    let action = addPostActionCreator('it-kamasutra.com');
    let newState = profileReducer(state, action);
    expect(newState.posts[3].message).toBe('it-kamasutra.com');
});

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});

it('after deleting length of messages shouldn\'t be decrement if id is incorrect', () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

it('status should be set correctly', () => {
    let action = setStatus('hello');
    let newState = profileReducer(state, action);
    expect(newState.status).toBe('hello');
});
