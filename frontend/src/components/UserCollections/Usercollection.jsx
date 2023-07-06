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
import { TfiWorld } from "react-icons/Tfi";
import { FaRegHandPaper } from "react-icons/Fa";

const Usercollection = () => {
  return (
    <TableContainer>
      <Table variant="simple">
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
            <Td className={styles.userNameWrapper}>
              <div className={styles.profileNameWrapper}>
                <img
                  className={styles.profileName}
                  src="https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="imgofhuman"
                />
              </div>
              <div>
                <p>Aabiskar</p>
                <p>@Abiskrdhenga29</p>
              </div>
            </Td>
            <Td>
              <TfiWorld />
            </Td>
            <Td isNumeric>23/09/2023</Td>
            <Td display={"flex"} justifyContent={"end"}>
              <div className={styles.analyticsStatusActive}>Active</div>
            </Td>
          </Tr>
          <Tr>
            <Td className={styles.userNameWrapper}>
              <div className={styles.profileNameWrapper}>
                <img
                  className={styles.profileName}
                  src="https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="imgofhuman"
                />
              </div>
              <div>
                <p>Ronaldo</p>
                <p>@Ronaldo47</p>
              </div>
            </Td>
            <Td>
              <FaRegHandPaper />
            </Td>
            <Td isNumeric>23/09/2023</Td>
            <Td display={"flex"} justifyContent={"end"}>
              <div className={styles.analyticsStatusInActive}>
                <p>Inactive</p>
              </div>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Usercollection;
