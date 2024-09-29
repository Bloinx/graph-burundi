import { gql } from "graphql-request";

export const getUsersQuery = gql`
  {
    users {
      id
      memberSince
      sharesBalance
      socialBalance
      sharesDebt
      socialDebt
      lastLoanDate
      solidarityGroup {
        id
      }
      isActive
    }
  }
`;
