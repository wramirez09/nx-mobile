'use strict';
angular.module('MobileAlpha3.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Find a Plan', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', url: 'find-a-plan' },
    { id: 1, title: 'Find a Doctor', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.', url: 'find-a-doctor' },
    { id: 2, title: 'Find a Plan', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form', url: 'find-a-plan' },
    { id: 3, title: 'Contact Us', description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.', url: 'contact-us' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  };
});
