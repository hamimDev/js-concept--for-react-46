// sessionStorage.setItem('hamim', 'vi');
// sessionStorage.removeItem('hamim');

// localStorage.setItem('Jihad', 'Islam');
// localStorage.removeItem('Jihad');

const addLocalStorage = () =>{
    const idInput = document.getElementById('Storage-id');
    const id = idInput.value;

    const valueInput = document.getElementById('Storage-value');
    const value = valueInput.value;

    localStorage.setItem(id , value);

    idInput.value = '';
    valueInput.value = '';
}