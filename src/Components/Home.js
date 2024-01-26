import React, { useState } from 'react';
import './Home.css';
import im from '../Components/dfhhh.png';

function Home() {
    const [selectedTshirt, setSelectedTshirt] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [upperText, setUpperText] = useState('');
    const [lowerText, setLowerText] = useState('');
    const [fontSize, setFontSize] = useState(16);
    const [textColor, setTextColor] = useState('white'); // Initial text color

    const handleTshirtClick = (tshirt) => {
        setSelectedTshirt(tshirt);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUploadedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const getImageStyle = () => {
        if (selectedTshirt === 'whitei') {
            return { filter: 'brightness(50%) sepia(100%) hue-rotate(200deg) saturate(500%)' };
        } else if (selectedTshirt === 'blue') {
            return { filter: 'brightness(50%) sepia(100%) hue-rotate(720deg) saturate(500%)' };
        } else if (selectedTshirt === 'black') {
            return { filter: 'brightness(0)' };
        } else if (selectedTshirt === 'white') {
            return { filter: 'brightness(50%)' };
        } else {
            return {};
        }
    };

    const textStyles = {
        fontSize: `${fontSize}px`,
        color: textColor, // Set the text color
    };

    return (
        <div>
            <div className="row">
                <div className="col-7">
                    <div className="column" style={{ position: 'relative' }}>
                        <img src={im} style={getImageStyle()} alt="T-shirt" />

                        {uploadedImage && (
                            <img
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '170px',
                                    height: '150px',
                                }}
                                src={uploadedImage}
                                alt="Uploaded Image"
                            />
                        )}
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                textAlign: 'center',
                            }}
                        >
                            <div style={{ position: 'relative' }}>
                                <p
                                    style={{
                                        ...textStyles,
                                        position: 'absolute',
                                        top: '-100px',
                                        width: '100%',
                                        textAlign: 'center',
                                    }}
                                >
                                    {upperText}
                                </p>
                                <p
                                    style={{
                                        ...textStyles,
                                        position: 'absolute',
                                        bottom: '-120px',
                                        width: '100%',
                                        textAlign: 'left',
                                    }}
                                >
                                    {lowerText}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <div className="column">
                        <center><h1>Setting</h1></center>
                        <h5 className='text-start'>Change T-Shirt color</h5>
                        <div className="text-start">
                            <img
                                className='align-left'
                                onClick={() => handleTshirtClick('whitei')}
                                src={im}
                                alt="Red T-Shirt"
                                style={{ width: '45px', height: '45px', filter: 'brightness(50%) sepia(100%) hue-rotate(200deg) saturate(500%)' }}
                            />
                            <img
                                className='mx-3'
                                onClick={() => handleTshirtClick('blue')}
                                src={im}
                                alt="Blue T-Shirt"
                                style={{ width: '45px', height: '45px', filter: 'brightness(50%) sepia(100%) hue-rotate(720deg) saturate(500%)' }}
                            />
                            <img
                                className='mx-1'
                                onClick={() => handleTshirtClick('black')}
                                src={im}
                                alt="Black T-Shirt"
                                style={{ width: '45px', height: '45px', filter: 'brightness(0)' }}
                            />
                            <img
                                className='mx-3'
                                onClick={() => handleTshirtClick('white')}
                                src={im}
                                alt="White T-Shirt"
                                style={{ width: '45px', height: '45px', filter: 'brightness(50%)' }}
                            />
                        </div>
                    </div>
                    <div className='column'>
                        <h5 className='text-start'>Change image</h5>
                        <input className='text-s' type="file" accept="image/*" onChange={handleImageUpload} />
                    </div>
                    <div className='column'>
                        <h5 className='text-start'>Write text</h5>
                        <h6 className='text-start'>Upper text</h6>
                        <input
                            className='text-s'
                            type="text"
                            value={upperText}
                            onChange={(e) => setUpperText(e.target.value)}
                        />
                    </div>
                    <div className='column'>
                        <h5 className='text-start'>Write text</h5>
                        <h6 className='text-start'>Lower text</h6>
                        <input
                            className='text-s'
                            type="text"
                            value={lowerText}
                            onChange={(e) => setLowerText(e.target.value)}
                        />
                    </div>
                    <div className='column'>
                        <h5 className='text-start'>Text Font Size</h5>
                        <input
                            type="range"
                            min="10"
                            max="30"
                            step="1"
                            value={fontSize}
                            onChange={(e) => setFontSize(Number(e.target.value))}
                        />
                    </div>
                    <div className='column'>
                        <h5 className='text-start'>Text Color</h5>
                        <select
                            value={textColor}
                            onChange={(e) => setTextColor(e.target.value)}
                        >
                            <option value="white">White</option>
                            <option value="black">Black</option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
