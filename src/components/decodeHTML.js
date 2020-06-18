import React from "react";

const decodeHTML = html => {
  const rawHTML ={__html: html}
  return <svg className="card-icn-item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.08 77.65" dangerouslySetInnerHTML={rawHTML} />
}

export default decodeHTML;