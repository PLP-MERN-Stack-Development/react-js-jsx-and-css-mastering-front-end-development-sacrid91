import React, { useState } from 'react';

const UserCard = ({ user }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=blue&color=fff`}
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
      >
        {isExpanded ? 'Show Less' : 'View Details'}
      </button>
      
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-gray-700"><strong>Phone:</strong> {user.phone}</p>
          <p className="text-gray-700"><strong>Company:</strong> {user.company?.name}</p>
          <p className="text-gray-700"><strong>Website:</strong> {user.website}</p>
        </div>
      )}
    </div>
  );
};

export default UserCard;