import {CartItem} from './cart-item.model'
import {MenuItem} from '../menu-item/menu-item.model'


export class ShoppingCartService{
  items: CartItem[] = []

  clear(){
    this.items = []
  }

  addItem(item:MenuItem){
      let founditem = this.items.find((mItem) => mItem.menuItem.id === item.id)
      if(founditem){
        founditem.quantity = founditem.quantity + 1
      } else {
        this.items.push(new CartItem(item))
        console.log("AddItem")

      }
  }

  removeItem(item:any){
    this.items.splice(this.items.indexOf(item), 1)
  }

  total():number{
    return this.items
    .map(item => item.value())
    .reduce((prev,value) => prev+value, 0)
  }
}
