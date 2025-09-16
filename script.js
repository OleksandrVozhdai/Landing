const contactform = document.getElementById('ContactForm');

function openPopup() {
    console.log("Button clicked");
      document.getElementById("popup-bg").style.display = "flex";
    }

function closePopup() {
    document.getElementById("popup-bg").style.display = "none";
}

function scrollToItem(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth" 
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const paymentform = document.getElementById('paymenentForm');

    paymentform.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const formData = new FormData(paymentform);
        const name = formData.get('paymentName').trim();
        const email = formData.get('paymentEmail').trim();
        const cardnum = formData.get('cardnum').trim();
        const cvv = formData.get('cvv').trim();

        if (!/^[a-zA-Zа-яА-ЯёЁїЇіІєЄґҐ]+$/.test(name)) {
            document.getElementById('paymentNameLabel').textContent = "Введіть коректне ім'я!";
            document.getElementById('paymentNameLabel').style.color = 'red';
            return;
        } else
        {
            document.getElementById('paymentNameLabel').textContent = 'ім\'я';
            document.getElementById('paymentNameLabel').style.color = '#9798a1ff';
        }

        if (!/^\d{16}$/.test(cardnum)) {
            document.getElementById('cardnumLabel').textContent = "Не правильний номер картки!";
            document.getElementById('cardnumLabel').style.color = 'red';
            return;
        } else 
        {
            document.getElementById('cardnumLabel').textContent = 'Номер картки';
            document.getElementById('cardnumLabel').style.color = '#9798a1ff';
        }

        if (!/^\d{3}$/.test(cvv)) {
            document.getElementById('cvvLabel').textContent = "Не правильний cvv!";
            document.getElementById('cvvLabel').style.color = 'red';
            return;
        } else 
        {
            document.getElementById('cvvLabel').textContent = 'cvv';
            document.getElementById('cvvLabel').style.color = '#9798a1ff';
        }
        
        
        alert("Оплата пройшла успішно");
        closePopup();
    });
});

contactform.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const formData = new FormData(contactform);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const msg = formData.get('message').trim();

    if (!/^[a-zA-Zа-яА-ЯёЁїЇіІєЄґҐ]+$/.test(name)) {
        console.log("Name must contain only letters");
        document.getElementById('contactNameLabel').textContent = "Введіть коректне ім'я!"
        document.getElementById('contactNameLabel').style.color = "red";
        return;
    } else 
    {
        document.getElementById('contactNameLabel').textContent = 'ім\'я';
        document.getElementById('contactNameLabel').style.color = '#9798a1ff';
    }

    alert("Повідомлення надіслано!");
});