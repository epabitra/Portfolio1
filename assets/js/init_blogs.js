// Sample array of objects
const blogCards = [
    {
      imageURL: "assets/img/Uploads/mavenErrorWithEclipseVersionWithDescription.webp",
      authorName: name_,
      date: "26 July, 2023",
      header: "NoSuchMethodError while Creating Spring Starter Projects",
      blogURL: "blog-details-maven-issue-with-eclipse.html",
    },
    {
      imageURL: "assets/img/blog/MVC Blog.png",
      authorName: name_,
      date: "18 May, 2023",
      header: "Right Way Of Developing Web Application With MVC Architecture",
      blogURL: "blog-details-mvc-webapp.html",
    },
];

generateBlogContent(blogCards);
  
function generateBlogContent(blogArray) {
    const container = document.getElementById("blogCardsContainer"); // Target container element
    blogArray.forEach(blog => {
        const blogHTML = `
        <div class="col-xl-4 col-lg-6 col-md-6">
            <div class="blog-card style1">
            <div class="blog-img">
                <img src="${blog.imageURL}" style="width: 500px; height: 250px;" alt="Image">
            </div>
            <div class="blog-info">
                <ul class="blog-metainfo list-style">
                <li><i class="flaticon-user"></i> <a>${blog.authorName}</a></li>
                <li><i class="flaticon-calendar"></i>${blog.date}</li>
                </ul>
                <h3><a href="${blog.blogURL}">${blog.header}</a></h3>
                <a href="${blog.blogURL}" class="link style1">Read More
                <i class="flaticon-right-arrow"></i>
                </a>
            </div>
            </div>
        </div>
        `;
        container.innerHTML += blogHTML; // Append to the container
    });
}
  
  