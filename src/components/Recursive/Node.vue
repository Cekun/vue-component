<template>
    <div>
        <h3>{{data.title}}</h3>

        <Node v-for="n in data.children" :key="n.id" :data="n" />
    </div>
</template>

<script>
    export default {
        name: 'Node',  //name 对递归组件是必填的
        props: {
            data: {
                type: Object,
                required: true
            }
        }
    }
</script>