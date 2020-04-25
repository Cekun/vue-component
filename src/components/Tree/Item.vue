<template>
    <li>
        <div @click="toggle" style="display: flex"> 
            <!-- 有子元素就显示 -->
            <span v-if="isFolder">[{{open? '-' : '+'}}]</span>
            <span>{{model.title}}</span>
        </div>
        <!-- 子树 -->
        <ul v-show="open" v-if="isFolder">
            <item class="item" v-for="model in model.children"
             :model="model" :key="model.title" />
        </ul>
    </li>
</template>

<script>
    export default {
        name: 'Item',  //递归组件name是必须的
        props: {
            model: {
                type: Object
            },
        },
        computed: {
            isFolder() {  //是否有子树
                return this.model.children && this.model.children.length
            }
        },
        data() {
            return {
                open: false
            }
        },
        methods: {
            toggle() {
                if(this.isFolder){
                    this.open = !this.open;
                }
            }
        },
    }
</script>
