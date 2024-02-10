import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 85%;
  border-radius: 15px;
`;

const StyledThead = styled.thead`
  background: linear-gradient(to right, #9dbdeb, #7f85d8);
  text-align: center;
  border-radius: 15px;
`;

const StyledTh = styled.th`
  padding: 12px;
  color: white;
  text-align: center;
  border-radius: 15px;
`;

const StyledTd = styled.td`
  padding: 8px;
  text-align: center;
  border-radius: 15px;
`;

const StyledTr = styled.tr`
  border-radius: 15px;
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;


function Table({ columns, data, className }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <StyledTable className={className} {...getTableProps()}>
      <StyledThead>
        {headerGroups.map(headerGroup => (
          <StyledTr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <StyledTh {...column.getHeaderProps()}>{column.render('Header')}</StyledTh>
            ))}
          </StyledTr>
        ))}
      </StyledThead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <StyledTr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <StyledTd {...cell.getCellProps()}>{cell.render('Cell')}</StyledTd>;
              })}
            </StyledTr>
          );
        })}
      </tbody>
    </StyledTable>
  );
}

export default Table;
