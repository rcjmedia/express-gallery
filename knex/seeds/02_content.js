
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('content_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('content_table').insert([
        {
          title: 'The Title',
          author: 'John Doe',
          url: '/thetitle.mp4',
          type: 'video',
          format: 'mp4',
          description: 'The coolest video!',
          location: 'Honolulu, Hi'
        },
        {
          title: 'Awesome Video',
          author: 'User One',
          url: '/awesomevideo.mp4',
          type: 'video',
          format: 'mp4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          location: 'Houston, Texas'
        },
        {
          title: 'Lorem Ipsum',
          author: 'Two User',
          url: '/loremipsum.mp4',
          type: 'video',
          format: 'mp4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          location: 'San Diego, California'
        },
        {
          title: 'Ancient Aliens',
          author: 'Three User',
          url: '/anciantaliens.mp4',
          type: 'video',
          format: 'mp4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          location: 'Portland, Oregon'
        },
        {
          title: 'LA Lakers',
          author: 'Four User',
          url: '/lalakers.mp4',
          type: 'video',
          format: 'mp4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          location: 'Los Angeles, California'
        },
        {
          title: 'The Title',
          author: 'John Doe',
          url: 'nigel@email.com',
          type: 'video',
          format: 'mp4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          location: 'Honolulu, Hi'
        },
        {
          title: 'Atomic Bomb',
          author: 'User One',
          url: '/atomicbomb.jpg',
          type: 'image',
          format: 'jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          location: 'Anchorage, Alaska'
        },
        {
          title: 'Scary Photo',
          author: 'Two User',
          url: '/scaryphoto.jpg',
          type: 'image',
          format: 'jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          location: 'Honolulu, Hi'
        },
        {
          title: 'Space Travel',
          author: 'Three User',
          url: '/spacetravel.jpg',
          type: 'image',
          format: 'jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          location: 'Phoenix, Arizona'
        },
        {
          title: 'Music Is The Answer',
          author: 'Four User',
          url: '/musicistheanswer.jpg',
          type: 'image',
          format: 'jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          location: 'San Antonio, Texas'
        },
        {
          title: 'CES 2018 Highlights',
          author: 'John Doe',
          url: '/ces2018highlights.jpg',
          type: 'image',
          format: 'jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          location: 'Chicago, Illinois'
        },
        {
          title: 'Amazing Arts',
          author: 'User One',
          url: '/amazingarts.jpg',
          type: 'image',
          format: 'jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          location: 'Philadelphia, Pennsylvania'
        }
      ]);
    });
};
