import React from "react";
import User from './ProfileCompent/User'



const Profile = () => {
    let image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRdc2dLJJD1lrJdl57XcDMvV3I1N74miZj5Q&usqp=CAU" ;

    let users =
        [
            {
                name: "Chahed Nedra",
                bio: "Bio: A full Stack Developer",
               
               
                profession: "Proff :  Developer",
            },

        ];
        const handleName = (name) => {
            alert(` welcome ${name}`);
        };
    return (

        <div className="profil">
{users.map((user, i) => (
        <User key={i} user={user} handleName={handleName} />
      ))}
           

        </div>
    );
};

export default Profile;
