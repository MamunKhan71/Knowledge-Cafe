import profile from '../images/profile.png'
function Header() {
    return (
        <>
            <header className='container mx-auto my-8'>
                <nav className='flex justify-between items-center mb-4'>
                    <h1 className='text-4xl font-bold'>Kno<span className='text-amber-600'>w</span>ledge <span className='text-amber-600'>Cafe</span></h1>
                    <img src={profile} alt="profile-image" />
                </nav>
                <hr className='border border-dashed' />
            </header>
        </>
    )
}

export default Header;