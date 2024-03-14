import "/node_modules/bootstrap/dist/css/bootstrap.css"


import Card from "./Card"

function App() {
  
  return (
  <div className="container">
    <div className="row">
      <div className="col-lg-10">
        <div className="row">
          <div className="col-lg-12"><h1>Products</h1></div>

        </div>

        <div className="row">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        
       

      </div>
      <div className="col-lg-2">
        <h1>Cart</h1>

        <ol className="list-group list-group-numbered">
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span className="badge text-bg-primary rounded-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span className="badge text-bg-primary rounded-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span className="badge text-bg-primary rounded-pill">14</span>
  </li>
</ol>

      </div>
    </div>

  </div>
  )

}


export default App
