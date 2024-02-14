import { Button, Dropdown, MenuProps, Space } from "antd";
import { Link } from "react-router-dom";

const items: MenuProps['items'] = [
    {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: '0',
    },
    {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];

const Home = () => {
    return (
        <div className="flex flex-col gap-8 container m-10">
            <p className="text-3xl">This is vite + react js + react router dom + tailwind + ant design</p>
            <div>
                <Link to={"/contact"}>This is router to contact page</Link>
            </div>
            <div>
                <Link to={"/login"}>Back to login page</Link>
            </div>
            <div>
                <Button className="bg-slate-700" type="primary">This is ant design button example</Button>
            </div>
            <div className="border rounded-md self-center px-4 py-2 bg-slate-700">
                <Dropdown menu={{ items }} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()} className="text-blue-50">
                        <Space>
                            This is ant design menu dropdown
                        </Space>
                    </a>
                </Dropdown>

            </div>
        </div>
    )
}

export default Home;