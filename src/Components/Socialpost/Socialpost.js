import React from 'react';
import './Socialpost.css';
import image1 from './img1.png';
import image2 from './img2.png';
import image3 from './img3.png';
import image4 from './img4.png';

function Socialpost() {

    const socialPosts = [
        {
            image: image1,
            text: "How to rock the lip look that turns heads"
        },
        {
            image: image2,
            text: "Find the perfect shade for the season"
        },
        {
            image: image3,
            text: "The 5 eye shadow secrets you never knew"
        },
        {
            image: image4,
            text: "The pro-tips for at home hair dying"
        }
    ]
  return (
    <div className='wrapper'>
        <div className='socialpost'>
            <div className='text'>Social Posts</div>
            <div className='socialpost-cards'>
                 {socialPosts.map((post,i) => {
                return <div className='card1' key={i}>
                <img src={post.image} />
                <p>{post.text}</p>

            </div>
            })}
            
            </div>
           
        </div>
      
    </div>
  );
}


export default Socialpost;