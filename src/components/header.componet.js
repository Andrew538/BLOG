import {Components} from "../core/component";


export class HeaderComponent extends Components {
    constructor(id) {
        super(id)
       
    }
            

    init() {

        if(localStorage.getItem('visited')) {
            this.hide()
            showContent()
        } else {
            this.show()

        }
        const btn = this.$el.querySelector('.js-header-start')
        btn.addEventListener('click', buttonHandler.bind(this))

       
    }
}


function buttonHandler() {
    localStorage.setItem('visited', JSON.stringify(true) )
    this.hide()  
    showContent()
}

function showContent() {
    const nav = document.querySelector('.main')

    nav.classList.add('main-show')
}

