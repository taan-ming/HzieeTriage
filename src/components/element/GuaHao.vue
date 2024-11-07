<template>
  <div class="guahao">
    <!-- <area-picker></area-picker> -->
    <div class="chose">
        <div class="areachose" style="margin-left: 20px;margin-top: 15px;">
        <span>地区选择：</span>
        <el-tree-select v-model="value1" 
                        :data="areadata" 
                        :render-after-expand="false" 
                        check-strictly
                        style="width: 220px;" @change="handleAreaChange"/>
        </div>
        <div class="kschose" style="margin-top: 15px;margin-left: 20px;">
            <span>科室选择：</span>
            <el-tree-select v-model="value" 
                            :data="data" 
                            :render-after-expand="false" 
                            style="width: 220px;" @change="handleDeptChange"/>
        </div>
    </div>
    <el-divider/>
    <el-row :gutter="10">
        <!-- <el-col v-for="(hospital, index) in hospitalList" :key="index" :span="8">
            <div class="hospital" @click="$router.push('/DateDoctor')">
                <el-row>
                    <el-avatar class="ht" :size="50" :src="hospital.circleUrl"/>
                    <span class="hsn">{{hospital.name}}</span>
                </el-row>
                <span class="adhsp">地址：{{hospital.address}}</span>
            </div>
        </el-col> -->
        <el-col :span="8">
            <div class="hospital" @click="$router.push('/DateDoctor')">
                <el-row>
                    <el-avatar class="ht" :size="50" :src="circleUrl"/>
                    <span class="hsn">附属中医院</span>
                </el-row>
                <span class="adhsp">地址：广东省湛江市赤坎区永恒街道3号</span>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="hospital" @click="$router.push('/DateDoctor')">
                <el-row>
                    <el-avatar class="ht" :size="50" :src="circleUrl"/>
                    <span class="hsn">附属中医院</span>
                </el-row>
                <span class="adhsp">地址：广东省湛江市赤坎区永恒街道3号</span>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="hospital" @click="$router.push('/DateDoctor')">
                <el-row>
                    <el-avatar class="ht" :size="50" :src="circleUrl"/>
                    <span class="hsn">附属中医院</span>
                </el-row>
                <span class="adhsp">地址：广东省湛江市赤坎区永恒街道3号</span>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script setup>
// import AreaPicker from '../AreaPicker.vue'
import {ref} from 'vue'
// import {ref, onMounted} from 'vue'
// import axios from 'axios'

const value = ref()
const value1 = ref()
const data = [
    {value: '1',label: '公共科室',children:[{value: '1-1', label:'急诊医学科'},
                                            {value: '1-2', label:'针灸理疗科'},
                                            {value: '1-3', label:'血液净化科'},
                                            {value: '1-4', label:'营养科'},
                                            {value: '1-5', label:'癌症防治办'}
    ]},
    {value: '2',label: '门诊科室',children:[{value: '2-1', label:'门诊核酸检测'},
                                            {value: '2-2', label:'门诊妇产科'},
                                            {value: '2-3', label:'门诊耳鼻喉科'},
                                            {value: '2-4', label:'门诊眼科'},
                                            {value: '2-5', label:'门诊皮肤科'},
                                            {value: '2-6', label:'疼痛门诊'}
    ]},
    {value: '3',label: '医技科室',children:[{value: '3-1', label:'临床药学科'}]},
    {value: '4',label: '住院科室',children:[{value: '4-1', label:'消化内科'},
                                            {value: '4-2', label:'心血管内科'},
                                            {value: '4-3', label:'康复医学科'},
                                            {value: '4-4', label:'神经内科'},
                                            {value: '4-5', label:'泌尿外科'}
    ]}
]
const areadata = [
{value: '1',label: '广东',children:[{value: '1-1', label:'广州'},
                                    {value: '1-2', label:'湛江'}
    ]},
    {value: '2',label: '浙江',children:[{value: '2-1', label:'杭州',children:[{value: '2-1-1', label:'临安'}]},
                                        {value: '2-2', label:'宁波'}
    ]},
    {value: '3',label: '广西',children:[{value: '3-1', label:'桂林'}]}
]
// const areadata = ref([])
// const hospitalList = ref([])
// onMounted(async () => {
//   await fetchAreaData()
//   await fetchHospitalData()
// })

// async function fetchAreaData() {
//   try {
//     const response = await axios.get('/api/getAreaData') // 假设后端接口为 /api/getAreaData
//     areadata.value = response.data
//   } catch (error) {
//     console.error('Error fetching area data:', error)
//   }
// }
// async function fetchHospitalData() {
//   try {
//     const response = await axios.get('/api/getHospitalData') // 假设后端接口为 /api/getHospitalData
//     hospitalList.value = response.data
//   } catch (error) {
//     console.error('Error fetching hospital data:', error)
//   }
// }

function handleAreaChange(selectedValue) {
  console.log('地区选择变化:', selectedValue);
}

function handleDeptChange(selectedValue) {
  console.log('科室选择变化:', selectedValue);
}
</script>

<style>
.guahao{
    border: solid 1px #b4b4b4;
    border-radius: 15px;
    margin: 10px;
}
.chose{
    height: 100px;
    display: flex;
    align-items: center;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.hospital {
  border-radius: 4px;
  min-height: 136px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: #fff;
  border:solid 1px #b4b4b4;
}
.ht{
    margin: 15px;
}
.hsn{
    margin-top: 20px;
    font-weight: bold;
    font-size: 25px;
}
.adhsp{
    margin-left: 15px;
}
</style>