const menu = () => {
    const menuPanel = document.querySelector("menu");
    const body = document.querySelector("body");
    
    const handlMenu = () => {
        menuPanel.classList.toggle("active-menu"); 
    };

    const toggleMenu = () => {
        body.addEventListener("click", (e) => {
            console.log(e.target);
            
            if (e.target.closest(".menu") || e.target.closest(".close-btn") || e.target.closest("ul>li>a")) {
                handlMenu();
            } else if (!e.target.closest('.active-menu')) {
                console.log(e.target);
                
                handlMenu();
            }
        });
    };

    toggleMenu();
};

export default menu;