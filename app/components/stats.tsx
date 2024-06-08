'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  ratings: number;
  downloads: number;
}

const Stats1 = () => {
  const [topRatedPosts, setTopRatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchTopRatedPosts = async () => {
      try {
        const response = await axios.get('/api/stats');
        setTopRatedPosts(response.data);
      } catch (error) {
        console.error('Failed to fetch top rated posts', error);
      }
    };

    fetchTopRatedPosts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 hidden md:block">
      <h1 className="text-2xl font-semibold mb-6 ">Top Rated Artwork s-1</h1>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        {topRatedPosts.map((post) => (
          <div key={post.id} className="stat">
            <div className="stat-title">{post.title}</div>
            <div className="stat-value">{post.ratings}</div>
            <div className="stat-desc">Ratings</div>
            {/* <div className="stat-desc">Downloads: {post.downloads}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats1;