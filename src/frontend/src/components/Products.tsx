import React from "react";
import ProductDTO from "dto/ProductDTO";

function Products(props: any) {
  const orgProducts = props.orgProducts;

  // const orgproductItems = orgProducts.map((product: ProductDTO, index: number) => (
  //   <div key={index} style={{ paddingBottom: '0.2rem !important', borderRight: '2px !important' }} className="accordion-item" >
  //     <h2 className="accordion-header" id={"flush-headingOne" + index}>
  //       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded="false" aria-controls={"#collapse" + index} style={{ paddingLeft: '0.5rem', paddingRight: '2rem', paddingTop: '0.5rem' }}>
  //         <div className="col-lg-6">
  //           <div className="info-box">
  //             {product.type === 'cwi' && (
  //               <span className="badge bg-primary">Caseware Application</span>
  //             )}
  //             {product.type === 'tmpl' && (
  //               <span className="badge bg-primary">Template</span>
  //             )}
  //             {product.type === 'other' && (
  //               <span className="badge bg-primary">Other</span>
  //             )}
  //             <span className="badge bg-danger">{product.notification}</span>
  //             <div className="col-sm-10" style={{ fontSize: '1rem !important', paddingLeft: '0.5rem' }}>
  //               <div className="form-check">
  //                 <input className="form-check-input" type="checkbox" id={'gridCheck' + index} onChange={handleAddReMoveProduct} />
  //                 <label style={{ color: 'black', fontWeight: 'bold', fontSize: 'revert', paddingTop: '4px' }} className="form-check-label" htmlFor={'gridCheck' + index}>{product.name}</label>
  //               </div>
  //             </div>
  //             <p style={{ color: 'grey', fontSize: 'smaller' }}>{product.version}</p>
  //           </div>
  //         </div>
  //         <div className="col-lg-6">
  //           <div className="info-box">
  //             <h6 style={{ wordWrap: 'break-word', textAlign: 'right' }}>
  //               {/* <span className="badge rounded-pill bg-info" *ngFor="let licence of product.licences">
  //                 {{ licence.tagName === 'CaseWare Working Papers' ? '' : licence.tagName }}
  //               </span> */}
  //             </h6>
  //           </div>
  //         </div>
  //       </button>
  //     </h2>
  //     <div id={"collapse" + index} className="accordion-collapse collapse" aria-labelledby={"heading" + index} data-bs-parent="#accordionExample">
  //       <div className="accordion-body pt-2" style={{ color: 'black', fontSize: '14px' }}>
  //         {product.description}
  //       </div>
  //     </div>
  //   </div>
  // ));

  const handleAddReMoveProduct = () => {
    console.log('The checkbox was toggled');
  };

  return (
    // <div>
    //   {orgproductItems}
    // </div>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
  );
}

export default Products;
