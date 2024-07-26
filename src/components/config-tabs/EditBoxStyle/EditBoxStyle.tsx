import useConfigStore from "../../../store/config"
import { LayoutItem, useGridStore } from "../../../store/grid";
import { ConfigItemProps } from "../components/EditComponentItem/EditComponentItem";
import  Codemirror from '../../Codemirror/codemirror'


const EditBoxStyle = ()=>{
    const id = useConfigStore((state:any)=>state.id),
          boxStyle = useConfigStore((state:any)=>state.boxStyle);
    const idMapRemote = useGridStore((state:any)=>state.idMapRemote),
    setMap = useGridStore((state:any)=>state.setMap),
    layout =useGridStore((state:any)=>state.layout),
    setLayout =useGridStore((state:any)=>state.setLayout);      
    function edit(key:string,value:any){
        boxStyle.forEach((item:ConfigItemProps) => {
                const {label} = item
                if(key == label){
                    item['value'] = value;
                    return 
                }
            });
            // 更新box style 缓存数据
            let remoteConfig = idMapRemote.get(id),
                {config} = remoteConfig;
            config['style'] =  [...boxStyle];
            setMap(id, {...remoteConfig})
            // 触发layout更新
            const newLayout = layout.map((item:LayoutItem)=>{
                if(item.i == id){
                    item.id = Math.random()
                }
                return item
            })
            setLayout(newLayout)
            console.log('edit',key,value,remoteConfig)
        }   
    return <>
          <Codemirror type="css"></Codemirror>
      </>
}

export default EditBoxStyle