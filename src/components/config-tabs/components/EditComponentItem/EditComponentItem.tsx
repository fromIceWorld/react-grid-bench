import { Input,InputNumber,Select,  } from "antd";
import { useEffect, memo, useState } from "react";
import styles from './edit-component-item.module.css'
import {CheckCircleTwoTone} from '@ant-design/icons'
interface Option {
    label:string;
    value:string
}

interface ConfigItemProps{
    label:string,
    type:string,
    options?:Option[],
    value:any,
    edit?:(key:string,value:any)=>void,
    onChange?:(value:any)=>void,
}


const EditComponentItem = memo((props:ConfigItemProps)=>{
    let [value,setValue] = useState(props.value);
    let Component;
    switch(props.type){
        case 'string':
            Component = <Input size="small" value={value} onChange= {onValueChange}/>;
            break;
        case 'number':
            Component = <InputNumber className={styles['number-input']} size="small" value={value} onChange= {onValueChange}/>;
            break;
        case 'select':
            Component = <Select options ={props.options}  value={value} onChange= {onValueChange}/>;
            break;
        case 'object':
            Component = <Input size="small" value={JSON.stringify(value)} onChange= {onValueChange}/>;
            break;
        default :
            Component = <>未匹配的类型: {props.type}</>    
    }
    useEffect(()=>{
        setValue(props.value)
    },[props.value])
    function onValueChange(e:any){
        let value;
        switch(props.type){
            case 'string':
                setValue(e.target.value);
                value = e.target.value
                break;
            case 'number':
            case 'select':
                setValue(e);
                value = e
                break;
            case 'object':
                setValue(JSON.parse(e.target.value));    
                value = e.target.value
                break;
        }
        if(props.onChange){
            props.onChange(value)
        }
    }
    return <>
       <div className={styles['config-item']}>
            <span className={styles['config-item-label']}>{props.label}</span>
            <span className={styles['config-item-value']}>{Component}</span>
            {props.edit ? <CheckCircleTwoTone className={styles['save-button']}  twoToneColor="#52c41a" onClick={()=>{props.edit!(props.label,value)}}/> : ''}
       </div>
      
    </>
})
export type {ConfigItemProps}
export {EditComponentItem}