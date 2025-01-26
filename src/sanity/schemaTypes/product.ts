import { defineType } from "sanity"

export default defineType({
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: "category",
      title: "Category",
      type: 'string',
      options: {
        list: [
          { title: 'T-Shirt', value: 'tshirt' },
          { title: 'Short', value: 'short' },
          { title: 'Jeans', value: 'jeans' },
          { title: 'Hoodie', value: 'hoodie' },
          { title: 'Shirt', value: 'shirt' },
        ]
      }
    },
    {
      name: "discountPercent",
      title: "Discount Percent",
      type: 'number',
    },
    {
      name: "new",
      type: 'boolean',
      title: "New",
    },
    {
      name: "colors",
      title: "Colors",
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: "sizes",
      title: "Sizes",
      type: 'array',
      of: [{ type: 'string' }]
    },
    // **Stock Quantity** field
    {
      name: 'stockQuantity',
      title: 'Stock Quantity',
      type: 'number',
      validation: Rule => Rule.min(0) // Ensure stock quantity is a positive number
    },
    // **Reviews** field
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'rating',
              title: 'Rating',
              type: 'number',
              validation: Rule => Rule.min(1).max(5) // Ratings should be between 1 and 5
            },
            {
              name: 'comment',
              title: 'Comment',
              type: 'text'
            },
            {
              name: 'author',
              title: 'Author',
              type: 'string'
            }
          ]
        }
      ]
    },
    // **Tags** field
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ],
})
