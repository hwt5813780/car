import React, { Component } from 'react';
import { Table, Tag, Space, Icon, Popconfirm } from 'antd';
import moment from 'moment';

export default class OutTable extends Component{
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
            },
            {
                title: 'Make',
                width: 100,
                dataIndex: 'make',
            },
            {
                title: 'Model',
                width: 100,
                dataIndex: 'model',
            },
            {
                title: 'Staff',
                dataIndex: 'staff',
                width: 100,
            },
            {
                title: 'Market Price',
                dataIndex: 'market price',
                width: 100,
            },
            {
                title: 'Cost Price',
                dataIndex: 'cost price',
                width: 110,
            },
            {
                title: 'Selling Price',
                dataIndex: 'selling price',
                width: 110,
            },
            {
                title: 'Profit',
                dataIndex: 'profit',
                width: 110,
            },
            {
                title: 'Extra Info',
                dataIndex: 'extra info',
                width: 200,
            },
            {
                title: 'Date',
                dataIndex: 'date',
                width: 100,
            },
            {
                title: 'Action',
                dataIndex: 'opera',
                width: 80,
                render: (text, record) =>(
                    <space size={"middle"}>
                        <a><Popconfirm
                            title="Notice:The car will be sent back to stock"
                            okText="Yes" cancelText="No"
                            onConfirm={() => onDelete(record.key)}>Delete</Popconfirm></a>
                    </space>)
            }];

        return(
            <Table
                columns={columns}
                dataSource={dataSource}
                bordered={true}
                className='formTable'
                loading={loading}
            />
        )

    }
}
