import XLogo from '../../assets/xlogo.svg';

const LoginPage = () => {
    return (
        <div className='flex flex-1 flex-row justify-between items-center  min-h-lvh'>
            <div className='flex flex-1 justify-center p-1'>
                <img src={XLogo} />
            </div>
            <div className='flex-1 justify-center p-1'>
                <p className='text-7xl font-bold font-serif my-10'>Happening now </p>
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
                        <Button title={'Create Account'} type={"primary"} />
                        <p className='text-xs mb-[20px]'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
                        <div className='mt-[40px] flex flex-col'>
                            <p>Already have an account?</p>
                            <Button title={'Sign Up With Apple'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


const Button = (props: any) => {
    return (
        <button className={'flex-1 border p-2 py-3 rounded-full hover:border-gray-500 hover:bg-slate-200 my-2'} style={props?.type === 'primary' ? { backgroundColor: 'rgb(29, 155, 240)', color: 'white' } : {}}>
            <div className='text-center px-20 font-bold'>
                <p>{props?.title}</p>
            </div>
        </button>
    )
}




export default LoginPage;