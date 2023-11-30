alert('Welcome Home page saya , Pernalkan nama saya Resty Amelia Sainuddin , usia saya 16 , hobi saya  Mendengar Musik, Nyanyi, Badminton. Adapun cita-cita saya  Jadi Pacar Jisung . Sekian Terima kasih............... ')

const toggleHeart = document.getElementById('heart');
    toggleHeart.addEventListener('click', () => {
        toggleHeart.classList.toggle('fa-solid')
        if (toggleHeart.classList == 'fa-regular fa-heart fa-solid') {
            toggleHeart.style.color = 'red'
        }
        else {
            toggleHeart.style.color = 'white'
        }
    })
    