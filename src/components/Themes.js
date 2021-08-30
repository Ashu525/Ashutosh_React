import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    Form, FormGroup, FormControl, ControlLabel, SelectPicker, HelpBlock, ButtonToolbar, Button, FlexboxGrid, Panel, Divider
} from 'rsuite';

import './widget.css'

import { setUi, setUserName, setData } from '../actions/index'

const UIComponent = () => {
    const dispatch = useDispatch()
    const userName = useSelector(state => state.apiReducers.userName)
    const apiResponse = useSelector(state => state.apiReducers.data)
    const isDataLoaded = useSelector(state => state.apiReducers.dataLoaded)
    const uiVersion = useSelector(state => state.uiReducers)
    const [mode, setMode] = useState('readonly');
    const disabled = mode === 'disabled';
    const readOnly = mode !== 'readonly';
    const plaintext = mode === 'plaintext';
    const pickerData = [
        {
            label: "V1",
            value: "v1"
        }, {
            label: "V2",
            value: "v2"
        }
    ]

    const getData = () => {
        fetch(`https://api.agify.io/?name=${userName}`)
            .then(response => response.json())
            .then(response => dispatch(setData(response)))
    }

    const getUiVersion = () => {
        if (uiVersion === "v1")
            return "v1"
        else if (uiVersion === "v2")
            return "v2"
        else
            return ""
    }

    return (
        <div>
            <Form>
                <FormGroup>
                    <FormControl
                        name="selectPicker"
                        accepter={SelectPicker}
                        data={pickerData}
                        disabled={disabled}
                        readOnly={readOnly}
                        plaintext={plaintext}
                        style={{ width: "15rem" }}
                        defaultValue={'V1'}
                        onChange={formValue => dispatch(setUi(formValue))}
                    />
                </FormGroup>
            </Form>
            <div>
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item colspan={12}>
                        <Panel header={<h3>Age Calculator</h3>} bordered>
                            <Form fluid>
                                <FormGroup>
                                    <ControlLabel>Username</ControlLabel>
                                    <FormControl name="name" onChange={formValue => dispatch(setUserName(formValue))} />
                                    {!userName && <HelpBlock>User name is required</HelpBlock>}
                                </FormGroup>
                                <FormGroup>
                                    <h4>https://api.agify.io/?name={userName}</h4>
                                </FormGroup>
                                <FormGroup>
                                    <ButtonToolbar>
                                        <Button appearance="primary" onClick={() => {
                                            !userName ? alert("Please provide user name!") : getData()
                                        }
                                        }>Get Results</Button>
                                    </ButtonToolbar>
                                </FormGroup>
                            </Form>
                        </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </div>
            {
                isDataLoaded &&
                <div>
                    <Divider>Result</Divider>
                    <Panel bordered className={getUiVersion()}>
                        <div className="show-grid">
                            <FlexboxGrid justify="space-around">
                                <FlexboxGrid.Item colspan={4}>Name: {apiResponse.name}</FlexboxGrid.Item>
                                <FlexboxGrid.Item colspan={4}>Age: {apiResponse.age}</FlexboxGrid.Item>
                                <FlexboxGrid.Item colspan={4}>Count: {apiResponse.count}</FlexboxGrid.Item>
                            </FlexboxGrid>
                        </div>
                    </Panel>
                </div>
            }
        </div>
    )
}

export default UIComponent
