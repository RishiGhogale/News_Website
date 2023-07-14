fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=dfbd4ac4e6d142bbaf3d6f66936b3972")
  .then(response => response.json())
  .then(data => {
    let stories = data.articles.map(({ title, urlToImage, url, content, publishedAt,description }) => ({ title, urlToImage, url, content, publishedAt,description }))
    console.table(stories)

    const mainContent = document.getElementById('mainContent');
    const contentHTML = stories.map(item =>

      `<div class="allCards">
            <div class="card">
            <h5 class="card-title">"${item.title}"</h5>
            <img src="${item.urlToImage}" class="card-img-top" alt="${item.title}">
              <div class="card-body">
             <h4 class= "publishDate">${item.publishedAt}<h/4>
             <p class="card-text">${item.description}</p>
              <p class="card-text">${item.content}</p>
              <a href="${item.url}" class="url "> <button class="btn"> Read More... </button></a>
            </div>
          </div>
          </div> 
            `


    ).join(' ')

    const div = document.getElementById("mainContent").innerHTML = contentHTML

  });