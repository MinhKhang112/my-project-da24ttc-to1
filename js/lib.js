﻿const productList = [
  { id: "1", name: "Bánh tráng phơi sương", price: 30000, image: "../assets/images/banh-trang-phoi-suong.jpg", productLink: "https://dacsantayninh.info/san-pham/banh-trang-phoi-suong/?srsltid=AfmBOoov--sNLCA78SMqNxgRfjdAsxBHM7vo4hbG2Lcg8HhKn8uJ1B0B" },
  { id: "2", name: "Cơm cháy chà bông", price: 40000, image: "../assets/images/com-chay-cha-bong.jpg", productLink: "https://comchayxua.vn/products/com-chay-cha-bong-195-g" },
  { id: "3", name: "Khô gà lá chanh", price: 100000, image: "../assets/images/kho-ga-la-chanh.jpg", productLink: "https://traicaysaynutfarm.com/san-pham/kho-g" },
  { id: "4", name: "Mực hấp nước dừa", price: 70000, image: "../assets/images/muc-hap-nuoc-dua.jpg", productLink: "https://gocbansi.com/product/muc-hap-nuoc-dua-gia-si-300g/" },
  { id: "5", name: "Rong biển cháy tỏi", price: 59000, image: "../assets/images/rong-bien-chay-toi.jpg", productLink: "https://www.dacsanbanhpia.com/rong-bien-chay-toi-me-hieu-mua-an-hop-150gr.html" },
  { id: "6", name: "Da heo mắm hành", price: 50000, image: "../assets/images/da-heo-mam-hanh.jpg", productLink: "https://www.tastyfood.com.vn/products/da-heo-mam-hanh-tasty-food-1" },
  { id: "7", name: "Đậu phộng tỏi ớt", price: 13000, image: "../assets/images/dau-phong-toi-ot.jpg", productLink: "https://www.bachhoaxanh.com/cac-loai-hat/dau-phong-vi-toi-ot-pinattsu-oishi-goi-85g" },
  { id: "8", name: "Khoai tây chiên giòn", price: 65000, image: "../assets/images/khoai-tay-chien-gion.jpg", productLink: "https://haisandathanh.com/san-pham/khoai-tay-chien-97.html" },
  { id: "9", name: "Hạt điều rang muối", price: 80000, image: "../assets/images/hat-dieu-rang-muoi.jpg", productLink: "https://devafood.vn/hat-dieu-rang-muoi-230g/?srsltid=AfmBOoqxTMuuWWx6E0rpD3WGWr3iTWKq1z0L7uj8Erf13Ow4hK2Qy0_z" },
  { id: "10", name: "Bánh tráng trộn", price: 30000, image: "../assets/images/banh-trang-tron.jpg", productLink: "https://banhtrangmuoi.vn/products/banh-trang-tron-truyen-thong" }
];

function addProduct(id, name, price, image, hyperLink)
{
	//Tạo một product item
	//1. Tạo khung chứa 1 item
	const productItem = document.createElement("div");
	productItem.setAttribute("class","product-item col m-4");

	//2. Tạo khung chưa hình
	const productImage = document.createElement("div");
	productImage.setAttribute("class","product-image h-75");

	//3. Tạo đối tượng hình ảnh
	const Image = document.createElement("img");
	Image.setAttribute("src", image);
	Image.setAttribute("alt", name);
	Image.setAttribute("class", "img-fluid object-fit-cover h-100");

	//4. Gán hình vào khung
	productImage.appendChild(Image);

	//5. Tạo khung chưa thông tin
	const productInfo = document.createElement("div");
	productInfo.setAttribute("class","product-info h-25 text-center");

	//Tạo paragraph 1
	const productName = document.createElement("p");
	const productNameText = document.createTextNode(name);
	productName.appendChild(productNameText);

	//Tạo paragraph 2
	const productPrice = document.createElement("p");
	const productPriceText = document.createTextNode(price);
	productPrice.appendChild(productPriceText);

	//Tạo hyperLink
	const productLink = document.createElement("a");
	const productLinkText = document.createTextNode("Xem chi tiết");
	productLink.appendChild(productLinkText);
	productLink.setAttribute("href", hyperLink);
	productLink.setAttribute("class", "btn btn-info");

	//Gắn paragraph 1, 2 và Link vào khung 
	productInfo.appendChild(productName);
	productInfo.appendChild(productPrice);
	productInfo.appendChild(productLink);

	//6. Gắn khung hình và thông tin vào product item
	productItem.appendChild(productImage);
	productItem.appendChild(productInfo);

	//Gắn product item vào product list
	document.getElementById("product-list").appendChild(productItem);
}

function showProduct(products)
{
	const container = document.getElementById('product-list');

	container.innerHTML = "";

	products.forEach(item => {
		//Tạo element cha bằng createElement
		const productItem = document.createElement('div');
		productItem.className = 'product-item col-md-3 col-sm-6';
		//productItem.setAttribute("class", "product-item col-md-3 col-sm-6");
		//Sử dụng Template Literal nạp dữ liệu vào 
		productItem.innerHTML = `
			<div class="product-image ratio ratio-1x1 overflow-hidden">
				<img src="${item.image}" alt="${item.name}" class="img-fluid object-fit-cover">
			</div>
			<div class="product-info p-2 text-center">
				<p class="product-name mb-1">${item.name}</p>
				<p class="product-price text-danger fw-bold mb-2">
					${item.price.toLocaleString('vi-VN')}
				</p>
				<a href="${item.productLink}" class="btn btn-sm btn-outline-primary w-100">
					Xem chi tiết
				</a>
			</div>
		`;
		container.appendChild(productItem);
	});
}