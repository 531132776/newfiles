import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import home from '@/components/home'
import topNav from '@/components/common/topNav'
import PersonalSettings from '@/components/PersonalSettings'
import account from '@/components/account'
import SecuritySetting from '@/components/SecuritySetting'
import ProjectManagement from '@/components/ProjectManagement'
import PersonalLeftNav from '@/components/common/PersonalLeftNav'
import Accessmanagement from '@/components/Accessmanagement'
import visit from '@/components/visit'
import visit2 from '@/components/visit2'
import cost from '@/components/cost'
import CostAccount from '@/components/CostAccount'
import myOrder from '@/components/myOrder'
import order from '@/components/order'
import orderList from '@/components/orderList'
import submitOrder from '@/components/submitOrder'
import orderLeft from '@/components/common/orderLeft'
import costLeft from '@/components/common/costLeft'
import demo from '@/components/demo'
import pdf from '@/components/pdf'
import authentication from '@/components/authentication'


Vue.use(Router)

export default new Router({
    //mode: 'history',
    routes: [{
            path: '/',
            name: 'demo',
            component: demo,
        },
        {
            path: '/pdf',
            name: 'pdf',
            component: pdf,
        },
        {
            path: '/authentication',
            name: 'authentication',
            component: authentication,
        },
        {
            path: '/login',
            name: '登录',
            component: login,
        },
        {
            path: '/register',
            name: '注册',
            component: register
        },
        {
            path: 'home',
            name: '主页',
            component: home,
            redirect: '/PersonalSettings',
            children: [{
                    path: '/PersonalSettings',
                    name: '个人设置',
                    component: PersonalSettings,
                    redirect: '/account',
                    children: [{
                            path: '/account',
                            name: '账户信息',
                            component: account
                        },
                        {
                            path: '/SecuritySetting',
                            name: '安全设置',
                            component: SecuritySetting
                        },
                        {
                            path: '/ProjectManagement',
                            name: '项目管理',
                            component: ProjectManagement
                        }

                    ]
                },
                {
                    path: '/Accessmanagement',
                    name: '访问管理',
                    component: Accessmanagement,
                    redirect: '/visit',
                    children: [{
                            path: '/visit',
                            name: '密钥项目管理',
                            component: visit
                        },
                        {
                            path: '/visit2',
                            name: 'api钥项目管理',
                            component: visit2
                        },
                    ]
                },
                {
                    path: '/cost',
                    name: '费用',
                    component: cost,
                    redirect: '/CostAccount',
                    children: [{
                            path: '/CostAccount',
                            name: '费用信息',
                            component: CostAccount
                        },
                        {
                            path: '/myOrder',
                            name: '工单',
                            component: myOrder
                        }
                    ]
                },
                {
                    path: '/order',
                    name: '工单',
                    component: order,
                    redirect: '/orderList',
                    children: [{
                            path: '/orderList',
                            name: '工单列表',
                            component: orderList
                        },
                        {
                            path: '/submitOrder',
                            name: '工单列表',
                            component: submitOrder
                        },
                    ]
                }
            ]
        },
        {
            path: '/topNav',
            name: '头部',
            component: topNav
        },

        {
            path: '/PersonalLeftNav',
            name: '个人设置左侧导航',
            component: PersonalLeftNav
        },

        {
            path: '/costLeft',
            name: '费用左侧导航',
            component: costLeft
        },

        {
            path: '/orderLeft',
            name: '工单左侧导航',
            component: orderLeft
        },
    ]
})