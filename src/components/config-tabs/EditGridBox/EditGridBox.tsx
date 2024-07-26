import useConfigStore from "../../../store/config";
import { LayoutItem, useGridStore } from "../../../store/grid";
import { EditComponentItem } from "../components/EditComponentItem/EditComponentItem";

const EditGridBox = ()=>{
    const id =  useConfigStore((state:any)=>state.id);
    const layout = useGridStore((state:any)=>state.layout),
         setLayout = useGridStore((state:any)=>state.setLayout);
    const layoutItem = layout.filter((item:LayoutItem)=>item.i == id)[0];
    const keys = Object.keys(layoutItem).filter(key=> !['i','id'].includes(key));

    function onChange(value:number,key:string){
        let newLayoutItem = {
            ...layoutItem,
            [key]:value
        }
        let newLayout = layout.map((item:LayoutItem)=>(item.i == id ? newLayoutItem : item));
        setLayout(newLayout)
    }   

    return <>
     {
        keys.map((key:string)=><EditComponentItem key={key} label={key} type='number' value={layoutItem[key]} onChange={(value)=>onChange(value,key)} />)
     }
     
    </>
}

export default EditGridBox