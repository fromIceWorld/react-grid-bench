import { create } from 'zustand';

enum View {
    layout,
    logic,
}
interface PageState {
    view: View;
}

const usePageStore = create((set) => ({
    view: View.layout,
    changeView: () =>
        set((state: PageState) => ({
            view: state.view == View.layout ? View.logic : View.layout,
        })),
}));

export { View, usePageStore };
