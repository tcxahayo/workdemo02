import Taro, { Component } from '@tarojs/taro';
import { View, Checkbox, Text, Image } from '@tarojs/components';
import './icnofont.scss';
import './index.scss';
import MyPagination from '../../myPagination/index';
import { taobaoItemListGet } from 'tradePublic/itemTopApi/taobaoItemListGet.js';

class BabyContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: 'title,num_iid,pic_url,num,price,sold_quantity',
            page: 1,
            status: '出售中',
            list: [],
            total_results: '',
            current: 1,
            order_by: 'list_time:desc',
            keywords: '',
            cheackNum:0
        }
    }
    getList = () => {
        taobaoItemListGet(
            {
                fields: this.state.fields,
                page_no: this.state.current,
                page_size: 20,
                status: this.state.status,
                extraArgs: {
                    order_by: this.state.order_by,
                    q: this.state.keywords
                },
                callback: (data) => {
                    console.log(data);
                    if (data.total_results > 0) {
                        let newList = data.items.item.map((item, index) => {
                            item.pic_url = item.pic_url + '_60x60.jpg';
                            item.checked = false;
                            return item;
                        })
                        this.setState({
                            list: newList,
                            total_results: data.total_results,
                            keywords: ''
                        })
                    } else {
                        this.setState({
                            list: []
                        })
                    }

                }
            }
        )
    }
    //切换商品状态
    changeStatus = (e) => {
        console.log(e.detail.value);
        this.setState({
            status: e.detail.value
        })
    }
    //点击页数
    changePage = (current) => {
        this.setState({
            current: current
        }, () => {
            this.getList();
        })
    }
    //确定查询
    serach = () => {
        console.log(123)
        this.setState({
            current: 1,
            order_by: 'list_time:desc'
        }, () => {
            this.getList();
        })
    }
    //点击排序
    orderBy = (value) => {
        this.setState({
            order_by: value
        }, () => {
            this.getList();
        })
    }
    //输入关键词
    valueChange = (e) => {
        this.setState({
            keywords: e.target.value
        })
    }
    //cheackbox,单选
    changeChecked = (e)=> {
        console.log(e);
        let index = e.target.dataset.index;
        let newList = this.state.list;
        newList[index].checked = !newList[index].checked;
        if(e.target.value){
            this.setState({
                cheackNum:this.state.cheackNum +1,
                list:newList
            })
        }else{
            this.setState({
                cheackNum:this.state.cheackNum -1,
                list:newList
            })
        }
    }
    //全选
    checkAll = (e)=> {
        console.log(e);
        console.log(e.target.id);
        let newList = this.state.list;
        let num = 0;
        if(e.target.value){
            newList.map((item)=>{
                if(item.checked == false){
                    num +=1
                }
                item.checked = true;
                return item
            })
            this.setState({
                list:newList,
                cheackNum:this.state.cheackNum + num
            })
        }else{
            newList.map((item)=>{
                if(item.checked == true){
                    num +=1
                }
                item.checked = false;
                return item
            })
            this.setState({
                list:newList,
                cheackNum:this.state.cheackNum - 20
            })
        }
        
    }
    demo = ()=>{
        this.setState({
            checked:!this.state.checked
        })
        sessionStorage.setItem('data',data);
        console.log(this.state.list);
    }
    componentDidMount() {
        //初始化页面数据，获取出售中的商品
        this.getList();
    }
    render() {
        const { list, total_results, current, order_by, keywords, cheackNum ,checked } = this.state;
        return (
            <View className='baby-content'>
                <View className='select-box'>
                    <View className='select1'>
                        <select className='select' onChange={this.changeStatus} onToggleHighlightItem="onToggleHighlightItem" defaultValue="出售中" showSearch hasClear>
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
                            <Input className='input' placeholder="请输入搜索内容" value={keywords} onChange={this.valueChange} />
                        </View>
                    </View>
                    <View className='btu-search'>
                        <Button className='btu' onClick={this.serach}>搜索</Button>
                    </View>
                </View>
                <View className='babyList'>
                    <View className='muen'>
                        <checkbox className='cheack-all' id='all' onChange={this.checkAll} values='123'>全选</checkbox>
                        <View className='name'>宝贝信息</View>
                        <View className='price' onClick={this.demo}>价格</View>
                        <View className='inventory'>
                            <View className='txt'>库存</View>
                            <View className='oper'>
                                <View className={`iconfont icno-up ${order_by === 'num:asc' ? 'action' : ''}`} onClick={this.orderBy.bind(this, 'num:asc')}>&#xe62a;</View>
                                <View className={`iconfont icno-down ${order_by === 'num:desc' ? 'action' : ''}`} onClick={this.orderBy.bind(this, 'num:desc')}>&#xe634;</View>
                            </View>
                        </View>
                        <View className='sales'>
                            <View className='txt'>销量</View>
                            <View className='oper'>
                                <View className={`iconfont icno-up ${order_by === 'sold_quantity:asc' ? 'action' : ''}`} onClick={this.orderBy.bind(this, 'sold_quantity:asc')}>&#xe62a;</View>
                                <View className={`iconfont icno-down ${order_by === 'sold_quantity:desc' ? 'action' : ''}`} onClick={this.orderBy.bind(this, 'sold_quantity:desc')}>&#xe634;</View>
                            </View>
                        </View>
                    </View>
                    <View className='content'>
                        {
                            list.length == 0 && (
                                <View className='empty'>
                                    <View className='imgBlock'></View>
                                    <View className='txt'>未找到符合条件的宝贝</View>
                                </View>
                            )
                        }
                        {
                            list.length > 0 && list.map((item,index) => {
                                return (
                                    <checkbox className='baby-info' key={item.num_iid} onChange={this.changeChecked} id={item.num_iid} checked={item.checked} data-index={index}>
                                        <image src={item.pic_url} className='img'></image>
                                        <View className='name'>{item.title}</View>
                                        <View className='price'>¥{item.price}</View>
                                        <View className='inventory'>{item.num}</View>
                                        <View className='sales'>{item.sold_quantity}</View>
                                    </checkbox>
                                )
                            })
                        }
                    </View>
                </View>
                {
                    list.length > 0 && (
                        <View className='page-box'>
                            <View className='page'>
                                <MyPagination
                                    total={total_results}
                                    pageNo={current}
                                    pageSizeSelector='dropdown'
                                    pageSize={20}
                                    onPageNoChange={this.changePage}
                                />
                            </View>
                    <Button className='btu-sub'>确定（{cheackNum}/{total_results}）</Button>
                        </View>
                    )
                }   
            </View>
        );
    }
}

export default BabyContent;