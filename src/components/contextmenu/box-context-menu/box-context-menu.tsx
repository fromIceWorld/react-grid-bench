import styles from './box-context-menu.module.css'
import Icon from '../../Icon'

const Btns = [
    {
        id:'config',
        label:'配置',
        icon:'icon-javascript'
    },
    {
        id:'copy',
        label:'复制',
        icon:'icon-javascript'
    },
    {
        id:'trace',
        label:'追踪',
        icon:'icon-javascript'
    },
    {
        id:'delete',
        label:'删除',
        icon:'icon-javascript'
    },
]

const BoxContextMenu = (position:any,fn:(s:string)=>void)=>{
    const onClick = (label:string)=>{
        fn(label)
    }
    return <div className={styles['menus']} style={{left:position.x,top:position.y}}>
           {Btns.map((item,index)=><div key={item.id} onClick={()=>onClick(item.label)} className={styles['menus-item']}><Icon type={item.icon}></Icon> <span>{item.label}</span></div>)}
        </div>
}
export default BoxContextMenu