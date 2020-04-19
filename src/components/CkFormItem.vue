<template>
    <div>
        <label class="ck-form-item__label">{{label}}</label>
        <div class="ck-form-item__content">
            <slot></slot>
        </div>
        <p v-if="errMsg">{{errMsg}}</p>
    </div>
</template>

<script>
    import Schema from 'async-validator'
    export default {
        inject: ['form'],
        props: {
            label: {
                type: String,
                default: ''
            },
            prop: String
        },
        data() { 
            return {
                errMsg: ""
            }
        },
        mounted () {
            this.$on('validate', (trigger, val) => {
                console.log('validate',trigger, val)
                this.validate(trigger, val);
            });
            // this.$on('changeValid', (trigger, val) => {
            //     this.changeValid(trigger, val);
            // })
        },
        methods: {
            validate(trigger, val) {
                //执行组件校验
                //1、 获取组件校验规则
                const rules = this.form.rules[this.prop];

                //2、获取数据
                const value = this.form.model[this.prop];

                //3、执行校验
                const desc = { [this.prop]: rules};
                debugger
                const schema = new Schema(desc);

                return schema.validate({ [this.prop]: value },(errors) => {
                    if(errors) {
                        console.log('err', errors);
                        this.errMsg = errors[0].message;
                    } else {
                        this.errMsg = ""
                    }
                })

                console.log("value", value ,desc)
            }
             
        },
    }
</script>

<style  scoped>
.ck-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
}
.ck-form-item__content {
    display: inline-block;
    vertical-align: top;
    line-height: 40px;
    position: relative;
    font-size: 14px;
    /* float: right;*/
}
.ck-form-item__content::after,  .ck-form-item__content::before{
    display: table;
    content: "";
}
</style>