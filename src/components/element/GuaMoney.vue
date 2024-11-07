<template>
  <div class="block">
    <div class="get">确认挂号信息</div>
    <el-divider class="line"/>
    <div id="pickitem">
        <div class="item-row">
            <span class="textleft">费用</span>
            <span class="textright">20&nbsp;元</span>
        </div>
        <el-divider/>
        <div class="item-row">
            <span class="textleft">科室</span>
            <span class="textright">消化内科</span>
        </div>
        <el-divider/>
        <div class="item-row">
            <span class="textleft">医生</span>
            <span class="textright">吴化平</span>
        </div>
        <el-divider/>
        <div class="item-row">
            <span class="textleft">就诊时间</span>
            <span class="textright">2024-11-04&nbsp;&nbsp;&nbsp;11:30至12:00</span>
        </div>
    </div>
    <div>
        <el-button type="primary" style="display: flex;justify-self: center;width: 200px;">提&nbsp;&nbsp;&nbsp;&nbsp;交</el-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.block{
  margin: 10px;
  border: 1px solid #b4b4b4;
  border-radius: 15px;
}
.get{
    height: 75px;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
}
.line{
    margin-top: 5px;
}
#pickitem{
    display: flex;
    justify-content: center;
    margin: 50px auto;
    flex-direction: column;
    text-align: center;
    width:500px;
    padding: 10px;
}
.item-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
}
.textleft{
    margin-right: auto;
}
.textright{
    margin-left: auto;
}
.el-divider--horizontal{
    margin: 5px 0;
}
</style>