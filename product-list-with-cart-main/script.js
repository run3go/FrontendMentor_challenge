document.addEventListener("DOMContentLoaded", () => {
  const menuList = document.getElementsByClassName("menu-list")[0];
  class menu {
    constructor(name, category, price, img) {
      this.name = name;
      this.category = category;
      this.price = price;
      this.img = img;
      this.element;
      this.init();
    }

    init() {
      this.element = document.createElement("li");
      const menuImg = document.createElement("img");
      const category = document.createElement("span");
      const menuName = document.createElement("span");
      const menuPrice = document.createElement("span");

      menuImg.src = this.img + "desktop.jpg";
      menuImg.alt = this.name;
      this.element.append(menuImg);

      category.textContent = this.category;
      menuName.textContent = this.name;
      menuPrice.textContent = "$" + this.price.toFixed(2);

      category.classList.add("category");
      menuName.classList.add("name");
      menuPrice.classList.add("price");

      this.element.append(category);
      this.element.append(menuName);
      this.element.append(menuPrice);

      menuList.append(this.element);
      this.makeBtn();
    }

    makeBtn() {
      const addtoCartBtn = document.createElement("button");
      const img = document.createElement("img");
      img.src = "assets/images/icon-add-to-cart.svg";
      img.alt = "addToCart";
      addtoCartBtn.append(img);
      addtoCartBtn.append("Add to Cart");

      this.element.append(addtoCartBtn);
    }
  }

  const waffle = new menu(
    "Waffle with Berries",
    "Waffle",
    6.5,
    "assets/images/image-waffle-"
  );
  const creme = new menu(
    "Vanilla Bean Crème Brûlée",
    "Crème Brûlée",
    7.0,
    "assets/images/image-creme-brulee-"
  );
  const macaron = new menu(
    "Macaron Mix of Five",
    "Macaron",
    8.0,
    "assets/images/image-macaron-"
  );
  const tiramisu = new menu(
    "Classic Tiramisu",
    "Tiramisu",
    5.5,
    "assets/images/image-tiramisu-"
  );
  const baklava = new menu(
    "pistachio Baklava",
    "Baklava",
    4.0,
    "assets/images/image-baklava-"
  );
  const pie = new menu(
    "Lemon Meringue Pie",
    "Pie",
    5.0,
    "assets/images/image-meringue-"
  );
  const cake = new menu(
    "Red Velvet Cake",
    "Cake",
    4.5,
    "assets/images/image-cake-"
  );
  const brownie = new menu(
    "Salted Caramel Brownie",
    "Brownie",
    4.5,
    "assets/images/image-brownie-"
  );
  const pannaCotta = new menu(
    "Vanilla Panna Cotta",
    "Panna Cotta",
    6.5,
    "assets/images/image-panna-cotta-"
  );
});
