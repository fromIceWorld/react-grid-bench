import { DingtalkCircleFilled } from "@ant-design/icons";
import React,{ useEffect, useState } from "react"
import LoadableComponent from '@loadable/component';
import {config2Obj} from '../utils/TransformConfig'
import {useGridStore} from "../store/grid";
interface Config{
    [key:string]:any
}
interface RemoteModule {
    remoteEntry:string,
    remoteName:string,
    exposedModule:string,
}
interface Props {
    id:string,
    UUID:number,
}

function getRemoteConfig(map:Map<string,any>,id:string,key:string){
    return map.has(id) ? map.get(id)[key] : ''
}

const notView = ()=>{
    return <>404</>
}




const RemoteComponent = (props:Props)=>{
    const [Component,updateComponent] = useState('div');
    const idMapRemote = useGridStore((state:any)=>state.idMapRemote);
    
    function loadComponent (url:string,key:string,config:any){
        return new Promise((resolve,reject)=>{
            let script = document.createElement('script');
            script.src = url;
            script.onload = ()=>{
                // @ts-ignore
                react_app.get(`${key}`).then(res=>{
                    let module = res();
                    // 转化 config 配置项
                    const {props} =config
                    let configObj = config2Obj(props);
                    console.log(configObj);
                    // 传递props
                    resolve({
                        default:()=>module.default(configObj)
                    })
                })
                console.log('load',)
                
            }
            document.body.append(script)
        })
    }
    useEffect(()=>{
        const  remoteEntry = getRemoteConfig(idMapRemote,props.id,'remoteEntry' ),
        remoteName = getRemoteConfig(idMapRemote,props.id,'remoteName' ),
        exposedModule = getRemoteConfig(idMapRemote,props.id,'exposedModule' ),
        config = getRemoteConfig(idMapRemote,props.id,'config');
        if(remoteEntry){
            console.log(remoteEntry)
            // @ts-ignore
            updateComponent(React.lazy(()=>loadComponent('store/dist/remoteEntry.js',`./${exposedModule}`,config)))
        }
        },[props.UUID])
    return <>
        {props.id}
                <React.Suspense fallback="Loading Dialog...">
                    <Component ></Component>
                </React.Suspense>
            </>  
             
}
export default RemoteComponent