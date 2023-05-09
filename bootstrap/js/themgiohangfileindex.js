const buyButtons = document.querySelectorAll('.btn-danger');

// Đặt lắng nghe sự kiện cho mỗi nút mua hàng
buyButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    // Lấy giá trị của thuộc tính dữ liệu name
    const name = event.target.dataset.name;

    // Lấy giá trị của thuộc tính dữ liệu img
    const img = event.target.dataset.img;

    // Sử dụng các giá trị thuộc tính dữ liệu để thực hiện các thao tác khác
    console.log('Bạn vừa nhấn nút mua hàng của sản phẩm:', name);
    console.log('Ảnh của sản phẩm:', img);
  });
});