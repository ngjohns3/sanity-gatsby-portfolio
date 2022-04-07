export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624f0dd277ff3e1fcfb0589f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9sz9ncc2',
                  apiId: '2fee4920-e0aa-48b9-9e34-65c7aa4099fd'
                },
                {
                  buildHookId: '624f0dd233d7e717f8f3990b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ppt2tbi5',
                  apiId: 'b95e16b7-5dde-4cf3-980e-bcf76b5fc83b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ngjohns3/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ppt2tbi5.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
