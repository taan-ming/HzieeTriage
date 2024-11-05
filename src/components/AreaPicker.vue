<template>
  <div class="area-picker">
        <select v-model="selectedProvince">
            <option value="">请选择省份</option>
            <option v-for="province in provinces" :value="province">{{ province.name }}</option>
        </select>
        <select v-model="selectedCity" :disabled="!cities.length">
            <option value="">请选择城市</option>
            <option v-for="city in cities" :value="city">{{ city.name }}</option>
        </select>
        <select v-model="selectedArea" :disabled="!areas.length">
            <option value="">请选择区县</option>
            <option v-for="area in areas" :value="area">{{ area.name }}</option>
        </select>
    </div>
</template>

<script>
export default {
    data(){
        return{
            selectedProvince:'',
            selectedCity:'',
            selectedArea:'',
             provinces:[],
            cities:[],
            areas:[]
        }
    },
    methods:{
        provinceChanged(){
            // Update cities
        },
        cityChanged(){
            // Update areas
        },
        areaChanged(){
            //data from api
        }
    },
    mounted(){
        this.loadData();
    }
}
</script>

<style>
.area-picker{
    display: flex;
    flex-wrap: wrap;
}
select{
    margin-right: 10px;
}
</style>