( () => {
    const page = window.location.pathname.split('/').pop();
    console.log(page)

    if(page == "index.html"){
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
})()