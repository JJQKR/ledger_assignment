import { Section } from "../pages/Home";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useQueries } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../lib/api/expense";

const NoExpenseMessage = styled.div`
  text-align: center;
  font-size: 16px;
  color: #888;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const ExpenseItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ExpenseItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  span {
    font-size: 16px;
    color: #333;
  }

  span:last-child {
    font-weight: bold;
    color: #007bff;
    flex-shrink: 0;
  }
`;

const ExpenseDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    &:first-child {
      margin-bottom: 5px;
      color: #666;
      font-size: 14px;
    }

    &:last-child {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
  }
`;

export default function ExpenseList() {
  // 탠스택쿼리 사용하므로 ({expenses}) 파라미터를 더이상 여기서 가져오지 않음
  const navigate = useNavigate();
  const {
    data: expenses = [],
    isLoading,
    error,
  } = useQuery({ queryKey: ["expense"], queryFn: getExpenses() });

  console.log("isLoading : ", isLoading);
  console.log("expense : ", expenses);

  return (
    <Section>
      {expenses.length === 0 ? (
        <NoExpenseMessage>지출이 없습니다.</NoExpenseMessage>
      ) : (
        <ExpenseItemList>
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              onClick={() => {
                navigate(`/detail/${expense.id}`);
              }}
            >
              <ExpenseDetails>
                <span>{expense.date}</span>
                <span>{`${expense.item} - ${expense.description}`}</span>
              </ExpenseDetails>
              <span>{expense.amount.toLocaleString()} 원</span>
            </ExpenseItem>
          ))}
        </ExpenseItemList>
      )}
    </Section>
  );
}
