import Realm from 'realm'
import _ from 'lodash'
const profileId = 'e72d7aa7-43e4-4095-a5c0-71fe08f6c4df';

var defaultProfile = {
  id: profileId,
  profileVersion: -1,
  firstName: '',
  lastName: '',
  profilePicBase64: ''
};

//debugger;
var realm = new Realm({
 schema: [
   {
     name: 'Profile',
     properties: {
       id: 'string',
       profileVersion: 'number',
       firstName: 'string',
       lastName: 'string',
       profilePicBase64: 'string'
     }
   }
 ]
});
//alert(JSON.stringify(_.head(realm.objects('Profile'))))
if(_.head(realm.objects('Profile')) === undefined){
 realm.write(() => {
   realm.create('Profile', {
     id: profileId,
     profileVersion: -1,
     firstName: '',
     lastName: '',
     profilePicBase64: ''
   })
 })
}

export default {
 getProfile : () => _.head(realm.objects('Profile')),
 setProfile: (profile) => {
   realm.write(() => {
     profile.id = profileId;
     realm.create('Profile', profile, true)
   })
 }
}
