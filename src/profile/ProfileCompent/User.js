import React from "react";

import PropTypes from "prop-types";


const User = (props ) => {
  
    return (
        <div>
           
            <h1>{props.user.name}</h1>
            <h2>{props.user.bio}</h2>
            <h3>{props.user.profession}</h3>
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRdc2dLJJD1lrJdl57XcDMvV3I1N74miZj5Q&usqp=CAU "alt="avatar" />
            <div >
                <button onClick={() => props.handleName(props.user.name)}>Details</button>
            </div>
        </div>
    );
};
User.defaultProps = {
    product: {
      name: "inconnu",
      bio: "nothing",
      profession: "inconnu",
    },
  };
  User.propTypes = {
    profile: PropTypes.object,
  };
export default User;