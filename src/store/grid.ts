import { create } from 'zustand';

// 配置 id 作为 layout 更新时的key，在修改组件时，修改id，更新对应的box
interface LayoutItem {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    id: number;
}

const useGridStore = create((set) => ({
    idMapRemote: new Map(),
    setMap: (id: string, remote: any) => {
        set((state: any) => {
            let newMap = new Map(state.idMapRemote.entries());
            newMap.set(id, remote);
            return {
                idMapRemote: newMap,
            };
        });
    },
    layout: [
        { i: 'a', x: 50, y: 0, w: 60, h: 12, id: 0 },
        { i: 'b', x: 100, y: 0, w: 60, h: 12, id: 1 },
        { i: 'c', x: 140, y: 0, w: 60, h: 12, id: 2 },
    ],
    setLayout: (newLayout: LayoutItem[]) => {
        set((state: any) => {
            return {
                layout: newLayout,
            };
        });
    },
}));
export { useGridStore };
export type { LayoutItem };
