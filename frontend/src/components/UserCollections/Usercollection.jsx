import React from "react";
import styles from "./Usercollection.module.css";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Usercollection = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Contact</Th>
            <Th>method</Th>
            <Th isNumeric>Date by</Th>
            <Th isNumeric>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <div>
                <img className={styles.}
                  src="https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="imgofhuman"
                />
              </div>
              <div>
                <p>Aabiskar</p>
                <p>@Abiskrdhenga29</p>
              </div>
            </Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
            <Td>false</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
            <Td>false</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
            <Td>false</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Usercollection;
