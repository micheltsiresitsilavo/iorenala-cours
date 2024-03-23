import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const columns = [
  {
    id: "nom",
    label: "NOM",
  },
  {
    id: "examen",
    label: "EXAMEN",
  },
  {
    id: "ecole",
    label: "ECOLE",
  },
  {
    id: "contact",
    label: "CONTACT",
  },
];

export default function Tablaux({ data }) {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.id}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={data || []}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
