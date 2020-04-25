<template>
    <div>
        <input v-bind="$attrs" :value="value"
         @input="handleInput($event)" @blur="handleBlur($event)" />
    </div>
</template>

<script>
    export default {
        inheritAttrs: false, // 避免顶层容器继承属性
        inject: ['form'],
        data() {
            return {
                value: ''
            }
        },
        mounted () { 
            const rules = this.form.rules;
            console.log(rules, 'input rules');
            
        },
        methods: {
            handleInput(e) {
                this.value = e.target.value;
                this.$emit('input', e.target.value)
                // $parent不构健壮，有可能父组件不是formItem, 建议用broadcast和dispatch
                this.$parent.$emit('changeValid', 'change', e.target.value);
            },
            handleBlur(e) {
                this.$parent.$emit('validate', 'blur', e.target.value)
            }
        },
    }
</script>