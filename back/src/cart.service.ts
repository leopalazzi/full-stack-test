import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

export type Cart = {
  id: string;
  items: Item[];
};

export type Item = {
  id: string;
  quantity: number;
  productName: string;
  price: number;
};

@Injectable()
export class CartService {
  // Use this array as your database
  private carts: Cart[] = [];

  create(): Cart {
    const uuid:string = uuidv4();
    this.carts.push({id:uuid,items:[]});
    return this.carts[this.carts.length - 1];
  }

  getCart(id: string): Cart {
    const currentCart= this.carts.find(cart => cart.id.toString() === id.toString());
    return currentCart;
  }

  putItem(id: string, item: Item): Cart {
    const currentCart= this.carts.find(cart => cart.id.toString()  === id.toString() );
    currentCart?.items?.push(item);
    return currentCart;
  }

  putItems(id: string, items: Item[]): Cart {
    items.forEach(item => this.putItem(id,item));
    const currentCart= this.carts.find(cart => cart.id.toString()  === id.toString());
    return currentCart;
  }

  removeItem(cartID: string, productID : string): Cart {
    const currentCart= this.carts.find(cart => cart.id.toString()  === cartID.toString());
    const arrayWithoutProduct = currentCart.items.filter(item => item.id !== productID);
    currentCart.items = arrayWithoutProduct;
    return currentCart;
  }
}
