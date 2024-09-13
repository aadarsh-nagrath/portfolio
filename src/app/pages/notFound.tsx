// pages/404.tsx
import React from 'react';
import Image from 'next/image';
import nf404 from "../../../public/404.png"

const Custom404 = () => {
    return (
        <div style={styles.container}>
            <div style={styles.textContainer} className='relative left-52'>
                <h1 style={styles.heading}>404</h1>
                <h2 style={styles.subHeading}>Out of nothing, something.</h2>
                <p style={styles.description}>
                Oops! It seems the page you’re looking for has vanished into the digital abyss. 
                Perhaps it took an unexpected detour or never existed at all. 
                Don’t worry, though — you can navigate back to the home page or explore other exciting sections of my portfolio. 
                If you need any assistance, feel free to reach out!
                </p>
            </div>
                <div style={styles.circleText}>
                    <Image src ={nf404} alt="circular-img" height={550} width={550} className='left-44 relative ' />
                </div>
        </div>
    );
};

export default Custom404;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row' as const,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100vh',
        padding: '0 20px',
        fontFamily: 'sans-serif',
    },
    textContainer: {
        maxWidth: '500px',
    },
    heading: {
        fontSize: '200px',
        margin: 0,
        color: '#555',
    },
    subHeading: {
        fontSize: '44px',
        marginTop: '20px',
        marginBottom: '20px',
        color: '#333',
    },
    description: {
        fontSize: '18px',
        color: '#666',
    },
    link: {
        marginTop: '20px',
        display: 'inline-block',
        color: '#0070f3',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    circleText: {
        writingMode: 'vertical-rl' as const,
        transform: 'rotate(180deg)',
        fontSize: '14px',
        color: '#555',
    },
};
