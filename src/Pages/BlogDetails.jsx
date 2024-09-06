import React from 'react';
import { useLocation } from 'react-router-dom';
import Blogs from './Blogs';

const BlogDetails = () => {
  const location = useLocation();
  const blog = location.state || {}; // Default to an empty object if state is undefined

  const { image, title, date, description, author } = blog;

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div className="pt-40 px-10 mb-8">
      <div className="h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container">
        <p className="text-slate-600 text-sm py-3">
          Written by {author} on {date}
        </p>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>

      {/* All Blogs Section */}
      <Blogs />
    </div>
  );
};

export default BlogDetails;
