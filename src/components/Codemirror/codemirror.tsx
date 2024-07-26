import { useEffect, useRef } from "react"
import {EditorState,Compartment,type Extension,StateEffect} from "@codemirror/state"
import {EditorView, keymap} from "@codemirror/view"
import {basicSetup} from "codemirror"
import { javascript,esLint } from '@codemirror/lang-javascript'
import {css} from '@codemirror/lang-css'

interface CodemirrorProp {
  type:string
}

const createEditorCompartment = () => {
  const compartment = new Compartment()
  const run = (extension: Extension,view: EditorView) => {
      if(compartment.get(view.state)){
          //动态地重新配置插件
          view.dispatch({ effects: compartment.reconfigure(extension) }) // reconfigure
      }else{
          //向编辑器注入某一个插件
          view.dispatch({ effects: StateEffect.appendConfig.of(compartment.of(extension)) })// inject
      }
  }
  return { compartment, run }
}
let {compartment, run} = createEditorCompartment()

const Codemirror = (prop:CodemirrorProp)=>{
    let codeContainer = useRef(null)
    useEffect(()=>{
        let startState = EditorState.create({
            doc: "",
            extensions: [basicSetup]
          })
          let view = new EditorView({
            state: startState,
            parent: codeContainer.current!
          })
          // 动态导入语法高亮
          switch (prop.type){
            case 'css':
              run(css(),view);
              break;
            case 'javascript':
              run(javascript(),view);  
              break;
            default :
              console.log('不支持的语法')  
          }
          
       return ()=>view.destroy()
          
    },[])
    return <>
        <div ref={codeContainer}>

        </div>
    </>
}
export default Codemirror