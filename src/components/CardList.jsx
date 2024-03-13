import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
export default function CardList({ city, name, logo, id }) {
  return (
    <Link to={`/association/${id}`} className="lowercase">
      <Card className="py-4 border hover:border-warning hover:cursor-pointer">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Fleurs Evéillées</p>
          <small className="text-default-500 uppercase">{city}</small>
          <h4 className="font-bold text-large uppercase">{name}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <img src={logo} className="object-cover w-96 h-40" />
        </CardBody>
      </Card>
    </Link>
  );
}
