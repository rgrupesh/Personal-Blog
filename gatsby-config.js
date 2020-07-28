module.exports = {
  siteMetadata: {
    siteTitle: 'Personal Blog',
    siteDescription: 'Personal Blog by Rupesh Gelal',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://chronoblog-hacker.now.sh/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Rupesh Gelal', // for example - 'Ivan Ganev'
    authorDescription: 'Machine Learning and Web Dev ', // short text about the author
    avatar: '/IMG2.JPG',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `github`,
        url: `https://github.com/rgrupesh`
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/2L8IWUN_`
      },
      {
        icon: `linkedin`,
        url: `https://www.linkedin.com/in/rupeshgelal/`
      },
      {
        icon: `at`,
        url: `mailto:rupeshgelal9@gmail.com`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '⬈ '
            }
          }
        },
        feedSearch: {
          symbol: ''
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
