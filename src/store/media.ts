import { create } from 'zustand';

enum MediaType {
    auto,
    computer,
    mobile,
}

const useMediaStore = create((set) => ({
    type: MediaType.auto,
    config: {
        disable: true,
        value: 100,
        postfix: '%',
    },
    setType: (value: number) =>
        set(() => ({
            type: value,
        })),
    setConfig: (value: number) =>
        set(() => ({
            config: value,
        })),
}));
export { MediaType, useMediaStore };
