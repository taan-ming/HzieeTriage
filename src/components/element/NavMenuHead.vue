<template>
  <div class="first">
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#18BFFA"
    text-color="#fff"
    active-text-color="#D9D919"
    :ellipsis="false"
    @select="handleSelect"
    style="display: flex; align-items: center; justify-content: space-between;">
      <div class="mleft">
        <span class="codetitle">TriageMaster</span>
      </div>
      <div class="mright">
        <el-avatar @click="showLoginDialog = true">user</el-avatar>
      </div>
    </el-menu>
    <el-dialog title="登录/注册"
              v-model="showLoginDialog"
              width="30%"
              align-center
              >
      <span>这里是登录/注册表单的内容</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showLoginDialog = false">取 消</el-button>
          <el-button type="primary" @click="showLoginDialog = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.el-menu--horizontal {
    align-items: center;
    color: white;
    font-size: 25px;
    font-weight: bold;
}
.codetitle{
  margin-left: 50px;
}
.mright{
  margin-right: 40px;
}
</style>