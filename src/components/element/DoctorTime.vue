<template>
  <div class="block">
      <div class="doctorgh">
              <el-avatar class="doctorpic" shape="square" :size="80" :src="squareUrl"/>
              <span class="doctorname">吴化平</span>
              <span class="ys">副主任医师</span>
      </div>
      <div>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="个人简介" name="1">
            <div>吴化平，农垦医院皮肤科副主任</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    <div class="timemoney" @click="$router.push('/GuaMoney')">
        <span>11:30至12:00</span>
        <div>
          <span class="timeitem">20</span>
          <span class="yuan">元</span>
        </div>
        <span>可挂号</span>
    </div>
    <div class="timemoney" @click="$router.push('/GuaMoney')">
      <span>11:30至12:00</span>
        <div>
          <span class="timeitem">20</span>
          <span class="yuan">元</span>
        </div>
        <span>可挂号</span>
    </div>
    <div class="timemoney" @click="$router.push('/GuaMoney')">
        <span>11:30至12:00</span>
        <div>
          <span class="timeitem">20</span>
          <span class="yuan">元</span>
        </div>
        <span>可挂号</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.doctorgh{
  display: flex;
  margin-top: 35px;
  margin-left: 35px;
  margin-bottom: 20px;
}
.doctorname{
    margin-top: 20px;
    font-weight: bold;
    font-size: 25px;
    margin-left: 40px;
}
.el-collapse-item__header{
  width: 95%;
  margin-left: 35px;
}
.el-collapse-item__content{
  width: 790px;
  margin-left: 40px;
}
.timemoney{
  margin:10px;
  border: 1px solid #adadad;
  padding: 10px;
  padding-left: 30px;
  border-radius: 10px;
  display: flex;
  gap: 50px;
}
.yuan{
  margin-left: 5px;
}
.timeitem{
  color: #f39f3f;
}
</style>