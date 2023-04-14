let initialState = {
    friends: [
        { name: 'Yuriy', id: 1, image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80' },
        { name: 'Kirill', id: 2, image: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg' },
        { name: 'Konstantin', id: 3, image: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0&q=75' }
    ],
    nav_items: [
        { url: '/profile', name: 'Profile', id: 1 },
        { url: '/dialogs', name: 'Messages', id: 2 },
        { url: '/users', name: 'Users' },
        { url: '/news', name: 'News', id: 3 },
        { url: '/music', name: 'Music', id: 4 },
        { url: '/settings', name: 'Settings', id: 5 }
    ]
};

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer;
