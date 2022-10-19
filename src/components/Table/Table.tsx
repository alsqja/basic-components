import styled from "styled-components";
import theme from "../../styles/theme";
import Typography from "../Typography";
import { Cell } from "./Cell";
import { getReplaceMobile, header, items } from "./data";
import { IAccount } from ".";
import { useState } from "react";
import { BasicButton } from "./BasicButton";

interface ITableHeader {
  id?: string;
  isCheckBox?: boolean;
  minWidth?: number;
  title?: string;
  headerWidth?: number;
  width?: number;
  wrapWidth?: number;
  align?: string;
}

const TableHeader = ({ header }: { header: ITableHeader[] }) => {
  return (
    <Header>
      {header.map((x, index) => (
        <Cell
          key={index}
          minWidth={x.minWidth}
          wrapWidth={x.wrapWidth}
          align={x.align}
        >
          {x.title}
        </Cell>
      ))}
    </Header>
  );
};

export const Table = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [values, setValues] = useState<IAccount[]>(items);
  const totalElement = 7;
  const size = 20;
  const number = 0;

  return (
    <ListContainer>
      <ListBox>
        <Root>
          <TableHeader header={header} />
          {values?.map((item, idx) => (
            <Row key={idx}>
              {header.map((h: ITableHeader, index: number) => (
                <Cell
                  key={index}
                  minWidth={h.minWidth}
                  wrapWidth={h.wrapWidth}
                  align={h.align}
                >
                  {h.id
                    ? {
                        adminType: item[h.id] === "INTERNAL" ? "내부" : "현장",
                        authorizeType: item[h.id],
                        basicAddr:
                          item.basicAddr !== null
                            ? item.basicAddr?.split(" ")[0] +
                              " " +
                              item.basicAddr?.split(" ")[1]
                            : " ",
                        fieldOffice:
                          item.adminType === "INTERNAL" || !item.fieldOffice
                            ? " "
                            : item.fieldOffice,
                        mobile: `${getReplaceMobile(item?.mobile)}`,
                        status: item.status ? "승인" : "미승인",
                        resetPw: <ButtonDetail>초기화</ButtonDetail>,
                        delete: <ButtonDetail>삭제</ButtonDetail>,
                        modify: (
                          <BasicButton type="button" size="medium">
                            수정
                          </BasicButton>
                        ),
                      }[h.id] || item[h.id]
                    : totalElement - idx - size * number}
                </Cell>
              ))}
            </Row>
          ))}
        </Root>
      </ListBox>
    </ListContainer>
  );
};

const Header = styled.div`
  padding: 14px 0;
  background: #f7f7f7;
  display: flex;

  align-items: center;
  border-bottom: 1px solid #ededed;
  width: 100%;
`;

const Root = styled.div`
  margin-top: 16px;
  width: 100%;
  min-width: 1632px;

  box-shadow: ${theme.palette.shadow01};
`;

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #ededed;
  width: 100%;
`;

const ButtonDetail = styled(({ ...props }) => (
  <Typography as="div" {...props} />
))`
  text-decoration-line: underline;
  cursor: pointer;
`;

const ListContainer = styled.div`
  overflow-x: auto;
`;

const ListBox = styled.div`
  overflow-y: visible;
  padding-bottom: -50px;
  margin-bottom: 50px;
`;
