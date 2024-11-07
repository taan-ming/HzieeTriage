<template>
  <div class="second">
    <el-col :span="24">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="0"
        router="true"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="0" route="/">
            <span>智能问诊</span>
        </el-menu-item>
        <el-menu-item index="1" route="/DialogBoxDoctor">
          <span>人工问诊</span>
        </el-menu-item>
        <el-menu-item index="2" route="/GuaHao">
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span>健康模块</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  methods:{

  }
}
</script>

<style>
.second{
    width: 200px;
    height: 50%;
    margin-top: 10px;
}
</style>