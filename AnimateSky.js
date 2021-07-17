class AnimateSky {
    constructor(elements){
        this.elements = document.querySelectorAll(elements)
        
    }

    listenCursorMove(e) {
        const { clientX, clientY } = e;
        const posX = clientX - window.innerWidth/2;
        const posY = clientY - window.innerHeight/2;

        this.elements.forEach(el => this.moveElement(el, posX, posY))
    }

    moveElement(el, posX, posY) {
        const ratioX = -el.getAttribute('ratioX');
        const ratioY = -el.getAttribute('ratioY');
        el.style.transform = `translate(${posX*ratioX}px, ${posY*ratioY}px)`
    }

}



