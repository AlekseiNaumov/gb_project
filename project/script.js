const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

class GoodsItem {
  constructor({ title = ' ', price = 0 }) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `
    <div class="goods-item">
      <h3>${this.title}</h3>
      <p>${this.price}</p>
    </div>
  `;
  }
}

class GoodsList {
  list = [];
  fetchGoods() {
    this.list = goods
  }
  calculate() {
    const result = this.list.reduce((total, priceGood) => {
      total += priceGood.price;
      return total;
    }, 0);
    document.querySelector('.goods-sum').innerHTML = `Total price: ${result}`;
  }
  render() {
    document.querySelector('.goods-list').innerHTML = this.list.map(item => {
      const goodsItem = new GoodsItem(item);
      return goodsItem.render()
    }).join('');
  }
}

const goodList = new GoodsList()
goodList.fetchGoods()
goodList.calculate()
goodList.render()