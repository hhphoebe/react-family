import {combineReducers} from 'redux';

import counter from './reducers/counter';
import userInfo from './reducers/userInfo';

export default  combineReducers({
    counter,
    userInfo
});


/*把所有的项目都整合到一起。reducer就是纯函数，接收state和action，然后返回一个新的state
* combineRducer函数是处理整个树，reducer函数是处理树的某一点
* 使用reducers来根据action更新state
* */