import { gql } from "@apollo/client";

export const GET_CATEGORY = gql`
  query ($slug: String) {
    categories(where: { slug: $slug }) {
      name
      slug
    }
  }
`;

export const GET_CATEGORIES = gql`
  query {
    categories {
      name
      slug
    }
  }
`;
