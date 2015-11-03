$(function() {

//Настраиваем instafeed
    var feed = new Instafeed({
        clientId: 'cf9e4b53abc34d69a18b127e0f188d57',
        target: 'instafeed',
        get: 'tagged',
        userID: 352300017,
        //accessToken: '352300017.cf9e4b5.052efea8ded14da4afb3f21f3e795f6a',
        tagName: 'okhld',
        links: true,
        limit: 4,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();

});

//https://api.instagram.com/oauth/authorize/?client_id=cf9e4b53abc34d69a18b127e0f188d57&redirect_uri=https://ya.ru&response_type=token


// $(function() {
//
//   var feed = new Instafeed({
//     clientId: 'a782ae50d0bc4cd591c4a3ae6a0890cc',
//     target: 'instafeed',
//     get: 'tagged',
//     tagName: 'dog',
//     //userID: 352300017,
//     //accessToken: '352300017.a782ae5.7f05c2b7f536422a82322a687cb559f0',
//     links: true,
//     limit: 4,
//     sortBy: 'most-recent',
//     resolution: 'standard_resolution',
//     template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
//   });
//   feed.run();
//
// });

b07165e242034de8b3160a93e8184f7d
