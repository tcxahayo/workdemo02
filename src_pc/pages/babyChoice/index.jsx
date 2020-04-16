import Taro, { Component } from '@tarojs/taro';
import { View, Text, Input, Button } from '@tarojs/components';
import './index.scss';
import BabyContent from '../../components/babyChoice/baby/index';
import ClassContent from '../../components/babyChoice/classify/index';

class BabyChoice extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            baby:true
         }
    }
    //顶部tab切换
    changeOperation =(index)=>{
        if(index === 'baby'){
            this.setState({
                baby:true
            })
        }else{
            this.setState({
                baby:false
            })
        }
    }
    render() {
        return (
            <View className='babyChoice'>
                <View className='baby-tab'>
                    <View className={`tab1 ${this.state.baby ? 'action': ''}`} onClick={this.changeOperation.bind(this,'baby')}>按宝贝选择</View>
                    <View className={`tab2 ${this.state.baby ? '': 'action'}`}  onClick={this.changeOperation.bind(this,'class')}>按分类选择</View>
                </View>
                <View className="babyContent">
                <BabyContent />
                </View>
            </View>
        );
    }
}

export default BabyChoice;
