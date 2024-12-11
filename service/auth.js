const userMap = new Map()

function setUser(id, user){
    if(!user) return;
    userMap.set(id, user);
} 

function getUser(id){
   return userMap.get(id);
}

export {setUser, getUser}