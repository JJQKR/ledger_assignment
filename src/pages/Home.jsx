import React from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import MonthNavigation from "../components/MonthNavigation";
import ExpenseList from "../components/ExpenseList";
import CreateExpense from "../components/CreateExpense";

const Container = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

export const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`;

export default function Home({ user, expenses, setExpenses }) {
  const [month, setMonth] = useState(1);

  const filteredExpenses = expenses.filter(
    (expense) => expense.month === month
  );

  //강의와 다르게 filter로직 ExpenseList로 안 옮기고 여기다 둠
  //expenses 중복 선언 문제 있어서

  //근데 지출데이터 등록 영상 마지막부분에
  //expense랑 setExpense랑 filteredExpense 로직을 다 지운단말이야
  //왜죠?

  return (
    <Container>
      <MonthNavigation month={month} setMonth={setMonth} />
      <CreateExpense user={user} month={month} />
      <ExpenseList expenses={filteredExpenses} />
    </Container>
  );
}
