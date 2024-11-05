<template>

    <div class="block">
      <span class="demonstration">Picker with quick options</span>
      <el-date-picker
        v-model="value2"
        type="date"
        placeholder="Pick a day"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
        :size="size"
      />
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
/* .datepicker{
  border: 1px solid #c0c0c0;
  margin: 10px;
} */
/* .date{
  margin-left: 15px;
  margin-top: 20px;
  /* padding: 30px 0; */
  /* text-align: center; */
  /* border-right: solid 1px var(--el-border-color); */
  /* display: block;
  font-size: 14px;
  margin-bottom: 20px;
} */ 
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
</style>