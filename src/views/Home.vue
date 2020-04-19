<template>
  <div class="home">
    <ck-form :model="dataForm" :rules="rules" ref="dataForm">
      <ck-form-item label="用户" prop="user">
        <ck-input v-model="dataForm.user"></ck-input>
      </ck-form-item>
      <ck-form-item label="密码" prop="pass">
        <ck-input type="password" v-model="dataForm.pass"></ck-input>
      </ck-form-item>
      <ck-form-item>
        <button @click="submit">验证</button>
      </ck-form-item>
    </ck-form>
  </div>
</template>

<script>
import CkInput from '@/components/CkInput'
import CkFormItem from '@/components/CkFormItem'
import CkForm from '@/components/CkForm'

export default {
  name: 'Home',
  components: {
    CkInput, CkFormItem, CkForm
  },
  data() {
    return {
      value: "",
      dataForm: {
        user: '',
        pass: ''
      },
      rules: {
        user: [
          {required: true, message: '请输入', trigger: 'blur' }
        ],
        pass: [
          {required: true, message: '请输入password', trigger: 'change'},
          {type: 'number', message: '必须是数字'}
        ]
      }
    }
  },
  methods: {
    submit() {
      this.$refs['dataForm'].validate((valid)=> {
        if(valid) {
          alert("submit")
        }
      })
      
      
    }
  },
}
</script>
