module.exports = {
    projectName: 'Popcorn Time Ru',
    projectUrl: 'https://popcorn-ru.tk',
    projectTwitter: 'popcorntimetv',
    projectFacebook: 'PopcornTimedotSh',
    projectGooglePlus: 'popcorntimeshplus',
    projectBlog: 'https://blog.popcorntime.app/',
    projectForum: 'https://www.reddit.com/r/PopcornTimeApp',

    statusUrl: 'http://status.popcorntime.app',
    changelogUrl: 'https://github.com/popcorn-time-ru/popcorn-desktop/commits/master',
    issuesUrl: 'https://github.com/popcorn-time-ru/popcorn-desktop/issues',
    sourceUrl: 'https://github.com/popcorn-time-ru/popcorn-desktop/',
    commitUrl: 'https://github.com/popcorn-time-ru/popcorn-desktop/commit',
    providers: {
         movie: {
             order: 1,
             name: 'Movies',
             uri: ['MovieApi?'
                    +'&apiURL='
                    + 'https://popcorn-ru.tk/,'
                  ]
         },
         tvshow: {
             order: 2,
             name: 'Series',
             uri: ['TVApi?'
                    +'&apiURL='
                    + 'https://popcorn-ru.tk/,'
                  ]
         },
         anime: {
             order: 3,
             name: 'Anime',
             uri: ['AnimeApi?'
                   +'&apiURL='
                     + 'https://anime.api-fetch.sh/'
                  ]
         },
         subtitle: 'OpenSubtitles',
         metadata: 'Trakttv',
         tvst: 'TVShowTime',
         torrentCache: 'TorrentCache'
    },
    updateEndpoint: {
        url: 'https://popcorntime.app/',
        index: 0,
        proxies: [{
            url: 'https://popcorntime.app/'
        }]
    },
    updateKey: '-----BEGIN PUBLIC KEY-----\n' +
        '-----END PUBLIC KEY-----\n',

    httpApiUsername: 'popcorn',
    httpApiPassword: 'popcorn',
    vpnEnabled: false,

    opensubtitlesAutoUpload: false,
    activateTorrentCollection: false,
    activateRandomize: false,
    continueSeedingOnStart: false,
    automaticUpdating: false
}
