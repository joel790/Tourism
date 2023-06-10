export const getCurrentUserId = (req) => {
    if (req.user) {
      return req.user._id; // Assuming the user ID is stored in the "_id" property
    }
  
    // Return null or handle the case when the user is not authenticated
  };