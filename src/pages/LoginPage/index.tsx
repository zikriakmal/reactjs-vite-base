import { Link } from 'react-router-dom';
import XLogo from '../../assets/xlogo.svg';
import Button from '../../components/atoms/Button';
import { useState } from 'react';
import { Modal } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const LoginPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='flex flex-col  min-h-lvh'>
            <div className='flex flex-1 flex-row justify-between items-center'>
                <div className='flex flex-1 justify-center p-1'>
                    <img src={XLogo} />
                </div>
                <div className='flex-1 justify-center p-1'>
                    <p className='text-7xl font-bold font-serif my-10 break-all'>Happening now </p>
                    <p className='text-4xl font-bold font-serif mb-10'>Join today. </p>
                    <div>
                        <div className='flex flex-col max-w-96'>
                            <Button title={'Continue With google'} />
                            <Button title={'Sign Up With Apple'} />
                            <div className='flex flex-row items-center'>
                                <div className='h-[0.5px] w-auto flex-1 bg-gray-200' />
                                <p className='px-2' >or</p>
                                <div className='h-[0.5px] w-auto flex-1 bg-gray-200' />
                            </div>
                            <Button title={'Create Account'} type={"primary"} onClick={() => showModal()} />
                            <p className='text-xs mb-[20px]'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
                            <div className='mt-[40px] flex flex-col'>
                                <p>Already have an account?</p>
                                <Link to={'/'} className='flex flex-1'>
                                    <Button title={'Sign In'} textColor={'primary'} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-1 flex-row items-center justify-center py-1 gap-4 flex-wrap' >
                <a href="" className='text-xs hover:underline hover:text-gray-500'>About</a>
                <a href="" className='text-xs hover:underline hover:text-gray-500'>Download the X app</a>
                <a href="" className='text-xs hover:underline hover:text-gray-500'>Help Center</a>
                <a href="" className='text-xs hover:underline hover:text-gray-500'>Terms of Service</a>
                <a href="" className='text-xs hover:underline hover:text-gray-500'>Privacy Policy</a>
                <a href="" className='text-xs hover:underline hover:text-gray-500'>Cookie Policy</a>
                <a href="" className='text-xs hover:underline hover:text-gray-500'>Accessibility</a>
                <a href="" className='text-xs hover:underline hover:text-gray-500'>Ads info</a>
                <a href="" className='text-xs hover:underline hover:text-gray-500'>Blog</a>
                <a href="" className='text-xs hover:underline hover:text-gray-500'>Status</a>
                <a href="" className='text-xs hover:underline hover:text-gray-500'>Careers</a>
                <a href="" className='text-xs hover:underline hover:text-gray-500'>Brand Resources</a>
                <a href="" className='text-xs hover:underline hover:text-gray-500'>Advertising</a>
                <a href="" className='text-xs hover:underline hover:text-gray-500'>Marketing</a>
                <a href="" className='text-xs hover:underline hover:text-gray-500'>X for Business</a>
                <a href="" className='text-xs hover:underline hover:text-gray-500'>Developers</a>
                <a href="" className='text-xs hover:underline hover:text-gray-500'>Directory</a>
                <a href="" className='text-xs hover:underline hover:text-gray-500'>Settings</a>
                <a href="" className='text-xs hover:underline hover:text-gray-500'>© 2024 X Corp.</a>
            </div>
            <Modal  title={<ModalHeader handleCancel={handleCancel} />} centered={true} open={isModalOpen} onOk={handleOk} footer={<></>} closeIcon={<></>} onCancel={handleCancel}>
                <div className='flex flex-col flex-1 ustify-center py-2 px-10 '>
                    <p className='font-bold text-2xl'>Create Accounts</p>
                    <div className='py-4 '>
                        <TextField id="outlined-basic" label="Name" variant="outlined" style={{ width: '100%' }} />
                    </div>
                    <div className='py-4 '>
                        <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: '100%' }} />
                    </div>

                    <div>
                        <p className='font-bold'>Date of Birth</p>
                        <p className='text-xs'>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                    </div>
                    <div className="flex flex-row my-10 gap-2">
                        <FormControl fullWidth className='flex-1'>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                id="demo-simple-select"
                                value={10}
                                label="Age"
                                onChange={() => { }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                id="demo-simple-select"
                                value={10}
                                label="Age"
                                onChange={() => { }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl >
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                id="demo-simple-select"
                                value={10}
                                label="Age"
                                onChange={() => { }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>


                </div>
            </Modal>
        </div>
    )
}


const ModalHeader = ({ handleCancel }: { handleCancel: any }) => {
    return (
        <div className='flex flex-row'>
            <button type={'button'} onClick={handleCancel}><CloseOutlined /></button>
            <div className="flex flex-1 justify-center">
                <img src={XLogo} className='w-5 h-5' />
            </div>
        </div>
    )
}


export default LoginPage;