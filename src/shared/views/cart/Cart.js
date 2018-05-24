import React from "react";
// import { DatePicker } from "react-md/lib/Pickers";
import { Card, CardTitle, CardText } from 'react-md';

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: 0,
      dataLoaded: false,
      items: [],
    };
    this.cartDisplay = this.cartDisplay.bind(this);
  }

  componentDidMount(){
    let getCart = () => {
      let getCook = cookiename => {
        let cookie = window ? window.parent.document.cookie : '';
        let cookiestring = RegExp("" + cookiename + "[^;]+").exec(cookie);
        return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : "");
      }
      let graingerCart = getCook('grainger-cart').toString();
      let graingerCartTrimmed = '{"data":' + graingerCart.substring(2, graingerCart.length-1) + '}}';
      let graingerCartJSON = JSON.parse(graingerCartTrimmed).data;
      // console.log('About to render cart with this data: ', graingerCartJSON);
      this.setState(previousState => {
        let getItemsArr = (items) => {
          let itemsArr = [];
          if(Array.isArray(items)){
            items.forEach((item, index)=>{
              itemsArr.push({
                  description: item.ItemDetail.Description,
                  manuName: item.ItemDetail.ManufacturerName,
                  manuPartId: item.ItemDetail.ManufacturerPartID,
                  unitPrice: item.ItemDetail.UnitPrice.Money.toString(),
                  // quanitity: 1,
                  // totalItemCost: item.ItemDetail.UnitPrice.Money * 1,
              })
            })
          } else {
            itemsArr.push({
              description: items.ItemDetail.Description,
              manuName: items.ItemDetail.ManufacturerName,
              manuPartId: items.ItemDetail.ManufacturerPartID,
              unitPrice: items.ItemDetail.UnitPrice.Money.toString(),
              // quanitity: 1,
              // totalItemCost: item.ItemDetail.UnitPrice.Money * 1,
          })
          }
          
          return itemsArr;
        }
        return (
          {
            ...previousState,
            cartItems: 1,
            dataLoaded: true,
            totalCost: graingerCartJSON.PunchOutOrderMessageHeader.Money,
            items: getItemsArr(graingerCartJSON.ItemIn)
          }
        )
      })
    }
    setTimeout(getCart, 800);
  }

  cartDisplay() {
    if(this.state.dataLoaded){
      if(this.state.cartItems > 0) {
        return (
          <section>
            <h2>Grainger Items:</h2>
            {this.state.items.map((item, index)=>{
              return (
                <Card key={index}>
                  <CardTitle title={item.manuName}><h6>Part No: <b>{item.manuPartId}</b></h6></CardTitle>
                  <CardText>{item.description}</CardText>
                  <h3>${item.unitPrice.split('.')[0]}.<small>{item.unitPrice.split('.')[1]}</small></h3>
                </Card>
              )
            })}
          </section>
        );
      } else {
        return (
          <div style={{display:'block', margin:'auto'}}>
            <img className="ty-img" src="http://appcenter.bronto.com/wp-content/uploads/2017/03/9.1_CORP_appCenter_icon_cart_recovery@2x.png" alt="cart" />
            <p>Your cart is empty!</p>
            <a href="/">Order Supplies</a>
          </div>
        );
      }
    } else {
      return <div><h3>Getting cart data...</h3><img style={{display:'block', margin: 'auto', width:'120px'}} src="https://www.srlworld.com//campaign-forms/new-landingpg/loading.gif" alt="loading" /></div>
    }
  }

  render() {
    let CartDisplay = this.cartDisplay;

    return (
      <div>
        <main role="main" className="page-container cart">
          <h2>Cart</h2>
          <CartDisplay />
        </main>
      </div >
    );
  }
};
