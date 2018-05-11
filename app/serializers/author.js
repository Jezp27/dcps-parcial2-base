import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr) {
    switch (attr){
      case 'firstName':
        return 'first-name';
      case 'lastName':
        return 'last-name';
      case 'profilePicture':
        return 'profile-picture';
      default:
        return this._super(...arguments);
    }
  }

});
