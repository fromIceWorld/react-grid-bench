function getBoxInitStyle() {
    return [
        {
            label: 'text-align',
            type: 'select',
            options: [
                { label: 'left', value: 'left' },
                { label: 'right', value: 'right' },
                { label: 'center', value: 'center' },
            ],
            value: 'left',
        },
        {
            label: 'align-items',
            type: 'select',
            options: [
                { label: 'normal', value: 'normal' },
                { label: 'start', value: 'start' },
                { label: 'end', value: 'end' },
                { label: 'center', value: 'center' },
            ],
            value: 'normal',
        },
        {
            label: 'border-top',
            type: 'string',
            value: '1px solid #00000017',
        },
        {
            label: 'border-right',
            type: 'string',
            value: '1px solid #00000017',
        },
        {
            label: 'border-bottom',
            type: 'string',
            value: '1px solid #00000017',
        },
        {
            label: 'border-left',
            type: 'string',
            value: '1px solid #00000017',
        },
        {
            label: 'border-radius',
            type: 'string',
            value: '0px',
        },
        {
            label: 'padding',
            type: 'string',
            value: '0px',
        },
        {
            label: 'background-color',
            type: 'color',
            value: '#fff0',
        },
        {
            label: 'background-image',
            type: 'image',
            value: '',
        },
        {
            label: 'background-repeat',
            type: 'string',
            value: 'no-repeat',
        },
        {
            label: 'background-size',
            type: 'string',
            value: 'cover',
        },
        {
            label: 'z-index',
            type: 'number',
            value: 1,
        },
    ];
}
export { getBoxInitStyle };
