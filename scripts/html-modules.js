class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `
        <header id="header" >

            <div class="header-spacer"></div>

            
            <div class="header-left-section">
                <a href="index.html" ><img class="site-logo" src="pictures/logo.png" alt="Site Logo"></a>
                <a href="index.html" class="site-title">Steel-Clash Robotics</a>
            </div>
            


            <nav>

                <ul class="top-bar">
                    <li class="hide-on-mobile" > <a href="#" >Home</a> </li>
                    <li class="hide-on-mobile" > <a href="#" >News</a> </li>
                    <li class="hide-on-mobile" > <a href="#" >About</a> </li>
                    <li class="hide-on-mobile" > <a href="#" >Classes</a> </li>
                    <li class="hide-on-pc" onclick=showSidebar() > <a href="#" ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill= #c4beb2 ><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a> </li>
                </ul>
                
                <ul class="sidebar">
                    <li onclick=hideSidebar() > <a href="#" ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill= #c4beb2 ><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a> </li>
                    <li class="hide-on-pc" > <a href="#" >Home</a> </li>
                    <li class="hide-on-pc" > <a href="#" >News</a> </li>
                    <li class="hide-on-pc" > <a href="#" >About</a> </li>
                    <li class="hide-on-pc" > <a href="#" >Classes</a> </li>
                </ul>

            </nav>

            <div class="header-spacer"></div>

        </header>
        `
    }
}

class MyFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `
        
        `
    }
}

customElements.define('my-footer', MyFooter)

customElements.define('my-header', MyHeader)