//FUNCTION TO WRITE HTML PAGE - CALLED IN INDEX.JS
function createHtml(team) {
  //SETS CARDS ARRAY AND STRING TO EMPTY
  cards = [];
  cardsStr = ""

  //FOR EACH TEAM MEMBER, RETRIEVE AND APPEND RESPECTIVE PARENT CLASS DATA
  for (let i = 0; i < team.length; i++) {
    cardsStr +=  `<div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-header">${team[i].name}</h5>
      <p class="card-title">${team[i].role}</p>
      <p class="card-text">ID - ${team[i].id}</p>
      <p class="card-text">Email - <a href="mailto:${team[i].email}"> ${team[i].email} </a></p>`;

      //FOR EACH CARD, CHECK IF ROLE MATCHES AND ADD RESPECTIVE CHILD CLASS'S UNIQUE DATA
    if (team[i].role === "Manager") {
      cardsStr += `<p class="card-text">Office - ${team[i].office}</p>`;
    } else if (team[i].role === "Engineer") {
      cardsStr += `<p class="card-text">GitHub - ${team[i].username}</p>`
    } else if (team[i].role === "Intern") {
      cardsStr += `<p class="card-text">School - ${team[i].school}</p>`
    }

    cardsStr += "</div></div>";
  }


    //RETURN HTML STRING WITH DATA
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>my team page</title>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="dist/styles.css">
        </head>
      
      <body>
        <header>
            <h1>My Team</h1>
        </header>

        <main>
            ${cardsStr}
        </main>
      </body>`
}

module.exports = {
    createHtml
}; 
