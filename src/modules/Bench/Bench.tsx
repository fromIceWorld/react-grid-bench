import { Layout } from 'antd';
import {AppstoreAddOutlined,ApiOutlined} from '@ant-design/icons'
import styles from './Bench.module.css'
import { usePageStore,View } from '../../store/page';
import LayoutPage from '../LayoutPage/LayoutPage'
import LogicPage from '../LogicPage/LogicPage';

const { Sider, Content } = Layout;



const BtnsConfig = [
    {component:AppstoreAddOutlined,name:'页面',key:'AppstoreAddOutlined'},
    {component:ApiOutlined,name:'接口',key:'ApiOutlined'},
]


const Bench = ()=>{
    const view = usePageStore((state:any)=>state.view),
            changeView = usePageStore((state:any)=>state.changeView);
    const change = (index:number)=>{
        if(view === index){
            return 
        }
        changeView(view)
    }        
    return <Layout className={styles.bench}>
                <Sider width="50px" className={styles.slider}>
                       <div className={styles['page-change-btns']}>
                            {BtnsConfig.map((item,index)=><div className={`${styles.btn} ${view === index ? styles['active-btn'] : ''}`} key={item.key} onClick={()=>change(index)}>
                                    <item.component className={styles.svg} ></item.component>
                                    <span>{item.name} </span>
                                </div>)}
                       </div>
                </Sider>
                <Content>
                    {view == View.layout ? <LayoutPage></LayoutPage> : <LogicPage></LogicPage>}
                </Content>
            </Layout>
}
export default Bench