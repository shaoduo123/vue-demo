<template>
  <el-table
    :data="userList"
    style="width: 100%">
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="180">
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
        name: "UserList",
        data(){
          return{
            userList :[{
              name:'张山',
              age:'20',
              sex:'男'
            }, {
              name: '张山1',
              age: '20',
              sex: '男'
            },{
              name: '张山2',
              age: '20',
              sex: '男'
            },{
              name: '张山3',
              age: '20',
              sex: '男'
            }]

          }
        },
      methods:{

      }
    }
</script>

<style scoped>

</style>
