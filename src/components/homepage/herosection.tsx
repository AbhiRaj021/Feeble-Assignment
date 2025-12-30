import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../navbar/Navbar';
const HeroSection = () => {
    const [, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            className="relative w-full max-w-[1920px] min-h-[100dvh] lg:h-[1080px] mx-auto overflow-hidden font-sans"
            style={{
                background: `linear-gradient(0deg, #F2FAFF, #F2FAFF), linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))`
            }}
        >
            <Navbar />

            <div
                className="absolute flex flex-col items-center z-40"
                style={{
                    width: '100%',
                    top: '145px',
                    gap: '64px'
                }}
            >

                <div className="flex flex-col items-center" style={{ width: 'min(90%, 736px)', gap: '48px' }}>


                    <div
                        className="inline-flex items-center justify-center bg-white shadow-sm border border-blue-100/50"
                        style={{
                            width: '265px',
                            height: '28px',
                            borderRadius: '200px',
                            gap: '8px',
                            padding: '4px 8px 5px 8px'
                        }}
                    >
                        <div className="flex items-center justify-center" style={{ borderRadius: '185.79px', overflow: 'hidden' }}>
                            <img src="/msg.png" alt="" style={{ width: '32px', height: '17px' }} />
                        </div>
                        <span style={{
                            fontFamily: 'General Sans, sans-serif',
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight: '120%',
                            letterSpacing: '-0.02em',
                            color: '#006FE8'
                        }}>
                            #1 iMessage Automation Tool
                        </span>
                    </div>

                    <h1 style={{
                        width: '100%',
                        maxWidth: '736px',
                        fontFamily: 'General Sans, sans-serif',
                        fontWeight: 700,
                        fontStyle: "bold",
                        fontSize: 'clamp(36px, 8vw, 65px)',
                        lineHeight: '110%',
                        letterSpacing: '-0.02em',
                        textAlign: 'center',
                        color: '#1D2026',
                        margin: 0
                    }}>
                        <span style={{ color: '#007AFF' }}>iMessage</span> Automation for Teams and AI Workflows.
                    </h1>


                    <p style={{
                        width: 'min(90%, 586px)',
                        fontFamily: 'General Sans, sans-serif',
                        fontWeight: 400,
                        fontSize: 'clamp(16px, 4vw, 18px)',
                        lineHeight: '130%',
                        letterSpacing: '-0.02em',
                        textAlign: 'center',
                        color: '#000000',
                        margin: 0
                    }}>
                        Coup lets you, your team, or AI workflows send iMessages directly from your phone number, running securely on your Mac or Mac Mini.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full" style={{
                        gap: '12px'
                    }}>

                        <button
                            className="flex items-center justify-center text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                            style={{
                                width: '136px',
                                height: '46px',
                                backgroundColor: '#007AFF',
                                borderRadius: '50px',
                                padding: '12px 20px',
                                gap: '8px',
                                fontFamily: 'General Sans, sans-serif',
                                fontWeight: 500,
                                fontSize: '18px',
                                lineHeight: '120%',
                                letterSpacing: '-0.02em',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            Get Started
                        </button>

                        <button
                            className="flex items-center justify-center text-[#1f2937] bg-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                            style={{
                                width: '266px',
                                height: '46px',
                                border: '0.7px solid #6C788F',
                                borderRadius: '50px',
                                padding: '12px 20px',
                                gap: '12px',
                                fontFamily: 'General Sans, sans-serif',
                                fontWeight: 500,
                                fontSize: '17px',
                                lineHeight: '120%',
                                letterSpacing: '-0.02em',
                                cursor: 'pointer'
                            }}
                        >

                            <img src="/apple.png" alt="" className='w-[18px] h-[22px]' />


                            <div
                                style={{
                                    width: '1px',
                                    height: '20px',
                                    backgroundColor: '#D1D5DB',
                                    margin: '0 4px'
                                }}
                            />

                            Download the Mac app
                        </button>

                    </div>

                </div>
            </div>

            <div className="hidden lg:block">
                <motion.img
                    src="/crowmsg1.png"
                    alt=""
                    className="absolute z-20 pointer-events-none"
                    initial={{
                        top: '1200px',
                        left: '-2500px',
                        opacity: 0
                    }}
                    animate={{
                        top: '300px',
                        left: '2000px',
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                        duration: 6,
                        ease: [0.25, 0.1, 0.25, 1],
                        delay: 0.5,
                        opacity: {
                            times: [0, 0.2, 0.8, 1],
                            duration: 6
                        }
                    }}
                    style={{ width: '103.38px', height: '76.75px' }}
                />

                <motion.img
                    src="/crowmsg3.png"
                    alt=""
                    className="absolute z-20 pointer-events-none"
                    initial={{
                        top: '1200px',
                        left: '3500px',
                        opacity: 0
                    }}
                    animate={{
                        top: '400px',
                        left: '-200px',
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                        duration: 6,
                        ease: [0.25, 0.1, 0.25, 1],
                        delay: 0.5,
                        opacity: {
                            times: [0, 0.2, 0.8, 1],
                            duration: 6
                        }
                    }}
                    style={{ width: '128.21px', height: '54.38px' }}
                />
            </div>

            <div
                className="absolute flex flex-col items-center gap-2.5 z-20"
                style={{
                    top: 'min(950px, 90%)',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
            >

                <span
                    className="text-center"
                    style={{
                        fontFamily: 'General Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '18px',
                        fontStyle: "medium",
                        lineHeight: '130%',
                        letterSpacing: '-0.02em',
                        color: '#1D2026'
                    }}
                >
                    Scroll to learn more
                </span>

                <img src="/arrow-down.png" alt="arrow-down" style={{ width: '32px', height: '32px' }} />
            </div>

            <motion.img
                src="/crow1.png"
                alt=""
                className="absolute pointer-events-none hidden lg:block"
                initial={{ top: '791px', opacity: 0 }}
                animate={{ top: '291px', opacity: 1 }}
                transition={{
                    duration: 1.2,
                    ease: [0.43, 0.13, 0.23, 0.96],
                    delay: 0.2
                }}
                style={{ width: '42.36px', height: '14px', left: '120px' }}
            />
            <img
                src="/crow2.png"
                alt=""
                className="absolute pointer-events-none hidden lg:block"
                style={{ width: '42.36px', height: '14px', top: '329.02px', left: '300px', opacity: 1 }}
            />
            <motion.img
                src="/crow3.png"
                alt=""
                className="absolute pointer-events-none hidden lg:block"
                initial={{ top: '791px', opacity: 0 }}
                animate={{ top: '291px', opacity: 1 }}
                transition={{
                    duration: 1.2,
                    ease: [0.43, 0.13, 0.23, 0.96],
                    delay: 0.2
                }}
                style={{ width: '42.36px', height: '14px', top: '291px', left: '1200px', opacity: 1 }}
            />
            <img
                src="/crow4.png"
                alt=""
                className="absolute pointer-events-none hidden lg:block"
                style={{ width: '42.36px', height: '14px', top: '465px', left: '1250px', opacity: 1 }}
            />
            <div
                className="absolute left-0 right-0 w-full z-10 pointer-events-none"
                style={{
                    height: '581.74px',
                    top: '686.07px',
                    opacity: 1
                }}
            >
                <img src="/Cloud.png" alt="Clouds" className="w-full h-full object-contain object-top" />
            </div>


            <img
                src="/crowmsg1.png"
                alt=""
                className="absolute z-20 pointer-events-none hidden lg:block"
                style={{ width: '103.38px', height: '76.75px', top: '900px', left: '271.92px', opacity: 1 }}
            />
            <img
                src="/crowmsg2.png"
                alt=""
                className="absolute z-20 pointer-events-none hidden lg:block"
                style={{ width: '87.74px', height: '56.99px', top: '840px', left: '520px', opacity: 1 }}
            />
            <img
                src="/crowmsg3.png"
                alt=""
                className="absolute z-20 pointer-events-none hidden lg:block"
                style={{ width: '128.21px', height: '54.38px', top: '900px', left: '980px', opacity: 1 }}
            />
            <img
                src="/crowmsg4.png"
                alt=""
                className="absolute z-20 pointer-events-none hidden lg:block"
                style={{ width: '128.93px', height: '101.99px', top: '835px', left: '1277.18px', opacity: 1 }}
            />

        </section>
    );
};

export default HeroSection;
