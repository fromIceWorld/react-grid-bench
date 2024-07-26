import GridLayout, { Layout } from "react-grid-layout";
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'
import React,{ useEffect, useRef , useState} from "react";
import { createPortal } from "react-dom";
import RemoteComponent from './remoteComponent'
import {useGridStore,LayoutItem} from '../store/grid'
import ContextMenu from "./contextmenu/context-menu";
import BoxContextMenu from "./contextmenu/box-context-menu/box-context-menu";
import useConfigStore from "../store/config";
import { getBoxInitStyle } from "../utils/getBoxStyle";
import { config2HumpObj } from "../utils/TransformConfig";
const containerStyle:React.CSSProperties = {
    height:'100%',
    margin:'6px',
    backgroundColor:"#fff",
    minHeight:'100%'
}
const style:React.CSSProperties = {
    backgroundColor:"#fff",
    minHeight:'100%'
}
function getBoxStyleByID(idMapRemote:Map<string,any>,id:string):React.CSSProperties{
    const {config} = idMapRemote.get(id) || {},
        {style} = config || {};
    // react style 只接受驼峰key 
    return config2HumpObj(style || [])
}

const onDragOver = (e:any)=>{
    e.preventDefault()
}



const Grid = ()=>{
    const idMapRemote = useGridStore((state:any)=>state.idMapRemote),
         setMap = useGridStore((state:any)=>state.setMap),
         layout =useGridStore((state:any)=>state.layout),
         setLayout =useGridStore((state:any)=>state.setLayout);
    const componentConfig = useConfigStore((state:any)=>state.componentConfig),
          setComponentConfig =  useConfigStore((state:any)=>state.setComponentConfig),
          boxStyle = useConfigStore((state:any)=>state.boxStyle),
          setBoxStyle =  useConfigStore((state:any)=>state.setBoxStyle),
          setBoxId =  useConfigStore((state:any)=>state.setBoxId);
    const [visibal, setVisibal] = useState(false);
    const [position,setPosition] = useState({x:0,y:0})

    let [curentBox,setcurentBox] = useState(null);
    // 右键菜单
    const onContextMenu = (e:any,item:any,idMapRemote:any)=>{
        const {clientX,clientY } = e;
        setPosition({x:clientX,y:clientY})
        setVisibal(true);
        setcurentBox(item)
        e.preventDefault()
    }     

    const [width,setWidth] = useState(0);
    const container = useRef(null)
    const onDrop = (e:any,id:string)=>{
        // 获取组件 配置
        const module = JSON.parse(e.dataTransfer.getData('module'));
        // 为 box 赋予初始样式
        const boxInitStyle = getBoxInitStyle();
        module.config.style = boxInitStyle;
        // 缓存 box 和 component 配置项
        setMap(id,module);
        const newLayout = layout.map((item:LayoutItem)=>{
            if(item.i == id){
                item.id = Math.random();
            }
            return item
        })
        // 触发更新
        setLayout(newLayout)
    }
    // 点击菜单 
    function onBtnClick(type:string){
        const {config} = idMapRemote.get((curentBox as any).i);
        setBoxId((curentBox as any).i)
        console.log(config)
        const {props,style} = config;
        // 设置当前box 的配置
        setComponentConfig(props)
        setBoxStyle(style)
        console.log(type,curentBox,idMapRemote.get((curentBox as any).i))
    }
    useEffect(()=>{
        const resizeobserve = new ResizeObserver(()=>{
            const {clientWidth, clientHeight} = document.body
            setWidth(clientWidth)
        })
        resizeobserve.observe(container.current!)
        return ()=>resizeobserve.disconnect()
    })
   
    function onBoxLayoutChange(afterChnagelayout:Layout[]){
        let newMap = new Map();
        afterChnagelayout.forEach(item=>{
            newMap.set(item.i,item)
        })
        let newLayout = layout.map((item:LayoutItem)=>{
            const {x,y,w,h} = newMap.get(item.i);
            return {
                ...item,x,y,w,h,
            }
        })
        setLayout(newLayout)
    }
    return <div ref={container} style={containerStyle}>
                <GridLayout  
                    margin={[1,1]} 
                    style={style} 
                    layout={layout} 
                    cols={1000} 
                    rowHeight={5} 
                    width={width} 
                    compactType={null} 
                    allowOverlap={true}
                    onResizeStop ={onBoxLayoutChange}
                    onDragStop ={onBoxLayoutChange}
                >
                        {
                        layout.map((item:LayoutItem)=>
                            <div 
                                 style={getBoxStyleByID(idMapRemote,item.i)} 
                                 onContextMenu={(e)=>onContextMenu(e,item,idMapRemote)} 
                                 onDragOver={onDragOver} 
                                 onDrop={(e)=>onDrop(e,item.i)} key={item.i}>
                                    <RemoteComponent 
                                        id={item.i}
                                        UUID ={item.id}
                                    ></RemoteComponent>
                            </div>)
                        }
                </GridLayout>
                {
                    createPortal(
                        ContextMenu({
                            visibal,
                            close:()=>{console.log('false');setVisibal(false)},
                            children:BoxContextMenu(position,onBtnClick)
                        }),
                        document.body)}
           </div>
}
export default Grid