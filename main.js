// Đóng mở Menu
var menuBtn = document.querySelector('.menu-btn');
var header = document.querySelector('#header');
var headerHeight = header.clientHeight;

menuBtn.onclick = function() {
    var isClose = headerHeight === header.clientHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
};

// tự đóng menu khi đã chọn

var menuItems = document.querySelectorAll('#nav li a');

menuItems.forEach(function(menuItem) {
    menuItem.onclick = function(event) {
        var isParentMenu = this.classList.contains('parent-menu')
        console.log(isParentMenu)
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }  
    }
});

// đóng mở buy-ticket

var buyBtns = document.querySelectorAll('.buy-ticket-btn');
var openModal = document.querySelector('#modal');

buyBtns.forEach(function(buyBtn) {
    buyBtn.addEventListener('click', function() {
        openModal.classList.add('open');
    })
});


var modalClose = document.querySelector('.modal-close');
var modalContainer = document.querySelector('.modal-container');

modalClose.addEventListener('click', function() {
    openModal.classList.remove('open');
});

modal.addEventListener('click', function() {
    openModal.classList.remove('open');
});

modalContainer.addEventListener('click', function(event)  {
    event.stopPropagation();
});

