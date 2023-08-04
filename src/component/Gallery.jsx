import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
import { Link} from 'react-router-dom'

const Gallery = (props) => {

    const [gallery, setGallery] = useState([])
    const [loading, setLoading] = useState(true)

   // Function to fetch gallery images
    const imageItem = async ()=>{
        try {
          props.setProgress(10)
            const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?&limit=20')
            setLoading(true)
            props.setProgress(50);
            console.log('API Response:', response.data);
            
            setLoading(false)
            setGallery(response.data.photos);
            props.setProgress(100);
        
        } catch (error) {
            <h1>Error while fetching the data</h1>;
        }
        
    }

    useEffect(() => {
      imageItem()
    }, [])
    



  return (
    <>
    {loading && <Spinner />}
    <div className='gallery-img'>
      {
        gallery.map((item)=>(
          <Link key={item.id} to={`/image/${item.id}`} >
            <div key={item.id} className='main-card'>
                <img  src={item.url} alt="img" />
            </div>
            </Link>
        ))
      }
    </div>
    </>
  )
}

export default Gallery
