<template>
<router-link :to="{name: 'Conversation', params: {id:conversation.id}}" class="box">
        <div class="media-content">
        <p class="title is-4">{{conversation.topic}}</p>
        <p class="subtitle is-6">{{conversation.label}}</p>
        </div>
</router-link>
</template>

<script>
export default {
    props: ['conversation']
};
</script>

<style>

</style>