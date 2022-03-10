import { buildQueries } from "@testing-library/react";
import React from "react";
import { Card } from "reactstrap";
import Beers from "./Subcomponents/Beers";

const CardList = ({ beers }) => {

    //rendering cardcomponent above
    return (
        <div>
            {
                beers.map((beer, i) => {
                    return (
                    <Card 
                        key={i} 
                        id={beer[i].id} 
                        name={beer[i].beerName} 
                        description={beer[i].description}
                    />
                    )
                })
            }
        </div>
    )
}

export default CardList;