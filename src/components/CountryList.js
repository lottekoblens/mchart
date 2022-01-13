import React from 'react';

const CountryList = ({data=[]}) => {
  return (
    <>
    { data.map((data,index) => {
        if (data) {
          return (
            <div key={data.children.name}>
              <h1>{data.children.name}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default CountryList