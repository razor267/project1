import React, {Component} from 'react'
import './App.css'
import 'antd/dist/antd.css'
import NavBar from './components/Nav/NavBar'
import {BrowserRouter, HashRouter, Link, NavLink, Redirect, Route, Switch, withRouter} from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {UsersPage} from './components/Users/UsersContainer'
import {LoginPage} from './components/Login/LoginPage'
import {connect, Provider} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/appReducer'
import Loading from './components/common/loading/loading'
import store, {AppStateType} from './redux/reduxStore'
import {withSuspense} from './hoc/withSuspense'
import {Layout, Menu, Breadcrumb, Avatar, Row, Col} from 'antd'
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons'
import s from './components/Nav/NavBar.module.css'
import FriendsContainer from './components/Nav/Friends/FriendsContainer'
import {Header} from './components/Header/Header'

const {SubMenu} = Menu
const {Content, Footer, Sider} = Layout

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
    initializeApp: () => void
}

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)

class App extends Component<MapPropsType & DispatchPropsType> {

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occured')
        // console.error(promiseRejectionEvent);
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Loading/>
        }

        return (

            <Layout>
                <Header/>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined/>} title="My profile">
                                    <Menu.Item key="1"><Link to='/profile'>Profile</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to='/dialogs'>Messages</Link></Menu.Item>
                                    {/*<Menu.Item key="3">option3</Menu.Item>*/}
                                    {/*<Menu.Item key="4">option4</Menu.Item>*/}
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Developers">
                                    <Menu.Item key="5"><Link to='/developers'>Developers</Link></Menu.Item>
                                    {/*<Menu.Item key="6">option6</Menu.Item>*/}
                                    {/*<Menu.Item key="7">option7</Menu.Item>*/}
                                    {/*<Menu.Item key="8">option8</Menu.Item>*/}
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined/>} title="Other">
                                    <Menu.Item key="9"><Link to='/news'>News</Link></Menu.Item>
                                    <Menu.Item key="10"><Link to='/music'>Music</Link></Menu.Item>
                                    <Menu.Item key="11"><Link to='/settings'>Settings</Link></Menu.Item>
                                    {/*<Menu.Item key="12">option12</Menu.Item>*/}
                                </SubMenu>
                                <FriendsContainer/>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <Switch>
                                <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                                <Route path='/dialogs' render={() => <SuspendedDialogs/>}/>
                                <Route path='/profile/:userId?' render={() => <SuspendedProfile/>}/>
                                <Route path='/news' component={News}/>
                                <Route path='/music' component={Music}/>
                                <Route path='/settings' component={Settings}/>
                                <Route path='/developers' render={() => <UsersPage pageTitle={'Самураи'}/>}/>
                                <Route path='/login' render={() => <LoginPage/>}/>
                                <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Samurai Social Network ©2021 Created by Greek</Footer>
            </Layout>

            /* <div className='app-wrapper'>
                 <HeaderContainer/>
                 <NavBar/>
                 <div className='app-wrapper-content'>
                     <Switch>
                         <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
                         <Route path='/dialogs' render={() => <SuspendedDialogs/> }/>
                         <Route path='/profile/:userId?' render={() => <SuspendedProfile/>}/>
                         <Route path='/news' component={News}/>
                         <Route path='/music' component={Music}/>
                         <Route path='/settings' component={Settings}/>
                         <Route path='/users' render={() => <UsersPage pageTitle={"Самураи"}/>}/>
                         <Route path='/login' render={() => <LoginPage/>}/>
                         <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                     </Switch>
                 </div>
             </div>*/
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

// export default compose(
let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const SamuraiJSApp: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp