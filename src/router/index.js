import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import DialogBox from '~/components/DialogBox.vue'
import GuaHao from '~/components/element/GuaHao.vue'
import DateDoctor from '~/components/element/DateDoctor.vue'
import DoctorTime from '~/components/element/DoctorTime.vue'
import GuaMoney from '~/components/element/GuaMoney.vue'
import DialogBoxDoctor from '~/components/DialogBoxDoctor.vue'

const routes = [{
    path:"/",
    component:DialogBox
},{
    path:"/GuaHao",
    component:GuaHao
},{
    path:"/DateDoctor",
    component:DateDoctor
},{
    path:"/DoctorTime",
    component:DoctorTime
},{
    path:"/GuaMoney",
    component:GuaMoney
},{
    path:"/DialogBoxDoctor",
    component:DialogBoxDoctor
}
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router