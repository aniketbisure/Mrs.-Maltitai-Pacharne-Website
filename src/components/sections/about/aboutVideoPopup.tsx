import { useState } from "react";


const AboutVideoPopup = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div className="video-box">
                <a href="#" onClick={(e) => { e.preventDefault(), setOpen(true) }} className="video-btn ripple video-popup">
                    <i className="fa-solid fa-play" />
                </a>
            </div>
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#000',
                    zIndex: 20,
                    borderRadius: '10px',
                    overflow: 'hidden'
                }} onClick={(e) => e.stopPropagation()}>
                    <button
                        onClick={() => setOpen(false)}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            color: 'white',
                            background: 'rgba(0,0,0,0.5)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '30px',
                            height: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 30
                        }}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <video
                        src="/video.MOV"
                        controls
                        autoPlay
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>
            )}
        </>
    )
}

export default AboutVideoPopup