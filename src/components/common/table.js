import React from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";

function CommonTable(props) {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {props.header.map((h) => (
            <Table.HeaderCell>{h}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {props.tbody.map((tb) => (
          <Table.Row>
            <Table.Cell>{tb.key}</Table.Cell>
            <Table.Cell>{tb.key2}</Table.Cell>
            <Table.Cell>{tb.key3}</Table.Cell>
            <Table.Cell>{tb.key4}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
  //   );
}

export default CommonTable;
