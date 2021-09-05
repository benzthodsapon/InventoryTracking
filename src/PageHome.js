import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const PageHome  = () => {
  const menubar = ["Menu 1","Menu 2","Menu 3","Menu 4","Menu 5"] 
return(
  <Layout className="layout">
  <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      {menubar.map((item, index) => {
        const key = index;
        return <Menu.Item key={key}>{`${item}`}</Menu.Item>;
      })}
    </Menu>
  </Header>
  <Content style={{ padding: '0 50px' }}>
    <h1>Hello World</h1>
    <div className="site-layout-content">Content</div>
  </Content>
</Layout>
)
}
export default PageHome;
