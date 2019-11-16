<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <a class="navbar-brand" href="#">BlogPostApp</a>
        <input class="form-control col-lg-4 m-2" type="search"
               placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success">Search</button>
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">My blogposts</a>
            </li>
            <li class="nav-item align-middle" v-if="this.isLoggedIn===true">
                <span v-show="userName.length > 0" class="align-middle ml-2">
                    {{userName}}
                </span>
                <button type="button" class="btn btn-danger ml-2" @click="clickToSignOut">
                    Sign out
                </button>
            </li>
            <li class="nav-item align-middle" v-else>                
                <button type="button" class="btn btn-warning" @click="clickToLogin">
                    Login
                </button>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'Header',   
    data() {
        return {
            userName: '',
            profileUrl: '',
            isLoggedIn: false
        }
    },
    created() {
        if(this.$session.exists()) {
            let userObejct = this.$session.get('loggedInUser')
            window.console.log(userObejct)
            this.userName = userObejct.name ? userObejct.name : ''
            this.profileUrl = userObejct.profileUrl ? userObejct.profileUrl : ''
            this.isLoggedIn = true
        } else {
            this.userName = ''
            this.profileUrl = ''
            this.isLoggedIn = false
        }
    },
    methods: {
        clickToLogin() {
            this.$emit('clickToLogIn')
        },
        clickToSignOut() {
            this.userName = '',
            this.profileUrl = '',
            this.isLoggedIn = false
            this.$emit('clickToSignOut')
        },        
    } 
}
</script>