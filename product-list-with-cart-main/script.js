document.addEventListener("DOMContentLoaded", () => {
  const menuList = document.getElementsByClassName("menu-list")[0];
  const cartList = document.getElementsByClassName("cart-box-list")[0];

  class menu {
    constructor(name, category, price, img) {
      this.name = name;
      this.category = category;
      this.price = price.toFixed(2);
      this.img = img;
      this.qty = 1;
      this.element;
      this.init();
    }

    init() {
      this.element = document.createElement("li");
      const menuImg = document.createElement("img");
      const category = createSpan(this.category, "category");
      const menuName = createSpan(this.name, "name");
      const menuPrice = createSpan(this.price, "price");

      menuImg.src = this.img + "desktop.jpg";
      menuImg.alt = this.name;
      this.element.append(menuImg);

      this.element.append(category);
      this.element.append(menuName);
      this.element.append(menuPrice);

      menuList.append(this.element);
      this.makeBtn();
    }

    makeBtn() {
      const addtoCartBtn = document.createElement("div");
      const anchor = document.createElement("a");
      const img = document.createElement("img");
      img.src = "assets/images/icon-add-to-cart.svg";
      img.alt = "addToCart";
      addtoCartBtn.append(img);
      addtoCartBtn.append("Add to Cart");

      addtoCartBtn.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          this.addtoCart(e);
        },
        { once: true }
      );

      anchor.append(addtoCartBtn);
      this.element.append(addtoCartBtn);
    }

    addtoCart(e) {
      const btn = e.target;
      btn.innerHTML = "";
      btn.classList.add("on");
      const decreaseBtn = document.createElement("button");
      const increaseBtn = document.createElement("button");
      const qty = createSpan(this.qty, "qty");

      decreaseBtn.classList.add("decrease-btn");
      increaseBtn.classList.add("increase-btn");

      decreaseBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (this.qty === 1) {
          this.makeBtn();
          cart.remove(this.name);
        } else {
          this.qty--;
          btn.getElementsByClassName("qty")[0].textContent = this.qty;
          cart.add(this);
        }
      });

      increaseBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.qty++;
        btn.getElementsByClassName("qty")[0].textContent = this.qty;
        cart.add(this);
      });

      btn.append(decreaseBtn);
      btn.append(qty);
      btn.append(increaseBtn);

      cart.add(this);
    }
  }

  const cart = {
    list: new Map(),

    add: function (data) {
      this.list.set(data.name, data);
      this.viewList();
    },

    remove: function (name) {
      this.list.delete(name);
      console.log(this.list);
      this.viewList();
    },

    viewList: function () {
      const img = document.querySelector(".cart-box > img");
      const span = document.querySelector(".cart-box > span");
      const cartBoxActive =
        document.getElementsByClassName("cart-box__active")[0];

      cartList.innerHTML = "";
      const totalQty = document.querySelector(".cart-box .qty");
      const totalPrice = document.querySelector(".total-price-txt");
      totalQty.textContent = [...this.list.values()].reduce(
        (acc, cur) => acc + cur.qty,
        0
      );
      totalPrice.textContent = [...this.list.values()]
        .reduce((acc, cur) => acc + cur.price * cur.qty, 0)
        .toFixed(2);
      if (this.list.size) {
        img.style.display = "none";
        span.style.display = "none";
        this.list.forEach((item, key) => {
          const liElement = document.createElement("li");
          const name = createSpan(key, "name");
          const qty = createSpan(item.qty + "x", "qty");
          const price = createSpan(item.price, "price");

          const sumPrice = item.qty * item.price;
          const sum = createSpan(sumPrice.toFixed(2), "sum");
          const removeBtn = document.createElement("button");

          removeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.list.delete(key);
            this.viewList();
            item.makeBtn();
            item.qty = 1;
          });

          liElement.append(name);
          liElement.append(qty);
          liElement.append(price);
          liElement.append(sum);
          liElement.append(removeBtn);
          cartList.append(liElement);
        });
        cartBoxActive.classList.add("on");
      } else {
        img.style.display = "inline-block";
        span.style.display = "inline-block";
        cartBoxActive.classList.remove("on");
      }
    },
  };

  function createSpan(text, className) {
    const spanElement = document.createElement("span");
    spanElement.textContent = text;
    spanElement.classList.add(className);
    return spanElement;
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
