import { LicenceDto } from "dtos/licence.dto";
import React from "react";

function ProductLicenceTags(props: any) {
  const productLicences = props.productLicences;

  const productLicencesItems = productLicences.map(
    (licence: LicenceDto, index: number) => {
      <div key={index}>
        <div className="badge rounded-pill bg-info">{licence.tagName}</div>
      </div>;
    }
  );

  return (
    <h6 style={{ wordWrap: "break-word", textAlign: "right" }}>
      {productLicencesItems}
    </h6>
  );
}

export default ProductLicenceTags;
