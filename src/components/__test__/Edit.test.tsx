import React from 'react'
import configureStore from 'redux-mock-store'
import { mount, render  } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Edit from '../Edit'

describe('Edit test', () => {
  it('Check Button status ', () => {
    const mockStore = configureStore();
    const store = mockStore({
      data: {
        items: []
      }
    });

    const wrapper = mount(
        <Provider store={store}>
          <BrowserRouter>
            <Edit />
          </BrowserRouter>
        </Provider>
      )
    })
    
    })