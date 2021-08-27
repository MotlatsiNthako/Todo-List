import React from 'react';
import { render, screen } from '@testing-Library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { exportAllDeclaration } from '@babel/types';
import Item from 'antd/lib/list/Item';
impport mockData from './mockData'


beforeEach(() => {
    fetchMock.resetMocks();
})

describe('App components tests', () =>{
    it("should render <App/> component", async () =>{

        fetchMock.once(JSON.stringify(mockData));
        render(<App/>);
        await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

    });
})

Item('Should add a todoItem', async() => {

    fetchMock.once(
     JSON.stringify({
         userId: 3,
         id: Math.floor(Math.random() * 100) +1,
         title:'To watch Nijel Amos',
         completed: false
     })
    );