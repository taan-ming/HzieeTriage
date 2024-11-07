<template>
    <div class="block">
      <div class="time">
        <div style="padding-top: 13px;">
          <span class="demonstration">选择预约时间：</span>
          <el-date-picker
            v-model="value2"
            type="date"
            placeholder="预约日期"
            :disabled-date="disabledDate"
            :shortcuts="shortcuts"
            :size="size"/>
        </div>
      </div>
      <el-divider/>
      <el-row :gutter="10">
        <el-col :span="8">
            <div class="doctor" @click="$router.push('/DoctorTime')">
                <el-row>
                    <el-avatar class="ht" shape="square" :size="50" :src="squareUrl"/>
                    <span class="hsn">吴化平</span>
                    <span class="ys">副主任医师</span>
                </el-row>
                <span class="adhsp">接诊余量 20</span>
                <el-progress class="number" :percentage="100"/> 
            </div>
        </el-col>
        <el-col :span="8">
            <div class="doctor" @click="$router.push('/DoctorTime')">
                <el-row>
                  <el-avatar class="ht" shape="square" :size="50" :src="squareUrl"/>
                    <span class="hsn">吴化平</span>
                    <span class="ys">副主任医师</span>
                </el-row>
                <span class="adhsp">接诊余量 20</span>
                <el-progress class="number" :percentage="100"/> 
            </div>
        </el-col>
        <el-col :span="8">
            <div class="doctor" @click="$router.push('/DoctorTime')">
                <el-row>
                  <el-avatar class="ht" shape="square" :size="50" :src="squareUrl"/>
                    <span class="hsn">吴化平</span>
                    <span class="ys">副主任医师</span>
                </el-row>
                <span class="adhsp">接诊余量 20</span>
                <el-progress class="number" :percentage="100"/> 
            </div>
        </el-col>
    </el-row>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const value2 = ref('')
const disabledDate = (time) => {
  const currentDate = new Date()
  const monthLater = new Date(currentDate)
  const dateBefore = new Date()
  monthLater.setMonth(currentDate.getMonth() + 1)
  dateBefore.setDate(currentDate.getDate() - 1)
  return time < dateBefore || time > monthLater
}
</script>

<style>
.block{
  margin: 10px;
  border: 1px solid #b4b4b4;
  border-radius: 15px;
}
.time{
  display: flex;
  align-items: center;
  margin-left: 20px;
  height: 100px;
}
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.el-date-picker{
  width: 500px;
  display: flex;
  justify-content: center;
}
.el-date-picker .el-picker-panel__content{
  width: 500px;
}
.adhsp{
  color: #797777;
}
.ys{
    margin-top: 25px;
    margin-left: 20px;
    font-size: 20px;
}
.number{
  max-width: 400px;
  margin-left: 15px;
}
.doctor {
  border-radius: 4px;
  min-height: 136px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: #fff;
  border:solid 1px #b4b4b4;
}
</style>