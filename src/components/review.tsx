'use client';
import React, { useEffect, useState } from 'react';
import './review.css';
import { supabase } from '../supabase/supabase';

interface Review {
  username: string;
  comment: string;
  avatar: string;
}

export default function Reviews() {
  const [reviewsData, setReviewsData] = useState<Review[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from('review')
      .select('name,comment,avatar,email');
   
    if (error) {
      console.error('Error fetching reviews:', error);
    } else {
      setReviewsData(data as Review[]);
    }
  };

  const visibleReviews = showAll ? reviewsData : reviewsData.slice(0, 2);

  return (
    <section className="reviews">
      <h3>Reviews of Game</h3>
      {visibleReviews.map((review, index) => (
        <div key={index} className="review-item">
          <img src={review.avatar} alt={review.name} className="avatar" />
          <div className="review-content">
            <span className="username">{review.name}</span>
            <p className="comment">{review.comment}</p>
          </div>
        </div>
      ))}

      <button className="view-more" onClick={() => setShowAll(!showAll)}>
        {showAll ? 'View Less' : 'View More'}
      </button>
    </section>
  );
}
