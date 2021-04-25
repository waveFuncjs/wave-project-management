import React, { useState } from "react";
import { useQuery } from "react-query";
import { userService } from "../network/userService";



const Task = () => {
    
    const { isLoading, data, error } = useQuery(
        "user",
        userService.getMyProfile
      );
    
      if (isLoading) return 'Loading...'

      if (error) return 'Error...'

    return (
        <div>ASD</div>
    )
}

export default Task