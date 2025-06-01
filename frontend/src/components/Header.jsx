import { Input, Avatar, Space, Button } from 'antd';
import { BellOutlined, MailOutlined, AppstoreAddOutlined, SearchOutlined,PlusOutlined} from '@ant-design/icons';
import useUser from '../hooks/useUser';

const { Search } = Input;

export default function AppHeader() {
  const { user } = useUser();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px',
        background: '#fff',
        borderBottom: '1px solid #f0f0f0',
        height: 64,
      }}
    >
 <Input
        placeholder="Type here to search..."
        prefix={<SearchOutlined style={{ color: '#999' }} />}
        style={{ maxWidth: 300 }}
        onChange={(e) => console.log('Search input:', e.target.value)}
      />

      <Space size="large">
          <Button style={{border:"0px"}} icon={<PlusOutlined />}>
          Add
        </Button>
        <Button type="text" icon={<BellOutlined />} />
        <Button type="text" icon={<MailOutlined />} />
        <Button type="text" icon={<AppstoreAddOutlined />} />
        {user && <Avatar size="large" src={user.picture} />}
      </Space>
    </div>
  );
}
