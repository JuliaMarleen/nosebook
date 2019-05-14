<template>
    <div class="user-page">
        <header>
            <h1>USEEEERR</h1>
            <img alt="Vue logo" src="../assets/logo.png">
            <div class="user">
                <h1>Marleen van Lubeek</h1>
                <h1>24 jaar</h1>
            </div>
        </header>
        <div class="add-message">
            <span>MESSAGE:</span><br>
            <h1>{{ title }}</h1>
            <p style="white-space: pre-line;">{{ addmessage }}</p>
            <br>
            <input v-model="title" placeholder="Title"><br><br>
            <textarea v-model="addmessage" placeholder="Message"></textarea>
        </div>
        <div class="messages">
            <Message title="Title of message" msg="This is the message someone sent to you"/>
            <Message title="Second Title of message" msg="This is the message someone sent to you"/>
            <Message title="Third Title of message" msg="This is the message someone sent to you"/>
            <Message title="Fourth Title of message" msg="This is the message someone sent to you"/>
            <Message title="Fifth Title of message" msg="This is the message someone sent to you"/>
        </div>
    </div>
</template>

<script>

export default {
    name: 'UserPage',
    props: {
        addmessage: String,
        title: String
    }
}
</script>

<style scoped lang="scss">
header{
    float: left;
    margin: 5vw 0 0 10vw;
    width: 100%;
    img{
        float: left;
    }
    .user{
        h1{
            float: left;
            margin: 5vw;
        }
    }
}
.add-message{
    float: left;
    margin: 5vw 0 0 15vw;
    width: 100%;
    input{
        width: 50%;
    }
    textarea{
        width: 50%;
        height: 150px;
    }
}
.messages{
    float: left;
    margin: 5vw 0 0 15vw;
}
</style>