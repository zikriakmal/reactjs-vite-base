
const Button = (props: any) => {
    return (
        <button onClick={props.onClick} type='button' className={'flex-1 border p-2 py-3 rounded-full hover:border-gray-500 hover:bg-slate-200 my-2'} style={props?.type === 'primary' ? { backgroundColor: 'rgb(29, 155, 240)', color: 'white' } : {}}>
            <div className='text-center font-bold' style={props?.textColor === 'primary' ? { color: 'rgb(29, 155, 240)' } : {}}>
                <p>{props?.title}</p>
            </div>
        </button>
    )
}

export default Button;