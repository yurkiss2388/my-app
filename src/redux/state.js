
let state = {
    profilePage: {
        posts: [
            { id: 1, message: '1000-7', Likes: 12 },
            { id: 2, message: 'пофиг на игру', Likes: 666 },
            { id: 3, message: 'щас шмотки сломаю', Likes: 23 },
            { id: 4, message: 'ты в муте', Likes: 36 },
            { id: 5, message: 'go zxc если не позер', Likes: 777 },
        ],
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Yuron' },
            { id: 2, name: 'Bro' },
            { id: 3, name: 'Lera' },
            { id: 4, name: 'Kamilka' },
            { id: 5, name: 'Sister' },
            { id: 6, name: 'Philip' },
        ],
        messages: [
            { id: 1, message: 'What is love' },
            { id: 2, message: 'Baby dont hurt me' },
            { id: 3, message: 'don hurt me' },
            { id: 4, message: 'no more' },
            { id: 5, message: 'WHAT IS LOOOVE' },
            { id: 6, message: 'BABY DONT hurt ME' },
        ],
    }
    

}

export let addPost =(postMessage) =>{
    let newPost ={
        id: 5,
        message: postMessage,
        Likes:0,

    };
    state.profilePage.posts.push(newPost);
    

}

export default state;