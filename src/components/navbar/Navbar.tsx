
const Navbar = () => {
    return (
        <div
            className="absolute z-50 flex items-center justify-between bg-white shadow-sm transition-all duration-300"
            style={{
                width: 'min(95%, 1200px)',
                height: '81px',
                borderRadius: '200px',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '20px 20px 20px 24px'
            }}
        >
            <div className="flex items-center gap-2">
                <img src="/Company.png" alt="" style={{ width: '26px', height: '34px', top: '23px', left: '24px' }} />
                <span className="text-2xl font-bold tracking-tight text-gray-900">coup.</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
                {['How it Works', 'Pricing', 'Use Case', 'FAQ'].map((item) => (
                    <a
                        key={item}
                        href="#"
                        className="text-[16px] font-medium leading-[100%] tracking-normal transition-colors hover:!text-black"
                        style={{
                            fontFamily: 'General Sans, sans-serif',
                            color: '#8C97A8'
                        }}
                    >
                        {item}
                    </a>
                ))}
            </div>

            <button
                className="relative text-white font-medium transition-all shadow-[0_2px_8px_rgba(11,122,229,0.2)] overflow-hidden group"
                style={{
                    width: '138px',
                    height: '41px',
                    borderRadius: '43.62px',
                    paddingTop: '11px',
                    paddingRight: '18px',
                    paddingBottom: '11px',
                    paddingLeft: '18px',
                    background: '#007AFF',
                    fontFamily: 'General Sans, sans-serif',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '120%',
                    letterSpacing: '-0.02em',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >

                <span
                    className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                    style={{ borderRadius: '43.62px' }}
                />


                <span className="relative z-10 group-hover:text-[#007AFF] transition-colors duration-500">
                    Contact Sales
                </span>
            </button>
        </div>
    );
};

export default Navbar;
