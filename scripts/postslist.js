
let posts = [
    {
        id: 1,
        author: 'Srishti Gupta',
        title: "‘let’ me be a ‘const’(ant), not a ‘var’(iable)!",
        excerpt: 'Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different.'
    } ,
    {
        id: 2,
        author: 'Colby Fayock',
        title: "What is linting and how can it save you time?",
        excerpt: ' One of the biggest challenges in software development is time. It’s something we can’t easily get more of, but linting can help us make the most out of the time we have.'
    } ,
    {
        id: 3,
        author: 'Yazeed Bzadough',
        title: "How to Get More Views on Your Tech Blog",
        excerpt: 'If you\'re a developer with a Twitter account, you\'ve already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry.'
    },
    {
        id: 4,
        author: 'Cedd Burge',
        title: "How to write easily describable code",
        excerpt: 'When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code.'
    },
    {
        id: 5,
        author: 'Srishti Gupta',
        title: "Everything you should know about ‘module’ & ‘require’ in Node.js",
        excerpt: 'Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module named xyz.'
    }

];
addPostsList();
function addPostsList() {
    posts.forEach(function(value,index){
        let template = '<div class="card  mb-3 text-center col-md-6 " id = "' + value.id+ '">' +
            ' <div class="row ">' +
           ' <div class="col-md-2 align-self-center authorname">' +
        '<p> ' + value.author+ '</p>' +
        '</div>' +
        ' <div class="col-md-10 cb-grey roundcorners">' +
        '<div class="card-body">' +

        ' <div><h5 class="card-title">' +value.title+ '</h5>' +
        '<i class="fas fa-trash trashicon" data-bs-toggle="modal" data-bs-target="#deletePost" onclick="addPostId(' +value.id + ')"></i></div>' +
        '<div><p class="card-text" >' + value.excerpt + '</p></div>' +
        ' <p><i class="fas fa-ellipsis-h floatright" onClick="goTOFullPost(' + value.id +') ;"></i></p>' +

        '</div>' +
        ' </div>' +
        ' </div>' +
        '</div>' ;
        document.getElementById('postscard').innerHTML += template ;


    });

};



function addPostId(id) {
    document.getElementById('yesBtn').innerHTML = '<button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick="deletePostsList(' + id +' ) ;">Yes</button>';
}
function deletePostsList(id) {

        document.getElementById(id).remove();


};
function goTOFullPost(id) {

    newURL = './post.html';
    location.replace(newURL)
};

