import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';

const SinglePage = (props) => {
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true)
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleImage = async () => {
      try {
        props.setProgress(10)
        const response = await axios.get(
          `https://api.slingacademy.com/v1/sample-data/photos/${id}`
        );
        setLoading(true)
            props.setProgress(50);
        console.log('API Response for Single Image:', response.data);
        setLoading(false)
        setImageData(response.data);
        props.setProgress(100);
      } catch (error) {
        console.error('Error while fetching single image:', error);
      }
    };
  
    fetchSingleImage();
  }, [id]);
  

  return (
    <div className="single-image">
      {imageData ? (
        <>
        <div className="single-card">
          <img src={imageData.photo.url} alt={imageData.photo.title} />
          <div className="content">
          <h2>{imageData.photo.title}</h2>
          <p>{imageData.photo.description}</p>
          </div>
          </div>
        </>
      ) : (
       <Spinner/>
      )}
    </div>
  );
};

export default SinglePage;
