import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../rootReducer';
import { enhancer } from 'addon-redux';
import Edit from '../components/Edit';

export default {
    title: 'Edit',
    component: Edit,
} as ComponentMeta<typeof Edit>;

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

const Template: ComponentStory<typeof Edit> = (args) => {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <Edit {...args} />
            </Provider>
        </BrowserRouter>
    );
};

export const DefaultEdit = Template.bind({});
DefaultEdit.args = {
    open: true,
    mode: 'edit',
    form: {
        id: 3,
        name: '',
        description: '',
        watchers: 0,
        language: '',
        openIssues: 0,
        private: '',
    },
};