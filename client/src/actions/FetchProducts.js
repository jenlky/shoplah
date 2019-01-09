// merge these two functions n create a function
this.callApi()
.then(res => {
  /*
  store.dispatch({
    type: 'RES_DATA_SUCCESS',
    products: res.data
  });*/
  console.log(res);
  this.setState({ products: res.data });
  console.log(this.state);
})
.catch(err => console.log(err));

callApi = async () => {
  const response = await fetch('/products');
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
}