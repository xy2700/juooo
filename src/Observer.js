

const EventList={};

const on=function(eventName,callback){
        if(!EventList[eventName]){
                EventList[eventName]=[];
        }
        EventList[eventName].push(callback)
}

const emit=function(eventName,params){
    
        if(!EventList[eventName])return;

        EventList[eventName].map((cb)=>{
                cb(params)
        })
}

const off=function(eventName){
        if(!EventList[eventName])return;
        EventList[eventName]=[];
}
export default {
        $on:on,
        $emit:emit,
        $off:off
}
