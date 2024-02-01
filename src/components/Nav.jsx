const Nav = () => {
    return (
        <div className='container mx-auto flex items-center justify-between gap-x-6'>
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