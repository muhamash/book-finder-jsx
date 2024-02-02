const Nav = () => {
    return (
        <div className='flex items-center justify-between mx-auto w-[68%]'>
            <div>
                <img className="h-[40px] cursor-pointer" src="lws.svg" alt="logo?" />
            </div>
            <div>
                <img className="h-[40px] cursor-pointer" src="notification.svg" alt="logo?" />
            </div>
        </div>
    );
};

export default Nav;