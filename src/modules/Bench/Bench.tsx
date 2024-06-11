import { Flex, Layout } from 'antd';
import {AppstoreAddOutlined,ApiOutlined} from '@ant-design/icons'
import styles from './Bench.module.css'

const { Sider, Content } = Layout;



const BtnsConfig = [
    {component:AppstoreAddOutlined,name:'页面',key:'AppstoreAddOutlined'},
    {component:ApiOutlined,name:'接口',key:'ApiOutlined'},
]

const btns = ()=>{
    return BtnsConfig.map(item=><div className={styles.btn} key={item.key}>
                                    <item.component className={styles.svg} ></item.component>
                                    <span>{item.name}</span>
                                </div>)
}

const Bench = ()=>{
    return <Layout className={styles.bench}>
                <Sider width="50px" className={styles.slider}>
                       <div className={styles['page-change-btns']}>
                            {btns()}
                       </div>
                </Sider>
                <Content>BENCH</Content>
            </Layout>
}
export default Bench