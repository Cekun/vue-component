<template>
    <div>
        <Node :data='data' />
    </div>
</template>

<script>
    import Node from './Node'
    
    export default {
        components: {
            Node,
        },
        data() {
            return {
                data: {
                    id: '1',
                    title: '递归组件',
                    children: [
                        {
                            id: '1-1', title: '使用方法',
                        },{
                            id: '1-2', title: '注意事项'
                        }
                    ]
                }
            }
        },    
    }
</script>

<style scoped>

</style>