/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title } = post;
    return (
        <div className="border rounded-lg border-gray-300 p-4 max-w-xs mx-auto">
            <h1>Post number: {id}</h1>
            <p>{title}</p>
            {/* You can use Link to create links to other routes */}
            <Link to={`/post/${id}`}>Post details</Link>
        </div>
    );
};

export default Post;
