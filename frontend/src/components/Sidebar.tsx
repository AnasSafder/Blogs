import { Layout, Menu, Avatar,Button } from 'antd';
import {
  BarChartOutlined,
  CalendarOutlined,
  BellOutlined,
  PlayCircleOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
  FolderOpenOutlined,
  MenuOutlined,
  LineChartOutlined,
  DownOutlined,
  SendOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';import { Link, useLocation } from 'react-router-dom';
import useUser from '../hooks/useUser';

const { Sider } = Layout;

export default function Sidebar() {
  const { user } = useUser();
  const location = useLocation();

  return (
    <Sider theme="light" width={250}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solidrgb(240, 240, 240)',
          backgroundColor:"rgb(55, 153, 245)",
        }}
      >
        <img
          src="/logo_qatar.png"
          alt="Logo"
          style={{ width: "90px", height: "63px",marginLeft:"5px"
           }}
        />

        <MenuOutlined style={{ fontSize: '20px', cursor: 'pointer',marginRight:"5px" }} />
      </div>

      <div style={{ padding: '16px', textAlign: 'center' }}>
        {user && (
          <>
            <Avatar size={64} src={user.picture} />
            <div style={{ color: 'gray' }}>Hello!</div>
<div style={{ color: 'black', display: 'flex', alignItems: 'center', gap: 4,justifySelf:"center" }}>
  {user.name} <DownOutlined />
</div>             <Button
        type="primary"
        icon={<LineChartOutlined />}
        style={{
          marginTop: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          width:150
        }}
      >
        Live Metrics
      </Button>
          </>
        )}
      </div>

     <Menu
        mode="inline"
        selectedKeys={[location.pathname === '/blogs' ? 'blogs-all' : '']}
        style={{ borderRight: 0 }}
      >
<Menu.ItemGroup
  key="dashboard-group"
  title={<span style={{ color: 'black', fontWeight: 'bold' }}>Dashboard</span>}
>          <Menu.Item key="overview" disabled icon={<BarChartOutlined />}>
            Overview
          </Menu.Item>
          <Menu.Item key="calendar" disabled icon={<CalendarOutlined />}>
            Calendar
          </Menu.Item>
          <Menu.Item key="scheduled" disabled icon={<SendOutlined />}>
            Scheduled Actions
          </Menu.Item>
          <Menu.Item key="alerts" disabled icon={<BellOutlined />}>
            Live Alerts
          </Menu.Item>
        </Menu.ItemGroup>

<Menu.ItemGroup
  key="blogs-group"
  title={<span style={{ color: 'black', fontWeight: 'bold' }}>Blogs</span>}
>          <Menu.Item key="blogs-all" icon={<FileTextOutlined />}>
            <Link to="/blogs">All</Link>
          </Menu.Item>
          <Menu.Item key="blogs-latest" disabled icon={<ExclamationCircleOutlined />}>
            Latest
          </Menu.Item>
          <Menu.Item key="blogs-archived" disabled icon={<FolderOpenOutlined />}>
            Archived
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
     <div style={{ paddingLeft: 24, marginTop: 12,paddingRight:5 }}>
  <Button
    type="text"
    disabled
    style={{
      color: 'rgba(0, 0, 0, 0.45)',
      fontWeight: 'bold',
      justifyContent: 'space-between',
      width: '100%',
      textAlign: 'left',
      paddingLeft: 0,
      paddingRight: 0,
      display: 'flex',
      alignItems: 'center',
      borderBottom:"1px whitesmoke solid",
      borderRadius:"0px"
    }}
  >
    <span>Documentation</span>
    <DownOutlined />
  </Button>
  <Button
    type="text"
    disabled
    style={{
      color: 'rgba(0, 0, 0, 0.45)',
      fontWeight: 'bold',
      justifyContent: 'space-between',
      width: '100%',
      textAlign: 'left',
      paddingLeft: 0,
      paddingRight: 0,
      display: 'flex',
      alignItems: 'center',
       borderBottom:"1px whitesmoke solid",
      borderRadius:"0px"
    }}
  >
    <span>Reports</span>
    <DownOutlined />
  </Button>
  <Button
    type="text"
    disabled
    style={{
      color: 'rgba(0, 0, 0, 0.45)',
      fontWeight: 'bold',
      justifyContent: 'space-between',
      width: '100%',
      textAlign: 'left',
      paddingLeft: 0,
      paddingRight: 0,
      display: 'flex',
      alignItems: 'center',
      borderBottom:"1px whitesmoke solid",
      borderRadius:"0px"
    }}
  >
    <span>Need Help?</span>
    <DownOutlined />
  </Button>
</div>

    </Sider>
  );
}
