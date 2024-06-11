import {CloudUploadOutlined,CloudDownloadOutlined,DownloadOutlined,SendOutlined} from '@ant-design/icons'
import './OperationBtns.css'

const OperationBtns = ()=>{
    return <div className='operation-btn'>
    <CloudUploadOutlined className='upload btn'/>
    <CloudDownloadOutlined className='download btn'/>
    <SendOutlined  className='public btn'/>
    <DownloadOutlined  className='file btn'/>
    </div>
}
export default OperationBtns