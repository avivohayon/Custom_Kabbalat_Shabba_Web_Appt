import React from 'react'
import { useState } from 'react';
import { HomeBodyContainer, HomeBodyImg, BodyText, HomeBodyBot, ClickableImages,ClickableImagesContainer } from './HomePageBody.style'



const HomePageBody = () => {

    const [weddingImage, setWeddingImage] = useState('./images/HomeScreen/wedding.png');
    const [mapImage, setMapImage] = useState('./images/HomeScreen/map2.png');
    const [bookImage, setBookImage] = useState('./images/HomeScreen/book2.png');


    const handleWeddingHover = () => {
        setWeddingImage('./images/HomeScreen/wedding_placeholder.png')
    };

    const handleMapHover  = () => {
        setMapImage('./images/HomeScreen/map_placeholder.png')
    };
    const handleBookHover  = () => {
        setBookImage('./images/HomeScreen/book_placeholder.png')
    };

  return (
    <>
    <HomeBodyContainer>
        
        <HomeBodyImg src='./images/HomeScreen/family.png' alt=''/>

        
   
    </HomeBodyContainer>
    <BodyText>
    < div>What else can be done with us? </div>

    </BodyText>
    
        <HomeBodyBot>
            
            <ClickableImages 
                src={weddingImage}
                alt=''
                onMouseOver={handleWeddingHover}
                onMouseOut={() => setWeddingImage('./images/HomeScreen/wedding.png')}
                />
                <ClickableImages
                src={mapImage}
                alt=''
                onMouseOver={handleMapHover}
                onMouseOut={() => setMapImage('./images/HomeScreen/map2.png')}
                />
                <ClickableImages 
                src={bookImage}
                alt=''
                onMouseOver ={handleBookHover}
                onMouseOut={() => setBookImage('./images/HomeScreen/book2.png')}
                /> 
          
        </HomeBodyBot>


    </>
  )
}


export default HomePageBody


