import {CloudUploadOutlined,CloudDownloadOutlined,DownloadOutlined,SendOutlined} from '@ant-design/icons'
import './OperationBtns.css'
import { LayoutItem, useGridStore } from '../../../store/grid'

function upload(idMapRemote:Map<string,any>,layout:LayoutItem[]){
    console.log(idMapRemote,layout)
}


const OperationBtns = ()=>{
    const 
    idMapRemote = useGridStore((state:any)=>state.idMapRemote),
    layout = useGridStore((state:any)=>state.layout);
    return  <div className='operation-btn'>
                <CloudUploadOutlined className='upload btn' onClick={()=>upload(idMapRemote,layout)}/>
                <CloudDownloadOutlined className='download btn'/>
                <SendOutlined  className='public btn'/>
                <DownloadOutlined  className='file btn'/>
             </div>
}
export default OperationBtns