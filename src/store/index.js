import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        Mp3: '',    //播放地址
        taste: 'play-circle',   //当前状态
        information: {  //详细数据
            musicPhoto: require("../assets/image/record.jpg"),    //初始照片
            musicName: '暂无',
            name: '暂无',
            MusicTime: '0', //总共时间
        }

    },
    mutations: {
        //musicPhoto
        musicPhotoData(state, data) {
            state.information.musicPhoto = data;
        },
        musicMusicName(state, data) {
            state.information.musicName = data;
        },
        musicNameData(state, data) {
            state.information.name = data;
        },
        musicMp3(state, data) {
            state.Mp3 = data;
        },
        musicTaste(state, data) {
            if (data === true) {
                //2次相同,再次点击标签就保持当前状态
                return;
            } else if (data === false) {
                state.taste = 'pause-circle'
                return
            }

            //用户自己点击暂停
            state.taste === 'play-circle' ? state.taste = 'pause-circle' : state.taste = 'play-circle'
        },

        MusicTimeData(state, data) {
            state.information.MusicTime = data
        }

    },
    actions: {},
    modules: {}
})
