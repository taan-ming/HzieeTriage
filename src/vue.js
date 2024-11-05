import AreaPicker from "./components/AreaPicker.vue"

const AreaPickerPlugin = {
    install(app){
        //define a global component
        // app.component('area-picker',{
        //     //add component options
        // })
        app.component('area-picker', AreaPicker)
    }
}

export default AreaPickerPlugin