import React, { Component } from 'react';
import { Table, Tag, Space, Icon, Popconfirm } from 'antd';
import moment from 'moment';

export default class FormTable extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { checkChange, onDelete, editClick, dataSource, loading } = this.props;
        const rowSelection = {
                onChange: checkChange,
                getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
            }),
        };
        const columns = [
            {
            title: 'ID',
            width: 100,
            dataIndex: 'id',
            fixed:'left',
            },
            {
            title: 'Make',
            width: 100,
            dataIndex: 'make',
            fixed:'left',
            },
            {
            title: 'Model',
            width: 100,
            dataIndex: 'model',
            fixed:'left',
            },
            {
            title: 'Extra Info',
            dataIndex: 'extra info',
            width: 150,
            },
            {
            title: 'Location',
            dataIndex: 'location',
            width: 100,
            },
            {
            title: 'Year',
            dataIndex: 'year',
            width: 80,
            },
            {
            title: 'Kilometers Driven',
            dataIndex: 'kilometers driven',
            width: 110,
            },
            {
            title: 'Fuel Type',
            dataIndex: 'fuel type',
            width: 100,
            },
            {
            title: 'Transmission',
            dataIndex: 'transmission',
            width: 130,
            },
            {
            title: 'Owner Type',
            dataIndex: 'owner type',
            width: 100,
            },
            {
            title: 'Mileage',
            dataIndex: 'mileage',
            width: 100,
            },
            {
            title: 'Engine',
            dataIndex: 'engine',
            width: 100,
            },
            {
            title: 'Power',
            dataIndex: 'power',
            width: 100,
            },
            {
            title: 'Seats',
            dataIndex: 'seats',
            width: 100,
            },
            {
            title: 'Cost Price',
            dataIndex: 'cost price',
            width: 100,
            },
            {
            title: 'Market Price',
            dataIndex: 'market price',
            width: 100,
            },
            {
            title: 'Purchaser',
            dataIndex: 'purchaser',
            width: 100,
            },
            {
            title: 'Car In Date',
            dataIndex: 'car in date',
            width: 150,
            },
            {
            title: 'Action',
            dataIndex: 'opera',
            fixed:'right',
            width: 150,
            render: (text, record) =>(
                <space size={"middle"}>
                <a onClick={() => editClick(record.key)}>Edit</a>
                    <a style={{marginLeft:30}} onClick={() => editClick(record.key)}>Out</a>
                </space>)
        }];

        return(
            <Table
                columns={columns}
                dataSource={dataSource}
                bordered={true}
                scroll={{x:'123%'}}
                className='formTable'
                loading={loading}
            />
        )

    }
}
