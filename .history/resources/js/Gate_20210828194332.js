export default class Gate{

    constructor(user){
        this.user = user;
    }

    isAdmin(){
        return this.user.type === 'admin';
    }

    isUser(){
        return this.user.type === 'user';
    }

    isAdminOrAuthor(){
        if(this.user.type === 'admin' || this.user.type === 'author'){

            returN this.user.type === 'admin';
        }
    }
}