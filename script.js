
function siguiente(apartado) {
    const currentApartado = document.getElementById(`apartado${apartado}`);
    currentApartado.style.opacity = 0;

    setTimeout(() => {
        currentApartado.style.display = 'none';

        const nextApartado = document.getElementById(`apartado${apartado + 1}`);
        nextApartado.style.display = 'block';

        document.querySelector('body').style.height = "100%"
        goToTarget();

        setTimeout(() => {
            nextApartado.style.opacity = 1;
        }, 50);
    }, 500);
    
}

function goToTarget() {
    const targetElement = document.getElementById('im');
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // desplazamiento suave
    } else {
        console.error('Elemento con ID "target" no encontrado');
    }
}

function volver() {
    const apartado3 = document.getElementById('apartado3');
    apartado3.style.opacity = 0;

    setTimeout(() => {
        apartado3.style.display = 'none';
        const apartado1 = document.getElementById('apartado1');
        apartado1.style.display = 'block';

        document.querySelector('body').style.height = "100vh"

        setTimeout(() => {
            apartado1.style.opacity = 1;
        }, 50);
    }, 500);
}
