<template>
    <my-vue-element>
        <div class="h-24 w-48 bg-white">
            <h4>{{title}}</h4>
            <h4>{{msg}}</h4>
        </div>
    </my-vue-element>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
})

function spawn(title,msg,color){

}

</script>

<style lang="scss" scoped>

</style>