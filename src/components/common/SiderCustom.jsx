import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class SiderCustom extends Component{
    constructor(props){
        super(props);
        const { collapsed }= props;
        this.state = {
            collapsed: collapsed,
            firstHide: true, //第一次先隐藏暴露的子菜单
            selectedKey: '', //选择的路径
            openKey: '', //打开的路径（选择的上一层）
        }
    }
    componentDidMount() {
        this.setMenuOpen(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.onCollapse(nextProps.collapsed);
        this.setMenuOpen(nextProps);
    }
    setMenuOpen = props => {
        const {path} = props;
        this.setState({
            openKey: path.substr(0, path.lastIndexOf('/')),
            selectedKey: path
        });
    };
    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
            firstHide: collapsed,
        });
    };
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
    };
    openMenu = v => {
        this.setState({
            openKey: v[v.length - 1],
            firstHide: false,
        })
    };
    render(){
        const { collapsed, firstHide, openKey, selectedKey } = this.state;
        return(
            <Sider
            trigger={null}
            collapsed={collapsed}
            >
                <div className="logo" style={collapsed?{backgroundSize:'0%'}:{backgroundSize:'70%'}}/>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    onClick={this.menuClick}
                    onOpenChange={this.openMenu}
                    openKeys={firstHide ? null : [openKey]}
                >

                    <Menu.Item key={"/app"}>
                        <Link to={"/app"}><Icon type="home" /><span>Home</span></Link>
                    </Menu.Item>
                    <Menu.Item key={"/app/form"}>
                        <Link to={"/app/form"}><Icon type="file-text" /><span>Car List</span></Link>
                    </Menu.Item>
                    <Menu.Item key={"/app/inlist"}>
                        <Link to={"/app/inlist"}><Icon type="plus-square" /><span>Car In</span></Link>
                    </Menu.Item>
                    <Menu.Item key={"/app/outlist"}>
                        <Link to={"/app/outlist"}><Icon type="logout" /><span>Car Out</span></Link>
                    </Menu.Item>
                    <Menu.Item key={"/app/staff"}>
                        <Link to={"/app/staff"}><Icon type="team" /><span>Staff</span></Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}