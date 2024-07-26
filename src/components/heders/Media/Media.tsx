import {WindowsOutlined,DesktopOutlined,MobileOutlined} from '@ant-design/icons'
import styles from './Media.module.css'
import {InputNumber} from 'antd'
import { useMediaStore,MediaType } from '../../../store/media' 

const mediaList = [
    {
        type: MediaType.auto,
        disable: true,
        value:100,
        postfix: '%',
        icon:WindowsOutlined,
        key:'WindowsOutlined',
    },
    {
        type: MediaType.computer,
        disable: false,
        value:1920,
        postfix: 'px',
        icon:MobileOutlined,
        key:'MobileOutlined',
    },
    {
        type: MediaType.mobile,
        disable: false,
        value:375,
        postfix: 'px',
        icon:DesktopOutlined,
        key:'DesktopOutlined',
    },
];


const Media = ()=>{
    const type = useMediaStore((state:any)=>state.type),
        setType = useMediaStore((state:any)=>state.setType);

    const config =   useMediaStore((state:any)=>state.config),
        setConfig = useMediaStore((state:any)=>state.setConfig);  
    

    const changeMedia = (index:MediaType)=>{
        if(type == index){
            return 
        }
        Object.assign(mediaList[type],config)
        setType(index);
        const {disable,value,postfix} = mediaList[index]
        setConfig({
            disable,value,postfix
        });
        
    }
    const setValue = (value:number|null)=>{
        setConfig({...config,value})
    }
    return <div className={styles.media}>
            {
                mediaList.map((item,index)=>
                    <div key={item.key} 
                        onClick={()=>changeMedia(index as unknown as MediaType)} 
                        className={`${styles.btn} ${type ==index ? styles.active : styles.deactive}`}>
                        <item.icon />
                    </div>)
            }
            <InputNumber
                size="small"
                addonAfter={config.postfix}
                value={config.value}
                disabled ={config.disable}
                onChange={setValue}
                className={styles.input}
            />
    </div>
}
export default Media