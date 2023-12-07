import { FilterByType } from "../types/filters"

function getFieldByType(type: FilterByType) {
    if (type == FilterByType.SHIRTS) return 'Shirt'
    if (type == FilterByType.SNEAKERS) return 'Sneaker'
}

export function mountQuery(category: FilterByType) {
    if (category == FilterByType.ALL) return `
    query {
        products {
          data {
            id
            attributes {
              variants {
                data {
                  id
                  attributes {
                    sale
                    descount
                  }
                }
              }
              product_name
              price
              reviews {
                data {
                  id
                  attributes {
                    rate
                    review
                    reviewer
                  }
                }
              }
              product_images {
                data {
                  id
                  attributes {
                    url
                    formats
                  }
                }
              }
              category {
                data {
                  id
                  attributes {
                    cattegory_name
                  }
                }
              }
            }
          }
        }
      }
    `

    const type = getFieldByType(category)

    return `
    query {
        products (filters: {category: {cattegory_name: {eq: "${type}"}}}) {
          data {
            id
            attributes {
              variants {
                data {
                  id
                  attributes {
                    sale
                    descount
                  }
                }
              }
              product_name
              price
              reviews {
                data {
                  id
                  attributes {
                    rate
                    review
                    reviewer
                  }
                }
              }
              product_images {
                data {
                  id
                  attributes {
                    url
                    formats
                  }
                }
              }
              category {
                data {
                  id
                  attributes {
                    cattegory_name
                  }
                }
              }
            }
          }
        }
      }
    `
}