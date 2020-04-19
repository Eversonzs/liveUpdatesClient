export default function() {
  return [
    {
      title: 'User Profile',
      htmlBefore: '<i class="material-icons">person</i>',
      to: '/user-profile',
      htmlAfter: ''
    },
    {
      title: 'News Blog',
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: '/news-blog',
    },
    {
      title: 'Logout',
      htmlBefore: '<i class="material-icons">exit_to_app</i>',
      to: '/logout',
    },
  ];
}
