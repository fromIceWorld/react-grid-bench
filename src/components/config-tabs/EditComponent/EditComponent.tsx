import { Input,Button } from "antd";
import styles from './edit-component.module.css'
import Icon from "../../Icon";
import useConfigStore from "../../../store/config";
import { useState } from "react";
import {LayoutItem, useGridStore} from "../../../store/grid";
// const boxStyle = useConfigStore((state:any)=>state.boxStyle),
//       setBoxStyle = useConfigStore((state:any)=>state.setBoxStyle);
import { ConfigItemProps,EditComponentItem } from "../components/EditComponentItem/EditComponentItem";


const EditComponent = ()=>{
    const id = useConfigStore((state:any)=>state.id),
          componentConfig = useConfigStore((state:any)=>state.componentConfig);
    const   idMapRemote = useGridStore((state:any)=>state.idMapRemote),
            setMap = useGridStore((state:any)=>state.setMap),
            layout =useGridStore((state:any)=>state.layout),
            setLayout =useGridStore((state:any)=>state.setLayout);
    function edit(key:string,value:any){
        componentConfig.forEach((item:ConfigItemProps) => {
            const {label} = item
            if(key == label){
                item['value'] = value;
                return 
            }
        });
        // 更新box 缓存数据
        let remoteConfig = idMapRemote.get(id),
            {config} = remoteConfig;
        config['props'] =  [...componentConfig];
        setMap(id, {...remoteConfig})
        // 触发layout更新
        const newLayout = layout.map((item:LayoutItem)=>{
            if(item.i == id){
                item.id = Math.random()
            }
            return item
        })
        setLayout(newLayout)
        console.log('edit',key,value,remoteConfig)
    }
    return <>
        {componentConfig.map((item:ConfigItemProps)=><div key={id}>
            <EditComponentItem options={item.options} label={item.label} value={item.value} type={item.type} edit={edit}></EditComponentItem>
        </div>)}
    </>
}
export default EditComponent