import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../rootReducer';
import { enhancer } from 'addon-redux';
import Add from '../components/Add';

export default {
    title: 'Add',
    component: Add,
} as ComponentMeta<typeof Add>;

const store = createStore(
    rootReducer,
    {
        data: {
            items: [
                { id: 1, description: "Something", watchers_count: 10, language: ['JS'], open_issues: 12, privates: true },
                { id: 2, description: "Something", watchers_count: 10, language: ['JS'], open_issues: 12, privates: true }
            ]
        }
    },
    enhancer
);

const Template: ComponentStory<typeof Add> = (args) => {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <Add {...args} />
            </Provider>
        </BrowserRouter>
    );
};

export const DefaultAdd = Template.bind({});
DefaultAdd.args = {
    open: true,
    mode: 'add',
    form: {
        id: 0,
        name: '',
        description: '',
        watchers: 0,
        language: '',
        openIssues: 0,
        private: '',
    },
};