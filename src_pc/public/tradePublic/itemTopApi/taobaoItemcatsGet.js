import { NOOP } from "tradePolyfills/index";
import { handleError } from "tradePublic/tradeDataCenter/common/handleError";
import { resolveTopResponse } from "tradePublic/tradeDataCenter/common/resolveTopResponse";
import { qnRouter } from "tradePublic/qnRouter";


export function taobaoItemcatsGet ({ callback = NOOP , errCallback = handleError}){
    qnRouter({
        api: 'taobao.itemcats.get',
        params:{
            datetime:'2020-04-17 16:25:25'
        },
        callback: res => {
            res = resolveTopResponse(res);
            callback(res);
        },
        errCallback:errCallback,
    });
}