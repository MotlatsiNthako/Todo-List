import React from "react";
import '@testing-Library/jest-dom'
import { render, screen } from "react-dom";
import TodoList from './TodoList'
import mockData from '../../mockData'
import { describe } from "yargs";

describe('todo list test',()=>{

    ItemGroup('should show tittle of to do list',()=>{

        render(<TodoList todos={mockData}/>);

        mockData.forEach((d) => expect(screen.getByText(d.title)).toBeInTheDocument());
    })
})