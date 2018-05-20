'use strict';

const initialUsers = [
    { id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: true },
    { id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: true },
    { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false },
  ];

const initialPosts = {
    "-s19a6hqce": [
        { id: "-5sgljaskg", text: "post #1", likes: 3 },
        { id: "-199hb6igr", text: "post #2", likes: 5 },
        { id: "-hy0eyw5qo", text: "post #3", likes: 13 },
      ],
    "-qkpzenjxe": [
        { id: "-5tu69g5rf", text: "post #1", likes: 8 },
        { id: "-bje766393", text: "post #2", likes: 15 },
      ],
    "-e51cpd4di": [
        { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
        { id: "-i03pbhy3s", text: "post #2", likes: 45 },
      ],
    };

const getId = () => "-" + Math.random().toString(36).substr(2, 9);

function SocialBook (users = [], posts = {}) {
    this.users = users;
    this.posts = posts;

    this.getAllUsers = function () {
       return this.users;
    };

    this.getUserByLogin = (loginUser) => {
        return this.users.find(user => user.login === loginUser);
    }

    this.getUserStatus = (userId) => {
        if (this.users.find(user => user.id === userId) != undefined)
            return this.users.find(user => user.id === userId).isActive ? 'active' : 'inactive'
        else
            return 'not found';
    }

    this.addUser = (new_user) => {
        if (this.getUserByLogin(new_user.email) == undefined)
            this.users.push({ id: getId(), login: new_user.email, password: new_user.password, isActive: false });
    }

    this.removeUserById = (userId) => {
        this.users.splice(this.users.indexOf(this.users.find(user => user.id === userId)), 1);
    }

    this.getUserCount = () => {
        return this.users.length;
    }

    this.getUserPosts = (userId) => {
        return this.posts[userId];
    }

    this.addPost = (userId, post) => {
        this.posts[userId].push(post);
    };

    this.getAllLikes = (userId) => {
        return this.posts[userId].reduce((acc, post) => acc + post.likes, 0);
    }

    this.addPostLike = (userId, postId) =>  {
        this.posts[userId].find(post => post.id === postId).likes += 1;
    }

    this.getPostsCount = (userId) => {
        return this.posts[userId].length;
    }
       

};

    const socialBook = new SocialBook(initialUsers, initialPosts);

    console.log(socialBook.getAllUsers());

    socialBook.addPost('-qkpzenjxe', { id: 'xxx', text: 'post #qweqwe', likes: 666 });
    console.log(socialBook);

    console.log(socialBook.getUserByLogin("ajax2k@change.ua"));

    console.log(socialBook.getUserStatus("-e51cpd4di"));

    socialBook.addUser({email: "test@test", password: "123qwe12"});

    console.log(socialBook.getUserCount());

    console.log(socialBook.getAllUsers());

    socialBook.addUser({email: "mangozedog@mail.com", password: "qwe123zv"});

    console.log(socialBook.getAllUsers());

    console.log(socialBook.getUserStatus("-hfgjhgjhgj"));

    socialBook.removeUserById(socialBook.getUserByLogin("test@test").id);

    console.log(socialBook.getAllUsers());

    console.log(socialBook.getUserCount());

    console.log(socialBook.getUserPosts("-e51cpd4di"));

    socialBook.addPost('-qkpzenjxe', { id: 'xxx', text: 'post #qweqwe', likes: 666 });

    console.log(socialBook);

    console.log(socialBook.getAllLikes("-s19a6hqce"));

    socialBook.addPostLike("-s19a6hqce", "-5sgljaskg");

    console.log(socialBook.getUserPosts("-s19a6hqce"));

    console.log(socialBook.getPostsCount("-s19a6hqce"));

    console.log(socialBook.removePost("-e51cpd4di", "-9y6nkmlj4"));

