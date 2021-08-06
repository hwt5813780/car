import React, {Component} from 'react';
import {Link, Redirect, Route, Switch} from 'react-router-dom';
import {Layout,Menu} from 'antd';
import '../../style/index.less';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined, HomeOutlined, FileTextOutlined, PlusSquareOutlined, LogoutOutlined,
} from '@ant-design/icons';

import SiderCustom from './SiderCustom';
import HeaderCustom from './HeaderCustom';
import MIndex from '../index/Index';
import Calendars from '../header/Calendars';
import UForm from '../form/Form';
import InList from '../stockin/InList';
import noMatch from './404';
import Outlist from "../stockout/OutList";
import Staff from "../staff/Staff";

const { Header, Content, Footer, Sider } = Layout;

export default class App extends Component {
    state = {
        collapsed: localStorage.getItem("mspa_SiderCollapsed") === "true",
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        }, function () {
            localStorage.setItem("mspa_SiderCollapsed", this.state.collapsed);
        });
    };

    componentDidMount() {
        //保存Sider收缩
        if (localStorage.getItem("mspa_SiderCollapsed") === null) {
            localStorage.setItem("mspa_SiderCollapsed", false);
        }
    }

    render() {
        const {collapsed} = this.state;
        const {location} = this.props;
        let name;
        if (localStorage.getItem("mspa_user") === null) {
            return <Redirect to="/login"/>
        } else {
            name = location.state === undefined ? JSON.parse(localStorage.getItem("mspa_user")).username : location.state.username;
        }

        return (
            <Layout>
                <Sider style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}>
                    <div className="logo" style={collapsed?{backgroundSize:'0%'}:{backgroundSize:'70%'}}/>
                    <Menu
                        theme={"dark"}
                        mode="inline"
                    >

                        <Menu.Item key={"/app"}>
                            <Link to={"/app"}><HomeOutlined /><span>Home</span></Link>
                        </Menu.Item>
                        <Menu.Item key={"/app/form"}>
                            <Link to={"/app/form"}><FileTextOutlined /><span>Car List</span></Link>
                        </Menu.Item>
                        <Menu.Item key={"/app/inlist"}>
                            <Link to={"/app/inlist"}><PlusSquareOutlined /><span>Car In</span></Link>
                        </Menu.Item>
                        <Menu.Item key={"/app/outlist"}>
                            <Link to={"/app/outlist"}><LogoutOutlined /><span>Car Out</span></Link>
                        </Menu.Item>
                        <Menu.Item key={"/app/staff"}>
                            <Link to={"/app/staff"}><TeamOutlined /><span>Staff</span></Link>
                        </Menu.Item>
                        <Switch
                            checked={this.state.theme === 'dark'}
                            onChange={this.changeTheme}
                            checkedChildren="Dark"
                            unCheckedChildren="Light"
                        />
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    <HeaderCustom collapsed={collapsed} toggle={this.toggle} username={name}/>
                    <Content style={{margin: '0 16px'}}>
                        <Switch>
                            <Route exact path={'/app'} component={MIndex} />
                            <Route exact path={'/app/form'} component={UForm} />
                            <Route exact path={'/app/inlist'} component={InList} />
                            <Route exact path={'/app/outlist'} component={Outlist} />
                            <Route exact path={'/app/staff'} component={Staff} />
                            <Route exact path={'/app/header/Calendars'} component={Calendars} />
                            <Route component={noMatch} />
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        UsedCar ©2020-2021 Created by Weiting Huang
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
