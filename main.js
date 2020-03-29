( () => {
    const loc = window.location.pathname;
    const page = loc.split('/').pop();
    console.log(page)

    if(page == "index.html" || page == ""){
        console.log("ok on index");
        console.log(window.screen.width);
        
        const logo = document.querySelector('.logo-parent');
        const logIn = document.querySelector('.log-in');
        if(window.screen.width <= 751) {
            logIn.insertAdjacentHTML('afterbegin', `
            <div class="logo-parent align-self-center pt-3 mb-5">
            <i class="logo"></i>
            </div>
            `);
            logIn.classList.add('align-self-sm-stretch',)
            logo.remove();
        }
    }

    if(page == "setting.html") {
        const menuComponent = `
        <nav class="navbar navbar-expand-lg navbar-light col-12 row mt-5">
        <button class="navbar-toggler col-3" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
         <button class="btn-address col-9">Your Address</button>

     <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <button class="btn-address ">Your Address</button>
      </li>
      <li class="nav-item">
         <button class="btn-laundromat ">Laundromat</button>
      </li>
      <li class="nav-item">
        <button class="btn-credit-card ">Credit Card</button>
      </li>
      <li class="nav-item">
        <button class="btn-profile ">Profile</button>
      </li>
    </ul>
  </div>
</nav>
        `;


    const buttonsComponents = ` 
    <button class="btn-address col-12 base">Your Address</button>
    <button class="btn-laundromat col-12">Laundromat</button>
    <button class="btn-credit-card col-12">Credit Card</button>
    <button class="btn-profile col-12">Profile</button>`;

    const formsSelections = document.querySelector('.form-change-buttons');
    if(window.screen.width <= 751) {
        formsSelections.insertAdjacentHTML('afterbegin', menuComponent );
    } else {
        formsSelections.insertAdjacentHTML('afterbegin', buttonsComponents );
     }
    }
})()