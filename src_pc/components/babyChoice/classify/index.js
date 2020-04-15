import Taro, { Component } from '@tarojs/taro';
import { View, Checkbox, Text, Image } from '@tarojs/components';
import './index.scss';

class ClassContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View className='class-content'> 这是分类的返回页面</View>
         );
    }
}
 
export default ClassContent;