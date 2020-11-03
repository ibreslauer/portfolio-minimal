const data = {
  name: 'Ivan Breslauer',
  mail: 'ivan.breslauer@gmail.com',
  img: 'ivan.jpg',
  role: ['Full Stack Developer'],
  // icon names from https://ionicons.com/
  connects: [
    {
      name: 'Linkedin',
      iconName: 'logo-linkedin',
      link: 'https://www.linkedin.com/in/ivan-breslauer/'
    },
    {
      name: 'Github',
      iconName: 'logo-github',
      link: 'https://github.com/ibreslauer/'
    },
    {
      name: 'nuget',
      iconName: 'code-download-outline',
      link: 'https://www.nuget.org/profiles/IvanBreslauer'
    },
    {
      name: 'StackOverflow',
      iconName: 'logo-stackoverflow',
      link: 'https://stackoverflow.com/users/4866473/ivan-breslauer'
    },
    {
      name: 'Mail',
      iconName: 'mail-outline',
      link: `mailto:${'ivan.breslauer@gmail.com'}?Subject=Hello%20Ivan!`
    }
  ],
  links: [
    { name: 'Blog', link: 'https://medium.com/@ivan.breslauer' }
  ],
}

export default data