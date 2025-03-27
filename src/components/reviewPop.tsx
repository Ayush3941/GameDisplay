"use client";
import React, { useState } from "react";
import { supabase } from "../supabase/supabase";
import {getRandomAvatar} from "./temp" 
import "./reviewPop.css";

export default function ReviewPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Review: ", formData);

   
    const { data, error } = await supabase
      .from("review") 
      .insert([
        {
          name: formData.name,
          email: formData.email,
          comment: formData.comment,
          avatar:getRandomAvatar()
        },
      ]);

    if (error) {
      console.error("Error inserting review:", error);
    } else {
      console.log("Review inserted:", data);
      setShowPopup(false); 
    }

  
    setFormData({
      name: "",
      email: "",
      comment: "",
    });
    window.location.reload();
  };

  return (
    <div>
      <button className="review-btn" onClick={() => setShowPopup(true)}>
        Give your valuable Review
      </button>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Leave a Review</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Your Comment"
                value={formData.comment}
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }
                required
              ></textarea>
              <div className="btn-group">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowPopup(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
