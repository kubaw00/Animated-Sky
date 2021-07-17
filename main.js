
    const elements = document.querySelectorAll('.anim-bg')
    
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerElX = clientX - window.innerWidth/2;
        const centerElY = clientY - window.innerHeight/2;
        
        elements.forEach(element => {
            const ratioX = -element.getAttribute('ratioX');
            const ratioY = -element.getAttribute('ratioY');
            
            element.style.transform = `translate(${centerElX*ratioX}px, ${centerElY*ratioY}px)`
        })

    })