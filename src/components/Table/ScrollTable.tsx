import React from "react";
import styled from "styled-components";

export interface Memo {
  contents: string;
  createdAt: string;
  id: number;
  modifiedAt: string;
  modifiedBy: string;
}

export interface TableProps {
  memos: Memo[];
  handleOnClick: (memo: Memo) => void;
}

function ScrollTable({ memos, handleOnClick }: TableProps) {
  return (
    <Block>
      <TableStyles>
        <thead>
          <tr>
            <th>등록일</th>
            <th>수정일</th>
            <th>메모요약</th>
            <th>작성자</th>
            <th>메모전체</th>
          </tr>
        </thead>
        <tbody>
          {memos.map((memo, index) => (
            <tr key={index}>
              <td>{memo.createdAt}</td>
              <td>{memo.modifiedAt}</td>
              <td>{memo.contents}</td>
              <td>{memo.modifiedBy}</td>
              <td onClick={() => handleOnClick(memo)}>전체보기</td>
            </tr>
          ))}
        </tbody>
      </TableStyles>
    </Block>
  );
}

const Block = styled.div`
  overflow-y: scroll;
  max-height: 162px;
  height: 100%;
  width: 100%;
  margin-top: 18px;
`;

const TableStyles = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f8f8f8;

  thead {
    position: sticky;
    top: 0;
    background-color: #f8f8f8;
  }

  th,
  td {
    text-align: center;
  }

  th {
    color: #464646;
    font-size: 14px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: 400;
    flex: 1;
  }

  tr {
    height: 40px;
    display: flex;
    & > td:last-child {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  td {
    flex: 1;
    background-color: #fff;
    font-size: 14px;
    color: #464646;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: 400;
    border-bottom: 1px solid #ececec;
  }
`;

export default ScrollTable;
