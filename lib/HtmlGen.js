function createHtml(team) {
  cards = [];
  cardsStr = ""
  for (let i = 0; i < team.length; i++) {
    cardsStr +=  `<div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">${team[i].name}</h5>
      <p class="card-text">${team[i].role}</p>
      <p class="card-text">ID - ${team[i].id}</p>
      <p class="card-text">Email - ${team[i].email}</p>`;
    if (team[i].role === "Manager") {
      cardsStr += `<p class="card-text">Office - ${team[i].office}</p>`;
    } else if (team[i].role === "Engineer") {
      cardsStr += `<p class="card-text">GitHub - ${team[i].username}</p>`
    } else if (team[i].role === "Intern") {
      cardsStr += `<p class="card-text">School - ${team[i].school}</p>`
    }

    cardsStr += "</div></div>";
  }


    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>my team page</title>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
      </head>
      
      <body>
        <header>
            <h1>My Team Page</h1>
        </header>

        <main>
            ${cardsStr}
        </main>
      </body>`
}

module.exports = {
    createHtml
}; 
