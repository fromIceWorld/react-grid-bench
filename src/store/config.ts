import { create } from 'zustand';

const useConfigStore = create((set) => ({
    id: '0',
    boxStyle: [],
    gridStyle: [],
    componentConfig: [],
    setBoxId: (newID: any) => {
        set((state: any) => {
            return {
                id: newID,
            };
        });
    },
    setBoxStyle: (newBoxStyle: any) => {
        set((state: any) => {
            return {
                boxStyle: newBoxStyle,
            };
        });
    },
    setGridStyle: (newGridStyle: any) => {
        set((state: any) => {
            return {
                gridStyle: newGridStyle,
            };
        });
    },
    setComponentConfig: (newcCmponentConfig: any) => {
        set((state: any) => {
            return {
                componentConfig: newcCmponentConfig,
            };
        });
    },
}));

export default useConfigStore;
