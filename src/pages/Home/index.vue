<script src='./Home.js'></script>
<template lang='pug'>
    .home
        h1 {{ fullName }}
        h1 {{ m }}
        input(type='text' v-model='username')
        button(@click='changeName') Change Name
</template>
