// src/utils/recommendations.js

// Example data structure for users and their friends
const users = [
    { id: 1, name: 'Chomu', friends: [2, 3] },
    { id: 2, name: 'Bunty', friends: [1, 3, 4] },
    { id: 3, name: 'Nanu', friends: [1, 2] },
    { id: 4, name: 'Bhanu', friends: [2] },
  ];
  
  // Function to get user by ID
  const getUserById = (userId) => {
    return users.find(user => user.id === userId);
  };
  
  // Function to get mutual friends of two users
  const getMutualFriends = (user1, user2) => {
    const user1Friends = new Set(user1.friends);
    return user2.friends.filter(friendId => user1Friends.has(friendId));
  };
  
  // Function to recommend friends based on mutual friends
  export const recommendFriends = (currentUserId) => {
    const currentUser = getUserById(currentUserId);
    if (!currentUser) {
      throw new Error('User not found');
    }
  
    const recommendations = [];
    for (const user of users) {
      if (user.id !== currentUserId && !currentUser.friends.includes(user.id)) {
        const mutualFriends = getMutualFriends(currentUser, user);
        if (mutualFriends.length > 0) {
          recommendations.push({
            user,
            mutualFriendsCount: mutualFriends.length
          });
        }
      }
    }
  
    // Sort recommendations by the number of mutual friends
    recommendations.sort((a, b) => b.mutualFriendsCount - a.mutualFriendsCount);
  
    return recommendations;
  };
  