import Taro, { Component } from '@tarojs/taro';
import { View, Checkbox, Text, Image } from '@tarojs/components';
import './icnofont.scss';
import './index.scss';
import MyPagination from '../../myPagination/index';

class BabyContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    onPageChange = (type, v) => {

    }
    render() {
        const PAGE_SIZE_LIST = [20, 40, 80, 100]; 
        return ( 
            <View className='baby-content'>
                <View className='select-box'>
                    <View className='select1'>
                        <select className='select' onToggleHighlightItem="onToggleHighlightItem" defaultValue="出售中" showSearch hasClear>
                            <option value="出售中">出售中</option>
                            <option value="仓库中">仓库中</option>
                            <option value="已售完">已售完</option>
                        </select>
                    </View>
                    <View className='select2'>
                        <select className='select' defaultValue="全部分类"> 
                            <option value="全部分类">全部分类</option>
                            <option value="未分类" selected>未分类</option>
                        </select>
                    </View>
                    <View className='select3'>
                            <select className='select'>
                                <option value="宝贝关键词">宝贝关键词</option>
                                <option value="商家编码">商家编码</option>
                            </select>
                            <View className='input-box'>
                                <View className='iconfont icno'>&#xe620;</View>
                                <Input className='input' placeholder="请输入搜索内容" />
                            </View>
                    </View>
                    <View className='btu-search'>
                        <Button className='btu'>搜索</Button>
                    </View>
                </View>
                <View className='babyList'>
                    <View className='muen'> 
                        <checkbox className='cheack-all'>全选</checkbox>
                        <View className='name'>宝贝信息</View>
                        <View className='price'>价格</View>
                        <View className='inventory'>
                            <View className='txt'>库存</View>
                            <View className='oper'>
                                <View className='iconfont icno-up'>&#xe62a;</View>
                                <View className='iconfont icno-down'>&#xe634;</View>
                            </View>
                        </View>
                        <View className='sales'>
                            <View className='txt'>销量</View>
                                <View className='oper'>
                                    <View className='iconfont icno-up action'>&#xe62a;</View>
                                    <View className='iconfont icno-down'>&#xe634;</View>
                                </View>
                            </View>
                    </View>
                    <View className='content'>
                        <checkbox className='baby-info'>
                            <image src='' className='img'></image>
                            <View className='name'>活动名称活动名称活动名称活动名称活动名称</View>
                            <View className='price'>¥12.00</View>
                            <View className='inventory'>266</View>
                            <View className='sales'>0</View>
                        </checkbox>
                        <checkbox className='baby-info'>
                            <image src='' className='img'></image>
                            <View className='name'>活动名称活动名称活动名称活动名称活动名称</View>
                            <View className='price'>¥12345.00</View>
                            <View className='inventory'>9999</View>
                            <View className='sales'>0</View>
                        </checkbox>
                        <checkbox className='baby-info'>
                            <image src='' className='img'></image>
                            <View className='name'>活动名称活动名称活动名称活动名称活动名称</View>
                            <View className='price'>¥12345.00</View>
                            <View className='inventory'>9999</View>
                            <View className='sales'>0</View>
                        </checkbox>
                        <checkbox className='baby-info'>
                            <image src='' className='img'></image>
                            <View className='name'>活动名称活动名称活动名称活动名称活动名称</View>
                            <View className='price'>¥12345.00</View>
                            <View className='inventory'>9999</View>
                            <View className='sales'>0</View>
                        </checkbox>
                        <checkbox className='baby-info'>
                            <image src='' className='img'></image>
                            <View className='name'>活动名称活动名称活动名称活动名称活动名称</View>
                            <View className='price'>¥12345.00</View>
                            <View className='inventory'>9999</View>
                            <View className='sales'>0</View>
                        </checkbox>
                        <checkbox className='baby-info'>
                            <image src='' className='img'></image>
                            <View className='name'>活动名称活动名称活动名称活动名称活动名称</View>
                            <View className='price'>¥12345.00</View>
                            <View className='inventory'>9999</View>
                            <View className='sales'>0</View>
                        </checkbox>
                        <checkbox className='baby-info'>
                            <image src='' className='img'></image>
                            <View className='name'>活动名称活动名称活动名称活动名称活动名称</View>
                            <View className='price'>¥12345.00</View>
                            <View className='inventory'>9999</View>
                            <View className='sales'>0</View>
                        </checkbox>
                        <checkbox className='baby-info'>
                            <image src='' className='img'></image>
                            <View className='name'>活动名称活动名称活动名称活动名称活动名称</View>
                            <View className='price'>¥12345.00</View>
                            <View className='inventory'>9999</View>
                            <View className='sales'>0</View>
                        </checkbox>
                        <checkbox className='baby-info'>
                            <image src='' className='img'></image>
                            <View className='name'>活动名称活动名称活动名称活动名称活动名称</View>
                            <View className='price'>¥12345.00</View>
                            <View className='inventory'>9999</View>
                            <View className='sales'>0</View>
                        </checkbox>
                        <checkbox className='baby-info'>
                            <image src='' className='img'></image>
                            <View className='name'>活动名称活动名称活动名称活动名称活动名称</View>
                            <View className='price'>¥12345.00</View>
                            <View className='inventory'>9999</View>
                            <View className='sales'>0</View>
                        </checkbox>
                        <checkbox className='baby-info'>
                            <image src='' className='img'></image>
                            <View className='name'>活动名称活动名称活动名称活动名称活动名称</View>
                            <View className='price'>¥12345.00</View>
                            <View className='inventory'>9999</View>
                            <View className='sales'>0</View>
                        </checkbox>

                    </View>
                </View>
                <View className='page-box'>
                    <View className='page'>
                        <MyPagination
                            total={200}
                            pageNo={1}
                            pageSizeSelector='dropdown'
                            pageSize={20}
                            pageSizeList={PAGE_SIZE_LIST}
                            onPageSizeChange={this.onPageChange.bind(this, 'pageSize')}
                            onPageNoChange={this.onPageChange.bind(this, 'pageNo')}
                        />
                  
                        <View className='current-page'>

                        </View>
                    </View>
                    <Button className='btu-sub'>确定（1/20）</Button>
                </View>
                
            </View>
         );
    }
}
 
export default BabyContent;