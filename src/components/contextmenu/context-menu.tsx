import styles from './context-menu.module.css'
const ContextMenu = (props:any)=>{
    const close = ()=>{
        props.close()
    }
    return props.visibal ?  <>
        <div className={styles['menu-shadow']} onClick={close}>
            {props.children}
        </div>
    </> : <></>
}

export default ContextMenu