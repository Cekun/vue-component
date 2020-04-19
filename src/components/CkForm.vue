<template>
    <div class="ck-form">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "CKForm",
        provide(){
            return { form : this}
        },
        props: {
            model: {
                type: Object,
            },
            rules: {
                type: Object
            },
        },
        methods: {
            validate(valid) {
                
                const tasks = this.$children.filter( v => v.prop)
                    .map(v => v.validate());

                Promise.all(tasks)
                    .then(() =>valid(true))
                    .catch(()=>valid(false))
            }
        },
    }
    
</script>

<style scoped>

</style>