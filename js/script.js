document.addEventListener("DOMContentLoaded", function() {
    var today = new Date();
    var blogPosts = document.querySelectorAll('.blog-post');
    
    blogPosts.forEach(function(post) {
        var postDate = new Date(post.getAttribute('data-date'));
        if (postDate > today) {
            post.style.display = 'none'; // Hide posts that are older than today
        }
    });
});
