import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import DialogBox from '~/components/DialogBox.vue'
import GuaHao from '~/components/element/GuaHao.vue'
import DateDoctor from '~/components/element/DateDoctor.vue'

const routes = [{
    path:"/",
    component:DialogBox
},{
    path:"/GuaHao",
    component:GuaHao
},{
    path:"/DateDoctor",
    component:DateDoctor
}
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router